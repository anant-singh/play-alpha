Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'home'
    });
    this.route('test', {
        path: '/test',
        template: 'test'
    });
});
