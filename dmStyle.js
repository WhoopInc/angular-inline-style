(function () {
'use strict';

angular.module('dm.style', [])
  .directive('style', function($compile) {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        var content = element.html();
        if (content) {
          content = content.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
          var template = $compile('<style ng-bind-template="' + content + '"></style>');
          element.replaceWith(template(scope));
        }
      }
    };
  });

})();
