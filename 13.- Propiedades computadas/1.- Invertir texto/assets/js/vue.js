/*Las propiedades computadas se declaran dentro de la propiedad computed:{} de la instancia de Vu como una función*/

var vm = new Vue({
	el: 'main',
	data: {
		mensaje: "Mensaje invertido"
	},
	computed: {
		mensajeInvertido() {
			return this.mensaje.split('').reverse().join('')
		}
	}
});
