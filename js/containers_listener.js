(function () {
	$(document).on("click","#bin-setup #btn-add-container", function (e) {
		e.preventDefault();

		var id = $("input#container-id").val();
		var width = $("input#container-width").val();
		var height = $("input#container-height").val();
		var depth = $("input#container-depth").val();
		var maxweight = $("input#container-max-weight").val();
		
		var res = container.set(id, width, height, depth, maxweight);
		if (res) {
			containers.add(container.get());
			console.log(containers.getList());
		}

		$("input#container-id").val("");
		$("input#container-width").val("");
		$("input#container-height").val("");
		$("input#container-depth").val("");
		$("input#container-max-weight").val("");
	});

	$(document).on("click", ".btn-remove-container", function(){
		containers.remove(this);
	});
	
})()