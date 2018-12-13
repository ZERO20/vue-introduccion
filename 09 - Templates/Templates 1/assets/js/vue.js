Vue.component('mi-componente', {
	template: '#mi-plantilla',
	data: function () {
		return {
			nuevoDato: 'Hola soy un dato'
		}
	}
});
	
new Vue({
	el: 'main'
});
