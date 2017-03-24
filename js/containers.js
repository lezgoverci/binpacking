var containers = (function () { 
	var list = [];
	var template = $("#template-container").html();
	
	function add (container) {
		appendContainer(container);
		list.push(container);
	};

	function remove(element) {
	
		var el = $(element).closest(".container-object");
		var index = $(".container-object").index(el);
		el.remove();
		list.splice(index, 1);
		console.log(list);
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