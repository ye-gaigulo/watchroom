class ProductsService {
    constructor($http, $q, JSONP_BASE_URI) {
        'ngInject';
        this.$http = $http;
        this.$q = $q;
        this.BASE_URI = JSONP_BASE_URI;
    }

    get() {
        var deferred = this.$q.defer();
        var url = this.BASE_URI + '/posts';

        this.$http({
            method: 'GET',
            url: url,
        })
            .then((response) => {
                deferred.resolve(response);
            }, () => {
                deferred.reject(response);
            });

        return deferred.promise;

    }

    getProduct(id) {
        var deferred = this.$q.defer();
        var url = this.BASE_URI + '/posts/' + id;

        this.$http({
            method: 'GET',
            url: url,
        })
            .then((response) => {
                console.log(response.data);
            }, () => {
                console.log(response.data);
            });
    }

}

export default ProductsService;
