(function () {
    angular.module('WebApp').directive('waFooter', () => {
        return {
            templateUrl: './directives/wa-footer/template.html',
            restrict: 'E',
            scope: {}
        };
    });
}());
