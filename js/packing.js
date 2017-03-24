var packing = (function () {
	var query = {
		"bins": containers.getList(),
		"items": items.getList(),
		"username": constants.username,
		"api_key": constants.api_key,
		"params": {
			"images_background_color": constants.images_background_color,
			"images_bin_border_color": constants.images_bin_border_color,
			"images_bin_fill_color": constants.images_bin_fill_color,
			"images_item_border_color": constants.images_item_border_color,
			"images_item_fill_color": constants.images_item_fill_color,
			"images_item_back_border_color": constants.images_item_back_border_color,
			"images_sbs_last_item_fill_color": constants.images_sbs_last_item_fill_color,
			"images_sbs_last_item_border_color": constants.images_sbs_last_item_border_color,
			"images_width": constants.images_width,
			"images_height": constants.images_height,
			"images_source": constants.images_source,
			"images_sbs": constants.images_sbs,
			"stats": constants.stats,
			"item_coordinates": constants.item_coordinates,
			"images_complete": constants.images_complete,
			"images_separated": constants.images_separated
		}
	};


	function pack() {
		$.ajax({
			method: "POST",
			url: 'https://global-api.3dbinpacking.com/packer/packIntoMany/',
			query: this.query,
			beforeSend: function (request) {
				request.setRequestHeader("Authorization", "Negotiate");
			},
			async: true,
			success: function (data) {
				alert(JSON.stringify(data));
			},
		})
			.done(function (msg) {
				alert("Data Saved: " + msg);
			});
	}

	function test() {
		return query;
	}

	return {
		pack: pack,
		test:test
	}
})();