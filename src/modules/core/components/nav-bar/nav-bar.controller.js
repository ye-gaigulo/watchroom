class NavBarController {

    constructor(AuthenticationService, $state) {
        this.AuthenticationService = AuthenticationService;
        this.isLoggedIn = this.AuthenticationService.isLoggedIn();
        this.$state = $state;
        this.nav_one = 'Home';
        this.nav_two = 'About';
        this.nav_three = 'Products';
        this.nav_four = 'Contact';
    }

    logout() {
        this.AuthenticationService.logout();
        this.$state.reload();
    }
}

export default NavBarController;
