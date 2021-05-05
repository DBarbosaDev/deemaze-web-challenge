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
            });
    }
}());
