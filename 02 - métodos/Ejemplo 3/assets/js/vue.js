var vm = new Vue({
	el: 'main',
	data: {
		nombres: ['Edgar', 'Anuar', 'Frida'],
		count: 0
	},
	methods: {
		/**
		 *Método para mostrar los elementos de un array con el evento click.
		 */
		siguiente: function(){
			this.count += 1;
			if(this.count == 3){
				this.count = 0;
			}
		}
	}
})
