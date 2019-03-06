var vm = new Vue({
	el: '#misTareas',
	data: {
		nuevaTarea: '',
		tareas: [
		{texto: 'Crear nuevas tareas', completada: false, prioridad: true},
		{texto: 'Ordenar tareas', completada: false, prioridad: true},
		{texto: 'Calcular tiempo empleado', completada:false, prioridad:false}
		]
	},
	methods: {
		addTarea: function(){
			if(this.nuevaTarea != '')
				this.tareas.push({texto: this.nuevaTarea, completada: false, prioridad: false });
				this.nuevaTarea = '';
		},
		completarTarea: function(tarea){
			tarea.completada = !tarea.completada;
		},
		eliminarTarea: function(index){
			this.tareas.splice(index, 1);
		}
	},
	computed: {
		tareasPrioritarias() {
			return this.tareas.filter((tarea) => tarea.prioridad);
		}
	}
});