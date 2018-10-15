var vm = new Vue({
	el: '#main',
	data: {
		url: '',
		titulo: '',
		videoActivo: '',
		mostrar: false,
		videos: []
	},
	methods: {
		mostrarTitulo: function() {
			if(this.url.trim() != '')
				this.mostrar = !this.mostrar;				
				setTimeout(function(){$('#title').focus();}, 100);		
		},
		agregarDatos: function() {
			if(this.titulo.trim() != '')
				this.mostrar = !this.mostrar;
				this.videos.push({titulo: this.titulo, url: this.url, activo: false});
				//Guardar el objeto como string
				localStorage.setItem('pistas', JSON.stringify(this.videos));
				this.url = this.titulo = '';
				setTimeout(function(){$('#url').focus();}, 100);
		},
		reproducirVideo: function(video){
			let videoUrl = video.url;
			let nuevaUrl = videoUrl.replace('watch?v=', 'embed/');
			this.videoActivo = nuevaUrl + '?autoplay=1';
			for(let video of this.videos){
				video.activo = false;
			}
			video.activo = true;
		},
		eliminarVideo: function(video){
			this.videos.splice(this.videos.indexOf(video), 1);
			localStorage.setItem('pistas', JSON.stringify(this.videos));
		}
	}
});