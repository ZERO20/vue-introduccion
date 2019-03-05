var vm = new Vue({
	el: 'main',
	data: {
		numero: 124
	},
	filters: {
		decimal: function (value) {
			value = value.toFixed(2);
			return value;
		},
		iva: function (value) {
			value += (value * 21) / 100;
			value = value.toFixed(2);
			return value;
		},
		descuento: function (value) {
			value -= (value * 10) / 100;
			value = value.toFixed(2);
			return value;
		}
	}
});
