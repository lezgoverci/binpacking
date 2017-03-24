var items = (function () {
	var list = [];
	var template = $("#template-item").html();
	var binItems = $("#bin-items");

	function add(item) {
		appendItem(item);
		list.push(item);
	}

	function appendItem(item) {
		var itemObject = Mustache.render(template,item);
		if (list.length > 0) {
			binItems.append(itemObject);
		}
		else {
			binItems.html("");
			binItems.append(itemObject);
		}
	}

	function remove(element) {
		var el = $(element).closest(".item-object");
		var index = binItems.index(el);
		el.remove();
		list.splice(index, 1);
		console.log(list);
	}

	function getList() {
		return list;
	}

	return {
		add: add,
		remove:remove,
		getList:getList
	}
})();