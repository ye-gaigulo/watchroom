import WuIndexComponent from './wu-index/wu-index.component';
import NavBarComponent from './nav-bar/nav-bar.component';
import LoginComponent from './login/login.component';
import ContainerFluidComponent from './container-fluid/container-fluid.component';

export default angular.module('core.components', [])
  .component('wuIndex', WuIndexComponent)
  .component('navBar', NavBarComponent)
  .component('login', LoginComponent)
  .component('containerFluid', ContainerFluidComponent);
