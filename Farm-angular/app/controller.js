var path_views = './app/views';

var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
        .state('home', {
                url: '/',
                templateUrl: path_views+'/listar_items.html',
                controller: 'MainController'
        })
        .state('crearitems', {
        	url: '/crearitems',
        	templateUrl: path_views+'/crear_item.html',
        	controller: 'MainController'
        })
        
	
});