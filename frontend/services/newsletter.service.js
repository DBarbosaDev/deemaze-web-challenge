(function () {
    angular.module('WebApp').service('NewsletterService', NewsletterService);

    function NewsletterService(HttpService) {
        this.subscribe = (body) => {
            return HttpService.post('/newsletter/subscribe', body);
        };
    }
}());
