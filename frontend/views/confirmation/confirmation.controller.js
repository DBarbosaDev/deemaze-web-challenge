(function () {
    angular.module('WebApp').controller('ConfirmationController', ConfirmationController);

    function ConfirmationController($state, $location) {
        const self = this;
        self.menuDay = $state.params.menu_day;

        self.backToHome = () => {
            $location.path('/home');
        };
    }
}());
