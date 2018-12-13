Vue.component('mi-componente', {
	template: `
	<div>
		<h1>Componentes</h1>
		<p>Esto es un componente</p>
		<p>Y lo puedo usar cuantas veces quiera!</p>
		<b>{{ nuevoDato }}</b>
	</div>
	`,
	data: function () {
		return {
			nuevoDato: 'Hola soy un dato'
		}
	}
});
	
new Vue({
	el: 'main'
});

//Dentro de un componente data debe ser una funcion que retorne los datos
//Para hacer multilinea se usa comillas invertidas