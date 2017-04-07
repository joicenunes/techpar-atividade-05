angular.module("techpar").factory("pessoasAPI", ($http) => {
    var _listPessoas = () => {
      return $http.get("/listar");
    };
    var _savePessoas = (pessoa) => {
      return $http.post("/listar", pessoa);
    };
    return {
        listPessoas: _listPessoas,
        savePessoas: _salvarPessoas
    };
});
