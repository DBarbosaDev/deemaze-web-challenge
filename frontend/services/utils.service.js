(function () {
    angular.module('WebApp').service('UtilsService', UtilsService);

    function UtilsService($mdToast, $window) {
        this.sendToast = (text) => {
            $mdToast.show({
                template: '<md-toast class="md-toast">' + text + '</md-toast>',
                hideDelay: 2000,
                position: 'bottom right'
            });
        };
    }
}());
