class LoginController {
    constructor(AuthenticationService, $state, toastr) {
        this.AuthenticationService = AuthenticationService;
        this.$state = $state;
        this.toastr = toastr;
    }

    login() {
        this.AuthenticationService.login(this.username, this.password).then((result) => {
            this.$state.go('index');
            this.toastr.success('Login Successful');
        }, () => {
            this.toastr.error('Login Failed');
        });
    }

}

export default LoginController;
