const mainApp = angular.module("techpar", ['ngRoute']);

mainApp.config(['$routerProvider'],($routerProvider) =>{
    $routerProvider
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

mainApp.controller("listCtrl", function($scope, pessoasAPI) {
	$scope.titulo = "Formulário";
	$scope.pessoas = [];
    
    $scope.carregarContatos = function () {
        pessoasAPI.listPessoas().then(function (ret) {
            if(ret.status != 200)
                throw ret;
            $scope.pessoas = ret.data;
        });
    };
    $scope.carregarContatos();
});

mainApp.controller("saveCtrl", function($scope, pessoasAPI) {
    $scope.salvarPessoa = function(pessoa) {
        pessoasAPI.savePessoas(pessoa).then((data) => {
            alert("Salvo com sucesso!");
            listCtrl.carregarContatos();
            delete $scope.pessoa;
        })
    };
});
