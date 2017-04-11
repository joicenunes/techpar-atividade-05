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
// usando a sintaxe com array, os nomes de todos os objetos injetados devem ser listados
mainApp.controller("listCtrl", ['$scope', 'pessoasService', function($scope, pessoasService) {
	    
    $scope.carregarContatos = function () {
        pessoasService.listPessoas().then(function (ret) {
            if(ret.status != 200)
                throw ret;
            $scope.pessoas = ret.data;
        });
    };
    $scope.carregarContatos();
}]);

// pode ainda usar sem a sintaxe de array
mainApp.controller("saveCtrl", function($scope, pessoasService, $location) {
    $scope.salvarPessoa = function(pessoa) {
        pessoasService.savePessoas(pessoa).then((data) => {
            alert("Salvo com sucesso!");
            // listCtrl.carregarContatos();
            // delete $scope.pessoa;
           $location.path("/listar")
        })
    };
});
