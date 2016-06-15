/* Controlador para secretario */
var app = angular.module('admin', [])

app.controller('glosarioController', function($scope, $http){

  $scope.tmb = JSON.parse(localStorage.getItem("tmb"));
  $scope.dias = JSON.parse(localStorage.getItem("dias"));
  $scope.diaEjercicio = JSON.parse(localStorage.getItem("diaEjercicio"));
  $scope.mi1rm = JSON.parse(localStorage.getItem("mi1rm"));

  console.log($scope.tmb);
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

      }
        localStorage.setItem("tmb", JSON.stringify({'imc': icm,'basal':TMB ,'cal':CalNecesarias}));
      }else{
        console.log("No se pudo guardar la información en memoria");
      }

      //$scope.icm = ($scope.peso/($scope.estatura*$scope.estatura) ) * 1000;
    window.location.href = 'resultadoTMB.html';
  };

  $scope.Su1RM = function () {
    var aux=0;

    if ( $("#militar").val().length<1 ) {
      aux=1;
    }

    if ( $("#muerto").val().length<1 ) {
      aux=1;
    }

    if ( $("#press").val().length<1 ) {
      aux=1;
    }

    if ( $("#sentadilla").val().length<1 ) {
      aux=1;
    }

    if (aux==1) {
      navigator.notification.vibrate(100);
      //navigator.notification.alert('Debes seleccionar 4 dias')
      navigator.notification.alert(
        'Ingrese su 1RM en todos los campos.',
        alertDismised,
        'Alerta',
        'cerrar'
      );
    }else {
      if(typeof(Storage) !== "undefined"){
        if (localStorage.getItem("mi1rm")!=null) {
          localStorage.removeItem("mi1rm");

        }
          localStorage.setItem("mi1rm", JSON.stringify(
            {'uno':$("#militar").val() ,'dos':$("#muerto").val() ,'tres':$("#press").val() ,'cuatro': $("#sentadilla").val()}));
        }else{
          console.log("No se pudo guardar la información en memoria");
        }
        window.location.href = 'index.html';
    }

  }

  $scope.PiernaTorso = function(){
    var aux=0;

    if ($("#diaEjercicio1").val() != 'Pierna' && $("#diaEjercicio1").val() != 'Torso' ) {
      aux=1;
    }

    if ($("#diaEjercicio2").val() != 'Pierna' && $("#diaEjercicio2").val() != 'Torso' ) {
      aux=1;
    }

    if ($("#diaEjercicio3").val() != 'Pierna' && $("#diaEjercicio3").val() != 'Torso' ) {
      aux=1;
    }

    if ($("#diaEjercicio4").val() != 'Pierna' && $("#diaEjercicio4").val() != 'Torso' ) {
      aux=1;
    }

    if (aux==0) {
      if(typeof(Storage) !== "undefined"){
        if (localStorage.getItem("diaEjercicio")!=null) {
          localStorage.removeItem("diaEjercicio");
        }
          localStorage.setItem("diaEjercicio", JSON.stringify({'dia1':$("#diaEjercicio1").val(),'dia2':$("#diaEjercicio2").val() ,'dia3':$("#diaEjercicio3").val(),'dia4' : $("#diaEjercicio4").val()}));
        }else{
          console.log("No se pudo guardar la información en memoria");
        }
        window.location.href = 'cuarta_vista.html';
    }else {
      navigator.notification.vibrate(100);
      //navigator.notification.alert('Debes seleccionar 4 dias')
      navigator.notification.alert(
        'Seleccione su ejercicio en todos los dias',
        alertDismised,
        'Alerta',
        'cerrar'
      );
    }

  }

  $scope.DiasEjercicio = function(){
    var NumeroDiasMarcados=0;
    var diasSelccionados = [];

    if ( $('#lunes').prop('checked')  ) {
      NumeroDiasMarcados++;
      diasSelccionados.push('Lunes');
    }

    if ( $('#martes').prop('checked') ) {
      NumeroDiasMarcados++;
      diasSelccionados.push('Martes');
    }

    if ( $('#miercoles').prop('checked') ) {
      NumeroDiasMarcados++;
      diasSelccionados.push('Miércoles');
    }

    if ( $('#jueves').prop('checked') ) {
      NumeroDiasMarcados++;
      diasSelccionados.push('Jueves');
    }

    if ( $('#viernes').prop('checked') ) {
      NumeroDiasMarcados++;
      diasSelccionados.push('Viernes');
    }

    if ( $('#sabado').prop('checked') ) {
      NumeroDiasMarcados++;
      diasSelccionados.push('Sábado');
    }

    if ( $('#domingo').prop('checked') ) {
      NumeroDiasMarcados++;
      diasSelccionados.push('Domingo');
    }

    if (NumeroDiasMarcados<4) {
      diasSelccionados=[];
      navigator.notification.vibrate(100);
      //navigator.notification.alert('Debes seleccionar 4 dias')
      navigator.notification.alert(
        'Debes seleccionar 4 dias',
        alertDismised,
        'Alerta',
        'cerrar'
      );
    }else if (NumeroDiasMarcados>4) {
      diasSelccionados=[];
      navigator.notification.vibrate(100);
      //navigator.notification.alert('Solo deben ser 4 dias')
      navigator.notification.alert(
        'Solo deben ser 4 dias',
        alertDismised,
        'Alerta',
        'cerrar'
      );
    }
    if (NumeroDiasMarcados==4) {
      //alert("Sus dias seleccionados fueron: "+diasSelccionados[0]+" ,"+diasSelccionados[1]+" ,"+diasSelccionados[2]+" ,"+diasSelccionados[3]);
      if(typeof(Storage) !== "undefined"){
        if (localStorage.getItem("dias")!=null) {
          localStorage.removeItem("dias");

        }
          localStorage.setItem("dias", JSON.stringify({'dia1': diasSelccionados[0],'dia2':diasSelccionados[1] ,'dia3':diasSelccionados[2],'dia4':diasSelccionados[3]  }));
        }else{
          console.log("No se pudo guardar la información en memoria");
        }
        window.location.href = 'tercera_vista.html';

    }
  };

  //funcion collback de la alerta
  function alertDismised() {

  }


});
