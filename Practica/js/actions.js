//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});


var fn={

init: function(){

  document.addEventListener('deviceready',fn.ready,false); //comprobar que se cargen todas las librerias siempre en todos los proyetos

},

ready: function(){
    
//funciones de archivos
    $('#aEscribir').tap(fn.escribir);//selector para escribir
    $('#aLeer').tap(fn.leer); //selectr para leer

},


escribir:function(){

    archivos.textoEscritura=$('#aSend').val();
    archivos.tipo='escritura';
    archivos.accesoSistema();


},
    
    leer:function(){
   
    archivos.tipo='lectura';
    archivos.accesoSistema();
    
    }



};



$(fn.init);