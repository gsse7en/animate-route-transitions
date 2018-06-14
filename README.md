# Summary
This plugin allows you to move through your SPA adding intro and outro animations between page transitions, with the support of 'back' and 'forward' history buttons.

[Example](https://gsse7en.github.io/animate-route-transitions/example)
# Pre-conditions
First of all you should import RouteAnimation class to your application. To do that you have to be able to import ES6 modules. The easiest way to do so is by importing traceur with system.js to pages where you want to use the plugin like so:
```
<script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.31/system.js"></script>
```
Then import your main script file like so
```
<script>
    System.import('script.js');
</script>
```
# How to use
Import RouteAnimation plugin to your main script file
```
import RouteAnimation from './route-with-animations.js'
```
Create intro and outro animation functions
```
const introAnimation = () => {
  console.log('intro animation');
}
const outroAnimation = () => {
  console.log('outro animation');
}
```
Fill options object (optional)
```
const options = {
  linkClass: '.ajax-transition', 
  dataContainerId: '#ajax-container', 
  introAnimationTime: 1000, 
  introAnimationFn: introAnimation, 
  outroAnimationFn: outroAnimation, 
  shouldAnimateOnStart: true
}
```
 where 
* linkClass is a router link class selector. Default is '.ajax-transition';
* dataContainerId: dynamic data container id selector. Default is '#ajax-container';
* introAnimationTime: time lapse of the intro animation. Default is 1 second;
* intro animation function name. There is no animation by default;
* outro animation function name. There is no animation by default; 
* shouldAnimateOnStart: should the outro animation be loaded on first application load. It will not be triggered by default.

Finally, create instance of RouteAnimation on page load, supplying it with options object (you can skip part of options properties or supply RouteAnimation instance with no options object at all, that way the default options will be used).
```
new RouteAnimation(options);
```
