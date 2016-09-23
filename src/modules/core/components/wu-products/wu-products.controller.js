class WuProductsController {

    constructor(ProductsService, toastr) {
        // console.log('Flying through: WuProductsController constructor');
        this.ProductsService = ProductsService;
        this.toastr = toastr;
    }

    $onInit() {
        this.get();
    }

    get() {
        this.ProductsService.get()
            .then((result) => {
                // populate the fields
                this.products = result.data;
                // console.log(result.data);
            }, () => {
                // error has occured
                console.log('Failure');
            });
    }

    getProduct() {
        (angular.isDefined(this.productId)) ? this.ProductsService.getProduct(this.productId): this.toastr.error('Please enter a project ID !!');
    }
}

export default WuProductsController;
