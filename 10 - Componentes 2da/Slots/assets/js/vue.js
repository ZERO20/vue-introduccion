//Solo puede haber un solo slot a no ser que tenga un nombre que lo identifique
Vue.component('advertencia', {
	props: ['mensaje'],
	template: `
	<div>
		<slot name="aviso">AVISO</slot>
		<slot>{{ mensaje }}</slot>
	</div>`
	/*
	* Solo si existe un slot es que reemplazará el contenido, siempre y cuando no tenga nombre
	* Si se desea cambiar más contenido o agregar más slots, basta con agregarle un atributo name a la etiqueta slot
	*/
});
	
new Vue({
	el: 'main',
	data: {
		advertencia: 'Los cambios se han guardado con éxito.'
	}
});
