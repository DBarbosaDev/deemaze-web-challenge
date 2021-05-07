(function () {
    angular.module('WebApp').controller('SpecialtiesController', SpecialtiesController);

    function SpecialtiesController(RestaurantService, UtilsService, $location) {
        const self = this;
        self.waitingForResponse = false;
        self.form = {};
        self.specialtiesList = [
            {
                value: ''
            }
        ];

        self.addSpecialty = () => {
            self.specialtiesList.push({
                value: ''
            });
        };

        self.cancel = () => {
            $location.path('/home');
        };

        self.onFormSubmit = () => {
            const { name, day } = self.form;
            const dataBody = {
                name,
                day: moment(new Date(day)).format('YYYY-MM-DD'),
                specialities: JSON.stringify(self.specialtiesList.map((specialty) => specialty.value))
            };

            RestaurantService.submitDailySpecialty(dataBody)
                .then(() => $location.path(`/confirmation/${dataBody.day}`))
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
})();
