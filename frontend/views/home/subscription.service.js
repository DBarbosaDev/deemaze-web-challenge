(function () {
    angular.module('WebApp').service('SubscriptionService', SubscriptionService);

    function SubscriptionService(HttpService) {
        this.subscribe = (body) => {
            return HttpService.post('/newsletter/subscribe', body);
        };
    }
}());
