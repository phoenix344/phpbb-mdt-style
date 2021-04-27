# Material Design Theme for phpBB 3.3

**IN DEVELOPMENT** WIP

It's a mobile optimized style for phpBB. Completely untested in any browser, but Chrome and Firefox. I want to refuse to support IE11, but I have to admit: It's an easy task to convert the ES6 into ES2015 and it's easy to use autoprefixer and optimize CSS for IE11. The only thing that will not work are CSS variables. Let's bring this thing to life!

## Todo

- [x] Startpage view
- [x] Drawer with notifications
- [x] Login box (dialog)
- [x] Appbar
- [x] Posts Layout
- [x] Attachments in Posts
- [x] Dark/Light Mode Switch (proof of concept)
- [x] CSS variables (proof of concept)
- [x] Breadcrumb
- [x] Jumpbox
- [ ] Actionbars for posts, topics and other things I forgot
- [ ] Write/edit posts
- [ ] User Control Panel
- [ ] Login/Registration/Lost Password Form (not in a dialog)
- [ ] Various things I just forgot to mention
- [ ] This
- [ ] List
- [ ] Will
- [ ] Grow
- [ ] I
- [ ] Swear!

## Dependencies

- (Development) Gulp + SCSS + Livereload
- Twig Template Engine (no old-school phpbb template engine), I hope I can easily migrate to phpbb 4
- [MDL](https://getmdl.io) (Material Design Lite) - unfortunately outdated for [MDC](https://github.com/material-components/material-components-web/blob/master/docs/migrating-from-mdl.md)
- IconMoon Icons (free) - for social media icons and some other special use-cases
- Material Icons - for default app functionality
- [baguettebox.js](https://feimosi.github.io/baguetteBox.js/) - nice little Lightbox (out-of-the-box optimized for mobile) without the need of jQuery

