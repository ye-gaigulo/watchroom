import angular from 'angular';

import $ from 'jquery';
import _ from 'underscore';


import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngCookies from 'angular-cookies';
import ngSanitize from 'angular-sanitize';
import ngTouch from 'angular-touch';

import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import rx from 'rx-angular';
import toastr from 'toastr';
import 'toastr/dist/angular-toastr.min.css!';


import bootstrap from 'bootstrap/js/bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'font-awesome';

import CoreModule from './modules/core/core.module';
console.log(CoreModule);

angular.module('app', [
    CoreModule.name,
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'rx',
    'toastr'
])
    .run(($rootScope, $state) => {
        $state.go('index');
    })
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('index', {
            url: '/',
            template: '<wu-index></wu-index>'
        })
        .state('about', {
            url: '/about',
            template: '<wu-about></wu-about>'
        })
        .state('products', {
            url: '/products',
            template: '<wu-products></wu-products>'
        });
    });

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});
