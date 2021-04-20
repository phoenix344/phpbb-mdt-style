import fs from 'fs';
import * as process from 'process';
import * as util from 'util'

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

(async () => {

  const [, , file, ...args] = process.argv;
  const map = new Map();
  let allowLoop = true;
  for (const raw of args) {
    if ('--noloop' === raw) {
      allowLoop = false;
    } else {
      const [key, val] = raw.split(':');
      map.set(new RegExp(key, 'g'), val);

      // I mark variables that should be kept as __REMAIN_newkey__
      // This is a placeholder to replace with the old key.
      // Before converting a template, watch out for loops and add
      // it into the CLI call as <rows>:<row>. The new <row> variable will
      // replace all variables with the name <rows> (including the
      // __REMAIN_<rows>__) and afterwards it will look for __REMAIN_<row>__
      // and replace it with <rows>.
      map.set(new RegExp(`__REMAIN_${val}__`, 'g'), key);
    }
  }

  let data = (await readFile(file)).toString()
    .replace(/<!-- IF (.+?) -->/g, '{% if $1 %}')
    .replace(/<!-- ELSE ?IF (.+?) -->/g, '{% elseif $1 %}')
    .replace(/<!-- ELSE -->/g, '{% else %}')
    .replace(/<!-- ENDIF -->/g, '{% endif %}')
    .replace(/<!-- INCLUDE (.+?) -->/g, "{{ include('$1') }}")
    .replace(/<!-- EVENT (.+?) -->/g, '{% EVENT $1 %}')
    // variable replacements
    .replace(/\{+\s*([^{}#%\s]+)\s*\}+/g, '{{ $1 }}')
    // converts the i18n {L_***} variables to the lang(***) call
    .replace(/\{+\s*(L_([^{}#%\s]+))\s*\}+/g, "{{ lang('$2') }}");

  if (allowLoop) {
    // Basically the separation of the BEGIN/BEGINELSE/END loop of
    // the phpBB template engine to a twig way of doing loops. Works
    // for loops that are not nested. Keep that in mind!
    data = data.replace(/<!-- BEGIN (.+?) -->(([\s\n\r\t]|.)+?)(<!-- BEGINELSE -->(([\s\n\r\t]|.)+?))?<!-- END .+? -->/g, (_, list, content, _2, _3, suffixContent) => {
      return suffixContent ?
        `{% if __REMAIN_${list}__|length > 0 %}{% for ${list} in __REMAIN_${list}__ %}${content}{% endfor %}{% else %}${suffixContent}{% endif %}` :
        `{% for ${list} in __REMAIN_${list}__ %}${content}{% endfor %}`
    });
  }

  for (const [pattern, replacement] of map.entries()) {
    data = data.replace(pattern, replacement);
    console.log(pattern, '->', replacement);
  }

  await writeFile(file, data);

})().catch(console.error);
