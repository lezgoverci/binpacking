(function () {
	$(document).on("click", "#btn-add-item", function (e) {
		e.preventDefault();

		var id = $("#item-id").val();
		var width = $("#item-width").val();
		var height = $("#item-height").val();
		var depth = $("#item-depth").val();
		var weight = $("#item-weight").val();
		var quantity = $("#item-quantity").val();
		var vr = $("#item-vr").val();

		var res = item.set(id, width, height, depth, weight, quantity, vr);
		if (res) {
			items.add(item.get());
			console.log(items.getList());
		}

		$("#item-id").val("");
		$("#item-width").val("");
		$("#item-height").val("");
		$("#item-depth").val("");
		$("#item-weight").val("");
		$("#item-quantity").val("");
		//$("#item-vr").val();

	});

	$(document).on("click", ".btn-remove-item", function () {
		items.remove(this);
	});

	$(document).on("change", "#item-vr", function () {
		if ($(this).is(':checked')) {
			$(this).attr('value', 'true');
		} else {
			$(this).attr('value', 'false');
		}
	});
})()