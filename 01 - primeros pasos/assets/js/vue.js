var vm = new Vue({
	el: '#selector',
	data: {
		mensaje: 'Esto es un string',
		numero: 2,
		booleano: true,
		unArray: [],
		unObjeto: {
			nombre: 'Edgar',
			apellidos: 'de la Cruz Vasconcelos'
		}
	}
})
//En la propiedad data se puede almacenar todo tipo de datos
//La propiedad <el> no permite seleccionar el elmento <html> y el <body>
//Vue es totalmente reactivo, si se escribe en la consola del navegador vm.numero = 10 se puede obervar el cambio