var vm = new Vue({
	el: 'main',
	data: {
		mensaje: 'Cambia este mensaje...'
	}
})

//la propiedad mensaje de data es asociada al input con la directiva v-model="mensaje" cambiando reactivamente 