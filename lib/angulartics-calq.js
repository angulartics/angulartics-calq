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
    try {
      calq.action.trackPageView();
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  });

  $analyticsProvider.registerEventTrack(function (action, properties) {
    try {
      calq.action.track(action, properties);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  });

  $analyticsProvider.registerSetSuperProperties(function (properties) {
    try {
      for (var key in properties) {
        calq.action.setGlobalProperty(key, properties[key]);
      }
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  });

  $analyticsProvider.registerSetUsername(function (userId) {
    try {
      calq.user.identify(userId);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  });

  $analyticsProvider.registerSetUserProperties(function (properties) {
    try {
      calq.user.profile(properties);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  });

}]);
})(angular);