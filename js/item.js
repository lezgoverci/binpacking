var item = (function () {
	var id = "";
	var width = "";
	var height = "";
	var depth = "";
	var weight = "";
	var quantity = "";
	var vr = false;

	function set(id, width, height, depth, weight,quantity, vr) {
		if (
			id != "" ||
			width != "" ||
			height != "" ||
			depth != "" ||
			quantity != ""
		){
			this.id = id;
			this.width = parseInt(width);
			this.height = parseInt(height);
			this.depth = parseInt(depth);
			this.weight = parseInt(weight);
			this.quantity = parseInt(quantity);
			this.vr = vr;

			return true;
		}
		else {
			return false;
		}
		
	}

	function get() {
		var item = {
			"w": this.width,
			"h": this.height,
			"d": this.depth,
			"q": this.quantity,
			"vr": this.vr,
			"wg": this.weight,
			"id":this.id
		}

		return item;
	}

	return {
		set: set,
		get:get
	}

})();