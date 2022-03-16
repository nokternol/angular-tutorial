'use strict';

angular.
  module('phonecatApp').
  animation('.phone', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };
    //todo: fix element: JQuery typings (angular-animate)
    function animateIn(element: any, className: string, done: Function) {
      if (className !== 'selected') return;

      element.css({
        display: 'block',
        position: 'absolute',
        top: 500,
        left: 0
      }).animate({
        top: 0
      }, done);

      return (wasCanceled: boolean) => {
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element: any, className: string, done: Function) {
      if (className !== 'selected') return;

      element.css({
        position: 'absolute',
        top: 0,
        left: 0
      }).animate({
        top: -500
      }, done);

      return (wasCanceled: boolean) => {
        if (wasCanceled) element.stop();
      };
    }
  });
