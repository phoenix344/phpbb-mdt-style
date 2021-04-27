# Material Design Theme for phpBB 3.3

**I screwed up your design pattern and I don't feel ashamed!**

... maybe a little, because I was naive!

As life goes, I inherited a forum and surprise! It was a phpBB. The look and feel of the forum is old and looks old regardless of the style decision. I wanted to migrate it to discourse, but my server said NOOOOOO. In addition, I catched a cold over Easter and couldn't celebrate with my family/friends. So... let's do this! Let's bring this old thing into a modern age!

## Internet Explorer

![Do we have R34 for phpBB???](https://i.chzbgr.com/original/6543621/h87CBCC23/internet-explorer-memes-and-jokes)

ES6 is supported by almost all modern browser (who cares about opera mini or the supreme chinese baidu browser anyway?). No need to fix this for an old browser like IE as well. People are going online on mobile devices nowadays.

Second reason for not supporting IE: CSS3 variables! They are marvellous! Not their look, but how they actually work. I was playing around with dark/light mode and it's... it's beautiful!

[LOOK AT THIS!!!](https://ryanfeigenbaum.com/dark-mode/)

IE IS THE REASON WHY WE CAN'T HAVE NICE THINGS!

![IE is funny](https://images-cdn.9gag.com/photo/aV3pwW8_700b.jpg)

Nah! I'm still not supporting it, because I have self-respect! No browser-waifu can change my decision!

## Dependency decision

**How about react/angular?** Nah! I don't need 150MB overhead on my development environment to write HTML/CSS and a tiny bit of JS.

**How about TypeScript?** I'm fine with ES6.

**gulp task to rule them all!** Preprocess SCSS to CSS, then do the PostCSS with autoprefixer and bundle it! Afterwards push changes directly on the development forum with livereload. I love fast development environments. Sometimes the gulp train derails and crashes the watcher. So I installed plumber and now it's working even after a complete crash thanks to the tiny railroad workers who put the gulp train always back on track. Nice!

**Material Design Framework:** First library I stumbled upon was [muicss](https://www.muicss.com/). On the first look it was kinda promising. Nothing fancy. Might be exactly what I needed... oh god I was so wrong!!!

In the middle of development I realized my drudgery by the fact it's not supporting half of the features I wanted to use. Quick decided: Screw this! So I looked for a better library and I found [Material Design Lite](https://getmdl.io/), developed by Google.

Then I was sad. My whole work was broken. Damn it!

Anyway! This was actually what I was looking for. Don't cry! You did it to yourself!

Unfortunately google gave it not much love and I made a bunch of overrides, but I still don't need to add whole features. The main framework is solid and I have every layout component I need.

Now I'm happy again. It looks even better than before! **I won't change again! NO! NO! NO!**

## Architecture



* `theme/style.scss` enthält Referenzen auf `muicss`, `material-icons` und den Theme-eigenen Komponenten und Styles
* `<GLOBAL_STYLE>` im `assets/` Verzeichnis wird immer mit einem Underscore _ gestartet.
* `<COMPONENT_NAME>` ist ein beliebiger Name einer Komponente

```
theme/
  style.scss
  assets/
    _<GLOBAL_STYLE>.scss
    <COMPONENT_NAME>/
      <COMPONENT_NAME>.js
      <COMPONENT_NAME>.scss
```

Im HTML wird der Component-Rahmen mit einem führenden _ deklariert, damit sie oben in der Datei-Hierarchie erscheinen und einen Einstieg bieten für andere Entwickler bieten.

```
templace/
  <COMPONENT_NAME>/
    _<COMPONENT_NAME>.html
    <COMPONENT_NAME>_<FEATURE_DESCRIPTION>.html
```
