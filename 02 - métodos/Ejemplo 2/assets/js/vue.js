var vm = new Vue({
	el: 'main',
	data: {
		numero: 0
	},
	methods: {
		/**
		 *Método para cambiar el valor de la propiedad número.
		 */
		sumar: function(){
			this.numero = this.numero += 1;
			$('button').css({'background-color': '#28D34A', 'color': '#eee'});
		}
	}
})

//Sobre la propiedad methods se agregan los métodos separados por coma
//La palabra <this> hace referencia a la instancia de vue, es igual a usar la variable <vm>