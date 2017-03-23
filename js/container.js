var container = (function () {
	var id = "";
	var width = 0;
	var height = 0;
	var depth = 0;
	var maxweight = 0;
	
	function set(id, width, height, depth, maxweight) {
		if (
			id == "" ||
			width == "" ||
			$.isNumeric(width) == false ||
			height == "" ||
			$.isNumeric(height) == false ||
			depth == "" ||
			$.isNumeric(depth) == false ||
			maxweight == "" ||
			$.isNumeric(maxweight) == false
		) {

			return false
		}
		else {
			this.id = id;
			this.width = parseInt(width);
			this.height = parseInt(height);
			this.depth = parseInt(depth);
			this.maxweight = parseInt(maxweight);

			
			return true;
		}
	}

	function get() {
		var container = {
			"id": this.id,
			"w": this.width,
			"h": this.height,
			"d": this.depth,
			"max_wg": this.maxweight
		};

		return container;
	}

	return {
		set: set,
		get:get
	}
	
})();