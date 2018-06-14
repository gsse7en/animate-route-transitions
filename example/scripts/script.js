import RouteAnimation from './route-with-animations.js'
const introAnimation = () => {
  console.log('intro animation');
}
const outroAnimation = () => {
  console.log('outro animation');
}
const options = {
  linkClass: '.ajax-transition', 
  dataContainerId: '#ajax-container', 
  introAnimationTime: 1000, 
  introAnimationFn: introAnimation, 
  outroAnimationFn: outroAnimation, 
  shouldAnimateOnStart: true
}
$(function() {
    new RouteAnimation(options);
});
