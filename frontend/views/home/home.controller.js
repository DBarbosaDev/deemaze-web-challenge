(function () {
    angular.module('WebApp').controller('HomeController', HomeController);

    function HomeController(SubscriptionService, UtilsService, $location) {
        const self = this;

        self.waitingForResponse = false;
        self.form = {};

        self.onSubscribe = () => {
            self.waitingForResponse = true;

            SubscriptionService.subscribe({ email: self.form.email })
                .then(() => $location.path('/confirmation'))
                .catch((response) => {
                    const error = response.data.error;
                    if (error.code) {
                        UtilsService.sendToast(response.data.error.code);
                        return;
                    }
                    UtilsService.sendToast(response.data.error.codes[0].code);
                })
                .finally(() => {
                    self.waitingForResponse = false;
                });
        };
    }
}());
