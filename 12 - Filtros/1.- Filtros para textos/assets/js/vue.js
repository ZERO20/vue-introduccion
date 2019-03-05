/*Existen dos formas de crear filtros, ya sea de forma local dentro de la instancia Vue(vm) o de forma global
Para crearlo de forma local se agrega una propiedad llamada filters  dentro de la instancia de Vue y se agregan los filtros indicando el nombre seguido de :
y una funcion

Para agregarlos de forma global se registran haciendo uso de Vue.filter(), indicando el nombre dentro del método como string seguido de una función
*/

Vue.filter('capitalizar', function (value) {//Globales
	if(!value) return '';
	value = value.toString();
	return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('cortar', function (value) {
	if(!value) return '';
	value = value.toString();
	return value.substring(0, 10);
});

var vm = new Vue({
	el: 'main',
	data: {
		texto: "bienvenido a los filtros con Vue 2"
	},
	filters: {//locales
		mayusculas: function (value) {
			if(!value) return '';
			value = value.toString();
			return value.toUpperCase();
		}
	}
});
