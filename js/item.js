var item = (function () {
	var id = "";
	var width = "";
	var height = "";
	var depth = "";
	var quantity = "";
	var vr = false;

	function set(id, width, height, depth, quantity, vr) {
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
			this.quantity = parseInt(quantity);
			this.vr = vr;
		}
		
	}

})();