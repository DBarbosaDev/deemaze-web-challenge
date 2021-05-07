(function () {
    angular.module('WebApp').service('RestaurantService', RestaurantService);

    function RestaurantService(HttpService) {
        this.submitDailySpecialty = (body) => {
            return HttpService.post('/restaurant/daily_menu', body);
        };
    }
}());
