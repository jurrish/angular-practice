'use strict';

angular.module('demoApp', [])
//has more than one argument so it's a setter
.component('yodaSpeak', {
  template: `<div>
    <p> booya this is a yoda-speak component </p>
  </div>
  `,
});

console.log('hello world');
