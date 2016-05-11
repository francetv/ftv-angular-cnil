/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 France Télévisions
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
