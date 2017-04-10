const mainApp = angular.module("techpar");

mainApp.config(($routeProvider) =>{
    $routeProvider
         .when('/listar',{
             templateUrl: '../pages/listar.html',
             controller: 'listCtrl'
        })
         .when('/salvar',{
             templateUrl: '../pages/salvar.html',
             controller: 'saveCtrl'
        })
         .otherwise({redirectTo: '/listar'});
});

mainApp.controller("listCtrl", ['pessoasService', function($scope,pessoasService) {
	$scope.titulo = "Formulário";
	$scope.newPessoa = {};
    
    $scope.carregarContatos = function () {
        pessoasService.listPessoas().then(function (ret) {
            if(ret.status != 200)
                throw ret;
            $scope.newPessoa = ret.data;
        });
    };
    $scope.carregarContatos();
}]);

mainApp.controller("saveCtrl", ['pessoasService', function($scope, pessoasService, listCtrl) {
    $scope.salvarPessoa = function(pessoa) {
        pessoasService.savePessoas(pessoa).then((data) => {
            alert("Salvo com sucesso!");
            listCtrl.carregarContatos();
            delete $scope.pessoa;
        })
    };
}]);
