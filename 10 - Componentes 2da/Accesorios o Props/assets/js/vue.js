Vue.component('libro', {
	props: ['titulo', 'autor', 'url'],
	template: `<h1><a :href="url" target="_blank">{{ titulo }}</a><br/>{{ autor }}</h1>`,
	/*
	*Las props son accesibles desde this 
	*/
	mounted() {
		console.log(this.titulo)
	}
});
	
new Vue({
	el: 'main',
	data: {
		elTitulo: 'Quien se ha comido mi queso',
		elAutor: 'Spencer Johnson',
		laUrl: 'https://es.wikipedia.org/wiki/%C2%BFQui%C3%A9n_se_ha_llevado_mi_queso%3F'
	}
});
