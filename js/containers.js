var containers = (function () { 
	var list = [];
	var template = $("#template-container").html();
	
	function add (container) {
		appendContainer(container);
		list.push(container);
	};

	function remove() {
		$(this).closest(".container-object").addClass("to-remove");
		var el = $(".to-remove");
		var index = $(".container-object").index(el);
		//el.remove();
		//list.splice(index, 1);
		console.log(index);
	}

	function appendContainer(container) {
		var containerObject = Mustache.render(template, container);
		if (list.length > 0) {
			$("#bin-containers").append(containerObject);
		}
		else {
			$("#bin-containers").html("");
			$("#bin-containers").append(containerObject);
		}


		$(".btn-remove-container").on("click", remove);
		
	};

	function getList() {
		return list;
	}
		
	return {
		add: add,
		remove:remove,
		getList:getList
	}
	
})()