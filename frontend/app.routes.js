(function () {
    angular.module('WebApp').config(AppRouter);

    function AppRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './views/home/home.template.html',
                controller: 'HomeController',
                controllerAs: 'HomeCtrl'
            })
            .state('confirmation', {
                url: '/confirmation/:menu_day',
                templateUrl: './views/confirmation/confirmation.template.html',
                controller: 'ConfirmationController',
                controllerAs: 'ConfirmationCtrl'
            })
            .state('restaurant', {
                url: '/restaurant'
            })
            .state('restaurant.specialties', {
                url: '/specialties',
                templateUrl: './views/specialties/specialties.template.html',
                controller: 'SpecialtiesController',
                controllerAs: 'SpecialtiesCtrl'
            });
    }
}());
