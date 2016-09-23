import AuthenticationService from './authentication.service';
import ProductsService from './products.services';

export default angular.module('core.services', [])
  .service('AuthenticationService', AuthenticationService)
  .service('ProductsService', ProductsService);
