var containers = (function () { 
	var list = [];
	var template = $("#template-container").html();
	
	function add (container) {
		appendContainer(container);
		list.push(container);
	};

	function appendContainer(container) {
		var containerObject = Mustache.render(template, container);
		if (list.length > 0) {
			$("#bin-containers").append(containerObject);
		}
		else {
			$("#bin-containers").html("");
			$("#bin-containers").append(containerObject);
		}


		$(".btn-remove-container").on("click", function () {
			$(this).closest(".container-object").remove();
		});
		
	};

	function getList() {
		return list;
	}
		
	return {
		add: add,
		getList:getList
	}
	
})()