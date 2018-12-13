Vue.component('mi-componente', {
	//template: '#mi-plantilla', //Al usar inline-template no es requerido especificar el template
	data: function () {
		return {
			nuevoDato: 'Hola soy un dato'
		}
	}
});
	
new Vue({
	el: 'main'
});
