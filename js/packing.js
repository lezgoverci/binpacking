var packing = (function () {
	var query = {
		"bins": [
			{
				"w": 5,
				"h": 5,
				"d": 5,
				"max_wg": 0,
				"id": "Bin1"
			},
			{
				"w": 3,
				"h": 3,
				"d": 3,
				"max_wg": 0,
				"id": "Bin2"
			}
		],
		"items": [
			{
				"w": 5,
				"h": 3,
				"d": 2,
				"q": 2,
				"vr": 1,
				"wg": 0,
				"id": "Item1"
			},
			{
				"w": 3,
				"h": 3,
				"d": 3,
				"q": 3,
				"vr": 1,
				"wg": 0,
				"id": "Item2"
			}
		],
		"username": "vrcllx",
		"api_key": "51dc76c69b21bbab140a7f2800d2915c",
		"params": {
			"images_background_color": "255,255,255",
			"images_bin_border_color": "59,59,59",
			"images_bin_fill_color": "230,230,230",
			"images_item_border_color": "214,79,79",
			"images_item_fill_color": "177,14,14",
			"images_item_back_border_color": "215,103,103",
			"images_sbs_last_item_fill_color": "99,93,93",
			"images_sbs_last_item_border_color": "145,133,133",
			"images_width": 100,
			"images_height": 100,
			"images_source": "file",
			"images_sbs": 1,
			"stats": 1,
			"item_coordinates": 1,
			"images_complete": 1,
			"images_separated": 1
		}
	};

	function pack() {
		$.ajax({
			method: "POST",
			url: 'https://global-api.3dbinpacking.com/packer/packIntoMany/',
			data: this.query
			})
			.done(function( msg ) {
				alert( "Data Saved: " + msg );
			});
	}

	return {
		pack:pack
	}
})()