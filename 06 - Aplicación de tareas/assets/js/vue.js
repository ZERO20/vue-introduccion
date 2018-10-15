var vm = new Vue({
	el: '#misTareas',
	data: {
		nuevaTarea: '',
		tareas: []
	},
	methods: {
		addTarea: function(){
			if(this.nuevaTarea != '')
				this.tareas.push({texto: this.nuevaTarea, completada: false });
				this.nuevaTarea = '';
		},
		completarTarea: function(tarea){
			tarea.completada = !tarea.completada;
		},
		eliminarTarea: function(index){
			this.tareas.splice(index, 1);
		}
	}
});