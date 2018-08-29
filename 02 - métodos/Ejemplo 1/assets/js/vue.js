var vm = new Vue({
	el: 'main',
	data: {
		mensaje: 'Pulsa para obtener la segunda parte del mensaje!'
	},
	methods: {
		nuevoMensaje: function(){
			this.mensaje = 'Perfecto! ya ves que es muy fácil!'
		}
	}
})

//Sobre la propiedad methods se agregan los métodos separados por coma
//La palabra <this> hace referencia a la instancia de vue, es igual a usar la variable <vm>