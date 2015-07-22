/**
 * @license Angulartics v0.17.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Calq support contributed by http://github.com/rothlis
 * License: MIT
 */
(function(angular) {
'use strict';

/**
 * @ngdoc overview
 * @name angulartics.calq
 * Enables analytics support for Calq (https://calq.io)
 */
angular.module('angulartics.calq', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  $analyticsProvider.registerPageTrack(function (path) {
    calq.action.trackPageView();
  });

  $analyticsProvider.registerEventTrack(function (action, properties) {
    calq.action.track(action, properties);
  });

  $analyticsProvider.registerSetSuperProperties(function (properties) {
    for (var key in properties) {
      calq.action.setGlobalProperty(key, properties[key]);
    }
  });

  $analyticsProvider.registerSetUsername(function (userId) {
    calq.user.identify(userId);
  });

  $analyticsProvider.registerSetUserProperties(function (properties) {
    calq.user.profile(properties);
  });

}]);
})(angular);