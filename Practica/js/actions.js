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
    $('#aEscribir').tap(fn.ecribir);//selector para escribir
    $('#aLeer').tap(fn.init); //selectr para leer

}


ecribir:function(){

    archivos.textoEscritura=$('#aSend').val();
    archivos.textoEscritura='escritura';
    archivos.accesoSistema();


}




};



$(fn.init);