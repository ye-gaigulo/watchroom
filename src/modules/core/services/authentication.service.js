class AuthenticationService {
    constructor($http, $q, $cookies,
        AUTH_SERVICE_BASE_URI) {
        'ngInject';
        this.$http = $http;
        this.$q = $q;
        this.$cookies = $cookies;
        this.AUTH_SERVICE_BASE_URI = AUTH_SERVICE_BASE_URI;
    }

    login(username, password) {
        var deferred = this.$q.defer();
        var url = this.AUTH_SERVICE_BASE_URI;
        var data = {
            username: username,
            password: password
        };

        this.$http({
            method: "POST",
            url: url,
            data: data
        }).then((response) => {
            if (response.data.token) {
                this.$cookies.put('token', response.data.token);
            }
            deferred.resolve(response);
        }, (response) => {
            deferred.reject(response);
        });
        return deferred.promise;
    }

    logout() {
        this.$cookies.remove('token');
    }

    isLoggedIn() {
        return (angular.isDefined(this.$cookies.get('token'))) ? true:false;
    }

}

export default AuthenticationService;
