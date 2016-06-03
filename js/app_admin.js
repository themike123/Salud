/* Controlador para secretario */
var app = angular.module('admin', [])

app.controller('glosarioController', function($scope, $http){

  $scope.tmb = JSON.parse(localStorage.getItem("tmb"));

  //TMB Mujer = 655 + (9,6 * P) + (1,8 * A) – (4,7 * E)
  //TMB Hombre = 66 + (13,7 * P) + (5 * A) – (6,8 * E)

  //Una vez obtenida la TMB, se multiplica el Factor de Actividad:

  //Sedentario: CCD = TMB * 1,2 (trabajo de escritorio – sin ejercicio)
  //Actividad Ligera: CCD = TMB * 1,375 (ejercicio 1-3 días por semana)
  //Actividad Moderada: CCD = TMB * 1,55 (ejercicio 3-5 días por semana)
  //Actividad Intensa: CCD = TMB * 1,725 (ejercicio 6-7 días por semana)
  //Actividad Muy Intensa: CCD = TMB * 1,9 (ejercicio 2 veces al día, ejercicios de mucha fuerza y agotamiento, deportistas profesionales)
  //Ecuaciones de Harris Benedict – Ejemplo práctico

  $scope.calTasaBasal = function(){
    var TMB =0;
    var CalNecesarias=0;

    if ($("#genero").val()==1) {
      TMB = 66 + (13.7 *$scope.peso ) + (5 *$scope.estatura) - (6.8 *$scope.edad);
    }else {
      TMB=655 + (9.6 * $scope.peso) + (1.8 *$scope.estatura) - (4.7 *$scope.edad);
    }
    //Metabolismo basal
    CalNecesarias = TMB * $("#actividad").val();
    TMB = TMB.toFixed(2);
    TMB = Math.round(TMB);
    //Calorias necesarias para matener peso
    CalNecesarias = CalNecesarias.toFixed(2);
    CalNecesarias = Math.round(CalNecesarias);
    //calculo de su indice de masa corporal
    var icm=($scope.peso/($scope.estatura*$scope.estatura) ) * 10000;
    icm = icm.toFixed(1);
    if(typeof(Storage) !== "undefined"){
      if (localStorage.getItem("tmb")!=null) {
        localStorage.removeItem("tmb");
        localStorage.clear();
      }
        localStorage.setItem("tmb", JSON.stringify({'imc': icm,'basal':TMB ,'cal':CalNecesarias}));
      }else{
        console.log("No se pudo guardar la información en memoria");
      }

      //$scope.icm = ($scope.peso/($scope.estatura*$scope.estatura) ) * 1000;
    window.location.href = 'resultadoTMB.html';
  };
});
