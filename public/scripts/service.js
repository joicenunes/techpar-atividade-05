angular.module("techpar").service("pessoasService", ($http) => {
    
    this.listPessoas = () => $http.get("listar");
    
    this.savePessoas = (pessoa) => $http.post("listar", pessoa);
});
