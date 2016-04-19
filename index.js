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
