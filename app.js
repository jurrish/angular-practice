'use strict';

angular.module('demoApp', [])
//has more than one argument so it's a setter
.component('yodaSpeak', {
  template: `<div>
  <input ng-model=$ctrl.text">
  <button ng-click="$ctrl.getYodaText()">get yoda text!</button>
    <p> booya this is a yoda-speak component </p>
    <p> Yoda would say: {{$ctrl.yodaText}} </p>
  </div>
  `,
  controller: ['$log', '$http', function($log){
    //$onInit is a life cycle hook
    this.$onInit = function(){
      $log.log('init yodaSpeak controller')
      this.getYodaText = function(){
        $http({
          url: 'https://yoda.p.mashape.com/yoda',
          headers: {
            'X-Mashape-Key': 'lbqhiHnPcnmshcxMzZ40CdMOAAzDp1VNRKtjsnHZ4Xx3cyTQix',
            Accept: 'text/plain',
          },
          params: {
            sentence: this.text,
          },
        })
        .then(res => {
          this.yodaText = res.data;
        })
        .catch($log.error);
      };
    };
  }],
});

//template is the markup for the component
//controller is the JS for the component, and controls the state like a constructor function
console.log('hello world');
