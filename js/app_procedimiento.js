/* Controlador para secretario */
var app = angular.module('admin', [])

app.controller('procedimientoController', function($scope, $http){

  $scope.tmb = JSON.parse(localStorage.getItem("tmb"));
  $scope.dias = JSON.parse(localStorage.getItem("dias"));
  $scope.diaEjercicio = JSON.parse(localStorage.getItem("diaEjercicio"));
  $scope.mi1rm = JSON.parse(localStorage.getItem("mi1rm"));



  $scope.init = function () {
    if ($scope.mi1rm!=null || $scope.mi1rm!=undefined) {

      var cabezera = '<h3>Semana 1</h3><table class="centered"><thead><tr><th data-field="id">Lunes</th><th data-field="name">Martes</th><th data-field="name">Miercoles</th><th data-field="name">Jueves</th></tr></thead><tbody><tr><td>Militar</td><td>Peso Muerto</td><td>Press Banca</td><td>Sentadilla</td></tr><td>3x5  75/80/85</td><td>3x5  75/80/85</td><td>3x5  75/80/85</td><td>3x5  75/80/85</td></tr>';
      var pie = '</tbody></table><h4>Accesorios</h4>'
      var contenido ='';

      for (var i=0; i <4; i++) {

        if (i==1) {
          var variante=0.4;
        }else if (i==2) {
          var variante=0.5;
        }else if (i==3) {
          var variante=0.6;
        }else if (true) {
          var variante=0.75;
        }else {
          var variante=0.8;
        }

        var uno = $scope.mi1rm.uno*variante*0.95;
        uno = uno.toFixed(2);
        uno = Math.round(uno);
        var dos = $scope.mi1rm.dos*variante*0.95;
        dos = dos.toFixed(2);
        dos = Math.round(dos);
        var tres = $scope.mi1rm.tres*variante*0.95;
        tres = tres.toFixed(2);
        tres = Math.round(tres);
        var cuatro = $scope.mi1rm.cuatro*variante*0.95;
        cuatro = cuatro.toFixed(2);
        cuatro = Math.round(cuatro);

        contenido+='<tr><td>5x'+uno+'</td><td>5x'+dos+'</td><td>5x'+tres+'</td><td>5x'+cuatro+'</td></tr>';
      }


      var uno = $scope.mi1rm.uno*0.85*0.95;
      uno = uno.toFixed(2);
      uno = Math.round(uno);
      var dos = $scope.mi1rm.dos*0.85*0.95;
      dos = dos.toFixed(2);
      dos = Math.round(dos);
      var tres = $scope.mi1rm.tres*0.85*0.95;
      tres = tres.toFixed(2);
      tres = Math.round(tres);
      var cuatro = $scope.mi1rm.cuatro*0.85*0.95;
      cuatro = cuatro.toFixed(2);
      cuatro = Math.round(cuatro);

      contenido+='<tr><td>>5x'+uno+'</td><td>>5x'+dos+'</td><td>>5x'+tres+'</td><td>>5x'+cuatro+'</td></tr>';


      var cabezera2 = '<h3>Semana 1</h3><table class="centered"><thead><tr><th data-field="id">Lunes</th><th data-field="name">Martes</th><th data-field="name">Miercoles</th><th data-field="name">Jueves</th></tr></thead><tbody><tr><td>Militar</td><td>Peso Muerto</td><td>Press Banca</td><td>Sentadilla</td></tr>';
      var pie2 = '</tbody></table>'
      var contenido2 ='';


      $("#camino").append(cabezera+contenido+pie);
    }else {
      document.getElementById('camino').innerHTML='';
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
