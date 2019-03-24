var vm = new Vue({
	el: 'main',
	data: {
		listado: [
		{titulo: "Aquaman", fecha: 2019, imagen: "assets/img/peliculas/Aquaman-Bluray-1080p-Audio-Latino-MEGA-108x160.jpg"},
		{titulo: "Bumblebee", fecha: 2019, imagen: "assets/img/peliculas/Bumblebee-Bluray-1080p-Audio-Latino-Google-Drive-108x160.jpg"},
		{titulo: "Buscando", fecha: 2018, imagen: "assets/img/peliculas/Buscando-Pelicula-2018-Poster-Latino-Bluray-1080p-108x160.jpg"},
		{titulo: "Creed 2", fecha: 2018 , imagen: "assets/img/peliculas/Creed-ii-defendiendo-un-legado-Poster-Latino-MEGA-108x160.jpg"},
		{titulo: "Dragon Ball Super: Broly la pelicula", fecha: 2018 , imagen: "assets/img/peliculas/Dragon-Ball-Super-Broly-La-Pelicula-Bluray-1080p-Audio-Latino-Poster-108x160.jpg"},
		{titulo: "Una familia al instante", fecha:2019 , imagen: "assets/img/peliculas/Familia-Al-Instante-Bluray-1080p-Audio-Latino-108x160.jpg"},
		{titulo: "Green book", fecha: 2018, imagen: "assets/img/peliculas/Green-Book-Poster-Latino-MEGA-1080p-108x160.jpg"},
		{titulo: "Lego 2", fecha: 2019 , imagen: "assets/img/peliculas/La-Gran-Aventura-LEGO-2-Poster-Latino-Bluray-1080p-108x160.jpg"},
		{titulo: "Replicas", fecha: 2019 , imagen: "assets/img/peliculas/Replicas-Bluray-Audio-Latino-Poster-108x160.jpg"},
		{titulo: "Spider-man: un nuevo universo", fecha: 2019 , imagen: "assets/img/peliculas/Spider-man-un-nuevo-universo-Bluray-1080p-Audio-Latino-108x160.jpg"}
		],
		busqueda: ""
	},
	computed: {
		/*Se filtra sobre el listado con una funcion tipo arrow que el título contenga el valor del campo busqueda con el método includes*/
		buscarPorTitulo() {
			return this.listado.filter(pelicula => pelicula.titulo.toLowerCase().includes(this.busqueda.toLowerCase()));
		}
	}
});