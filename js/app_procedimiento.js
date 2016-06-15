/* Controlador para secretario */
var app = angular.module('admin', [])

app.controller('procedimientoController', function($scope, $http){

  $scope.tmb = JSON.parse(localStorage.getItem("tmb"));
  $scope.dias = JSON.parse(localStorage.getItem("dias"));
  $scope.diaEjercicio = JSON.parse(localStorage.getItem("diaEjercicio"));
  $scope.mi1rm = JSON.parse(localStorage.getItem("mi1rm"));

  $scope.init = function () {
    if ($scope.mi1rm!=null || $scope.mi1rm!=undefined) {
      
    }else {
      $("#camino").append('<br><br><br><a href="inicio.html" class="waves-effect waves-light btn-large">Empezar</a>');
    }
  };

  $scope.Reiniciar = function () {

    navigator.notification.confirm(
      '¿ Está seguro ? Al reiniciar se perderan los datos que proporcionó al principio de la aplicación',
      alertDismised,
      'Alerta',
      ['Aceptar','Cancelar']
    );
  }

  //funcion collback de la alerta
  function alertDismised() {
    console.log("You selected button number " + results.buttonIndex + " and entered " + results.input1);
  }

});
