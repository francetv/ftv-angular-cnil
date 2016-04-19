angular.module('ftv.components.cnil', [
    'ftv.components.cnil.templates'
])

    .controller('CnilController', ['$scope', function ($scope) {
        var cookie = 'cookie-cnil=1';
        var html = angular.element('html');

        if (document.cookie.indexOf(cookie) === -1) {
            html.addClass('withCnil');
            $scope.show = true;
        }

        $scope.close = function() {
            html.removeClass('withCnil');
            $scope.show = false;

            var nextYearTime = (new Date(Date.now() + 365*24*60*60*1000)).toGMTString();
            var domainParts = location.host.split('.');
            domainParts.shift();
            var domain = '.' + domainParts.join('.');

            document.cookie = cookie + ';expires=' + nextYearTime + ';domain=' + domain + ';path=/;';
        };
    }])

    .directive('ftvCnil', [function () {
        return {
            restrict: 'E',
            replace: false,
            controller: 'CnilController',
            templateUrl: 'ftv.components.cnil.html',
            scope: {
                link: '@'
            }
        };
    }])

;

angular.module("ftv.components.cnil.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("ftv.components.cnil.html","<div class=\"ftvCnil\" ng-if=\"show\"><span>En poursuivant votre navigation sur ce site, vous acceptez l\'utilisation de cookies à des fins statistiques, publicitaires et de personnalisation.</span> <a href=\"{{link}}\" target=\"_blank\" class=\"ftvCnil__link ftvCnil__link__desktop\">Pour en savoir plus et paramétrer les cookies</a> <a href=\"{{link}}\" target=\"_blank\" class=\"ftvCnil__link ftvCnil__link__mobile\">En savoir plus</a><div class=\"ftvCnil__close\" ng-click=\"close()\"><span class=\"ftvCnil__close__text\">X</span></div></div>");}]);