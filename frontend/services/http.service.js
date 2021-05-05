(function () {
    angular.module('WebApp').service('HttpService', HttpService);

    const apiUri = '/api';

    function HttpService($http) {
        this.post = (endpoint, body) => {
            const request = {
                method: 'POST',
                url: `${apiUri}${endpoint}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: body
            };

            return $http(request);
        };
        this.get = (endpoint, query) => {
            const request = {
                method: 'GET',
                url: `${apiUri}${endpoint}`,
                params: query
            };

            return $http(request);
        };
    }
}());
