/* Controlador para secretario */
var app = angular.module('admin', [])

app.controller('procedimientoController', function($scope, $http){

  $scope.tmb = JSON.parse(localStorage.getItem("tmb"));
  $scope.dias = JSON.parse(localStorage.getItem("dias"));
  $scope.diaEjercicio = JSON.parse(localStorage.getItem("diaEjercicio"));
  $scope.mi1rm = JSON.parse(localStorage.getItem("mi1rm"));
  $scope.semana1 =JSON.parse(localStorage.getItem("Semana1"));
  $scope.progresion1=2.5;
  $scope.progresion2=5;

  //Funcionalidad del boton de atrás del telefono
  document.addEventListener("backbutton",onBackKeyDown,false);
  function onBackKeyDown() {
    navigator.notification.confirm(
      '¿ Salir de la Aplicación?',
      MetodoSalir,
      'Aviso',
      ['Aceptar','Cancelar']
    );
  }

  function MetodoSalir(botton) {
    if (botton==1) {
      navigator.app.exitApp();
    }
  }
  ///

  //navigator.app.exitApp();
  //$scope.f = new Date();

  //f.getDate()
  //f.getMonth()
  //f.getFullYear()

  //var diaSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
  //diaSemana[f.getDay];

  function RedondeoDecenas(num) {
    var temp=0;

    if (num>100) {
      temp=num%100;
    }else {
      temp=num%10;
    }

    //Validación si no necesita redondeo
    if (temp!=0 && temp!=5) {

      if (temp<4) {
        return (num-temp);
      }

      if (temp>6) {
        return (num-temp)+10;
      }

      return (num-temp)+5;
    }

    //Retorno el numero ya que su modulo es cero
    return num;
  }

  $scope.init = function () {
    //alert("Mande el 31:"+RedondeoDecenas(31));
    //if($scope.semana1!=null || $scope.semana1!=undefined){
    //  $('#modal1').openModal();
    //}

    if ($scope.mi1rm!=null || $scope.mi1rm!=undefined) {

      if ($scope.diaEjercicio.dia1=='Pierna') {
        var cabezera = '<h3>Semana 1</h3><table class="centered"><thead><tr><th data-field="id">'+$scope.dias.dia1+'</th><th data-field="name">'+$scope.dias.dia2+'</th><th data-field="name">'+$scope.dias.dia3+'</th><th data-field="name">'+$scope.dias.dia4+'</th></tr></thead><tbody><tr><td>Peso Muerto</td><td>Militar</td><td>Sentadilla</td><td>Press Banca</td></tr><td>3x5  75/80/85</td><td>3x5  75/80/85</td><td>3x5  75/80/85</td><td>3x5  75/80/85</td></tr>';
      }else {
          var cabezera = '<h3>Semana 1</h3><table class="centered"><thead><tr><th data-field="id">'+$scope.dias.dia1+'</th><th data-field="name">'+$scope.dias.dia2+'</th><th data-field="name">'+$scope.dias.dia3+'</th><th data-field="name">'+$scope.dias.dia4+'</th></tr></thead><tbody><tr><td>Militar</td><td>Peso Muerto</td><td>Press Banca</td><td>Sentadilla</td></tr><td>3x5  75/80/85</td><td>3x5  75/80/85</td><td>3x5  75/80/85</td><td>3x5  75/80/85</td></tr>';
      }
      var pie = '</tbody></table><h4>Accesorios</h4>'
      var contenido ='';

      for (var i=0; i <=4; i++) {

        if (i==0) {
          var variante=0.4;
        }else if (i==1) {
          var variante=0.5;
        }else if (i==2) {
          var variante=0.6;
        }else if (i==3) {
          var variante=0.75;
        }else if(i==4){
          var variante=0.8;
        }

        if ($scope.diaEjercicio.dia1=='Pierna') {
          var uno = $scope.mi1rm.dos*variante*0.95;
          uno = uno.toFixed(1);
          uno = Math.round(uno);
          uno = RedondeoDecenas(uno);

          var dos = $scope.mi1rm.uno*variante*0.95;
          dos = dos.toFixed(2);
          dos = Math.round(dos);
          dos = RedondeoDecenas(dos);

          var tres = $scope.mi1rm.cuatro*variante*0.95;
          tres = tres.toFixed(2);
          tres = Math.round(tres);
          tres = RedondeoDecenas(tres);

          var cuatro = $scope.mi1rm.tres*variante*0.95;
          cuatro = cuatro.toFixed(2);
          cuatro = Math.round(cuatro);
          cuatro = RedondeoDecenas(cuatro);

        }else {
          var uno = $scope.mi1rm.uno*variante*0.95;
          uno = uno.toFixed(1);
          uno = Math.round(uno);
          uno = RedondeoDecenas(uno);

          var dos = $scope.mi1rm.dos*variante*0.95;
          dos = dos.toFixed(2);
          dos = Math.round(dos);
          dos = RedondeoDecenas(dos);

          var tres = $scope.mi1rm.tres*variante*0.95;
          tres = tres.toFixed(2);
          tres = Math.round(tres);
          tres = RedondeoDecenas(tres);

          var cuatro = $scope.mi1rm.cuatro*variante*0.95;
          cuatro = cuatro.toFixed(2);
          cuatro = Math.round(cuatro);
          cuatro = RedondeoDecenas(cuatro);

        }

        contenido+='<tr><td>5x'+uno+'</td><td>5x'+dos+'</td><td>5x'+tres+'</td><td>5x'+cuatro+'</td></tr>';
      }


      if ($scope.diaEjercicio.dia1=='Pierna') {

        var uno = $scope.mi1rm.dos*0.85*0.95;
        uno = uno.toFixed(2);
        uno = Math.round(uno);
        uno = RedondeoDecenas(uno);

        var dos = $scope.mi1rm.uno*0.85*0.95;
        dos = dos.toFixed(2);
        dos = Math.round(dos);
        dos = RedondeoDecenas(dos);

        var tres = $scope.mi1rm.cuatro*0.85*0.95;
        tres = tres.toFixed(2);
        tres = Math.round(tres);
        tres = RedondeoDecenas(tres);

        var cuatro = $scope.mi1rm.tres*0.85*0.95;
        cuatro = cuatro.toFixed(2);
        cuatro = Math.round(cuatro);
        cuatro = RedondeoDecenas(cuatro);

      }else {
        var uno = $scope.mi1rm.uno*0.85*0.95;
        uno = uno.toFixed(2);
        uno = Math.round(uno);
        uno = RedondeoDecenas(uno);

        var dos = $scope.mi1rm.dos*0.85*0.95;
        dos = dos.toFixed(2);
        dos = Math.round(dos);
        dos = RedondeoDecenas(dos);

        var tres = $scope.mi1rm.tres*0.85*0.95;
        tres = tres.toFixed(2);
        tres = Math.round(tres);
        tres = RedondeoDecenas(tres);

        var cuatro = $scope.mi1rm.cuatro*0.85*0.95;
        cuatro = cuatro.toFixed(2);
        cuatro = Math.round(cuatro);
        cuatro = RedondeoDecenas(cuatro);

      }

      contenido+='<tr><td>>5x'+uno+'</td><td>>5x'+dos+'</td><td>>5x'+tres+'</td><td>>5x'+cuatro+'</td></tr>';

      if ($scope.diaEjercicio.dia1=='Pierna') {
        var cabezera2 = '<table class="centered"><thead><tr><th data-field="id">'+$scope.dias.dia1+'</th><th data-field="name">'+$scope.dias.dia2+'</th><th data-field="name">'+$scope.dias.dia3+'</th><th data-field="name">'+$scope.dias.dia4+'</th></tr></thead><tbody><tr><td>Sentadilla</td><td>Press Banca</td><td>Peso Muerto</td><td>Militar</td></tr><tr><td>5x10 60%</td><td>5x10 60%</td><td>5x10 60%</td><td>5x10 60%</td></tr>';
      }else {
          var cabezera2 = '<table class="centered"><thead><tr><th data-field="id">'+$scope.dias.dia1+'</th><th data-field="name">'+$scope.dias.dia2+'</th><th data-field="name">'+$scope.dias.dia3+'</th><th data-field="name">'+$scope.dias.dia4+'</th></tr></thead><tbody><tr><td>Press Banca</td><td>Sentadilla</td><td>Militar</td><td>Peso Muerto</td></tr><tr><td>5x10 60%</td><td>5x10 60%</td><td>5x10 60%</td><td>5x10 60%</td></tr>';
      }

      var pie2 = '</tbody></table>'
      var contenido2 ='';

      //For de Accesorios
      variante = 0.6;
      for (var i=0; i <5; i++) {

        if ($scope.diaEjercicio.dia1=='Pierna') {
          var uno = $scope.mi1rm.dos*variante*0.95;
          uno = uno.toFixed(2);
          uno = Math.round(uno);
          uno = RedondeoDecenas(uno);

          var dos = $scope.mi1rm.uno*variante*0.95;
          dos = dos.toFixed(2);
          dos = Math.round(dos);
          dos = RedondeoDecenas(dos);

          var tres = $scope.mi1rm.cuatro*variante*0.95;
          tres = tres.toFixed(2);
          tres = Math.round(tres);
          tres = RedondeoDecenas(tres);

          var cuatro = $scope.mi1rm.tres*variante*0.95;
          cuatro = cuatro.toFixed(2);
          cuatro = Math.round(cuatro);
          cuatro = RedondeoDecenas(cuatro);
        }else {
          var uno = $scope.mi1rm.uno*variante*0.95;
          uno = uno.toFixed(2);
          uno = Math.round(uno);
          uno = RedondeoDecenas(uno);

          var dos = $scope.mi1rm.dos*variante*0.95;
          dos = dos.toFixed(2);
          dos = Math.round(dos);
          dos = RedondeoDecenas(dos);

          var tres = $scope.mi1rm.tres*variante*0.95;
          tres = tres.toFixed(2);
          tres = Math.round(tres);
          tres = RedondeoDecenas(tres);

          var cuatro = $scope.mi1rm.cuatro*variante*0.95;
          cuatro = cuatro.toFixed(2);
          cuatro = Math.round(cuatro);
          cuatro = RedondeoDecenas(cuatro);
        }

        contenido2+='<tr><td>10x'+uno+'</td><td>10x'+dos+'</td><td>10x'+tres+'</td><td>10x'+cuatro+'</td></tr>';
      }
      pie2+='<br><br><br><div class="divider"></div><table class="bordered"><tbody><tr><td><strong>DIPS- <font color="red">Progresión</font></strong></td><td><strong>Dominadas- <font color="red">Prog</font></strong></td><td><strong>DIPS- <font color="red">Progresión</font></strong></td><td><strong>Dominadas- <font color="red">Prog</font></strong></td></tr><tr><td><strong>Lat. Raises 3x10</strong></td><td><strong>Prensa 3x15</strong></td><td><strong>Press c/min 3x10</strong></td><td><strong>Ext. Cuadrice ps 3x15</strong></td></tr><tr><td><strong>P. Frances 3x10</strong></td><td><strong>Curl Femoral 3x15</strong></td><td><strong>Triceps polea 3x10</strong></td><td><strong>Curl Femoral 3x15</strong></td></tr><tr><td><strong>Curl Bece ps Ez 3x10</strong></td><td><strong>Core</strong></td><td><strong>Curl martillo 3x10</strong></td><td><strong>Core</strong></td></tr></tbody></table>'
      $("#camino").append(cabezera+contenido+pie+cabezera2+contenido2+pie2);
    }else {
      //Aqui lo de la pagina inicial
      document.getElementById('camino').innerHTML='';
      $("#camino").append('<br><img class="circle responsive-img" src="img/Entre1.png" width="100%" height="100%"><br><br><br><p>GymCoach es una app que te guiara el el GYM, ofreciendo mejoras en muy poco tiempo.</p><a href="inicio.html" class="waves-effect waves-light btn-large">Iniciar</a>');
    }

    //fechas();
  };

  $scope.Reiniciar = function () {

    navigator.notification.confirm(
      '¿ Está seguro ? Al reiniciar se perderan los datos que proporcionó al principio de la aplicación',
      alertDismised,
      'Alerta',
      ['Aceptar','Cancelar']
    );
  }

  $scope.Cerrar = function() {
    navigator.app.exitApp();
  }

  $scope.Progresion= function () {
    if(typeof(Storage) !== "undefined"){
      if (localStorage.getItem("mi1rm")!=null) {
        localStorage.removeItem("mi1rm");
      }
        localStorage.setItem("mi1rm", JSON.stringify(
          {'uno':$scope.mi1rm.uno+$scope.progresion1,'dos':$scope.mi1rm.dos+$scope.progresion2 ,'tres':$scope.mi1rm.tres+ $scope.progresion1,'cuatro': $scope.mi1rm.cuatro+$scope.progresion2 }));
      }else{
        console.log("No se pudo guardar la información en memoria");
      }
    $('#modal1').closeModal();

  }

  //funcion collback de la alerta
  function alertDismised(botton) {
    if (botton==1) {
      localStorage.clear();
      window.location.href = 'index.html';
      //location.reload();
      //alert("Preciono Aceptar");
    }
    //console.log("You selected button number " + results.buttonIndex + " and entered " + results.input1);
  }

});
