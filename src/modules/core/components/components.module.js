import WuIndexComponent from './wu-index/wu-index.component';
import NavBarComponent from './nav-bar/nav-bar.component';

export default angular.module('core.components', [])
  .component('wu-index', WuIndexComponent)
  .component('nav-bar', NavBarComponent);
