//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});


/*
$(function(){
	$('#aEscribir').tap(function(){
		if($('#aSend').val()!=''){
			Escribir();
		}
	});
	
    
	$('#aLeer').tap(function(){
		Leer();
	});
});

// Wait for device API libraries to load
//
function Escribir(){
	document.addEventListener("deviceready", EscribirListo, false);
}

// device APIs are available
//
function EscribirListo() {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, accesoFS, fail1);
}

function accesoFS(fileSystem) {
	fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, accesoFile, fail1);
}

function accesoFile(fileEntry) {
	fileEntry.createWriter(gotFileWriter, fail1);
}

function gotFileWriter(writer) {
	writer.onwriteend = function(evt) {
		navigator.notification.alert('Archivo Escrito',null,'Escribir','Aceptar');
	};
	writer.write($('#aSend').val());
}

function fail1(error) {
	alert(error.code);
}

function Leer(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function gotFS(fileSystem) {
	fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
	fileEntry.file(readAsText, fail);
}

function readAsText(file) {
	var reader = new FileReader();
	reader.onloadend = function(evt){
		$('#aGet').text(evt.target.result);
	};
	alert(reader.readAsText(file));
}

function fail(evt) {
	console.log(evt.target.error.code);
}
*/

var archivos={  //crear un objeto
    
    
    textoEscritura:'',
    
    tipo:'escritura',
    
    accesoSistema:function(){
//acceso al sistema de arcivos
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, archivos.rutaArchivo, archivos.error);
                        },
    rutaArchivo:function(fs){
    //seleccionar ruta donde queremos que se encuentre el archivo
    fs.root.getFile("readme.txt", {create: true, exclusive: false}, archivos.accesoArchivo, archivos.error);
    },
    
    
    accesoArchivo:function(fe){
        if(archivos.tipo=='escritura'){      
        fe.createWriter(archivos.ecribirArchivo, archivos.error);
        }
        else{
        
        fe.file(archivos.leerArchivo, archivos.error);
        }
        
    },
    
    ecribirArchivo:function(w){
    //acceso al archivo para escribir arhivo
        w.write(archivos.textoEscritura);
        w.onwriteend=function(evt){
        alert('Se ha escrito correctamente');
        }
    
    },
     leerArchivo:function(file){
    //acceso al archivo para leer archivo
        var reader= new FileReader();
      
         reader.onloadend=function(evt){
         
         $('#aGet').text(evt.target.result);
         }
    
            reader.readAsText(file);
    },
    
    error:function(){
    alert(err.code);
    }
    
};