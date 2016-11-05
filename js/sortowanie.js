

	var table = document.querySelector("#myTable"),
		ths = table.querySelectorAll("thead th"),
		trs = table.querySelectorAll("tbody tr");

function makeArray(nodeList) {
	var array = [];

	for (var i = 0; i < nodeList.length; i++) {
		array.push(nodeList[i]);
	}
	return array;
}

function sortBy(e) {
	var target = e.target,
		thsArray = makeArray(ths),
		trsArray = makeArray(trs),
		index = thsArray.indexOf(target),
		docFragment = document.createDocumentFragment(),
		order = (target.className === "" || target.className === "desc") ? "asc" : "desc";

	trsArray.sort(function(a, b){
		var tdA = a.children[index].textContent,
			tdB = b.children[index].textContent;
		console.log(a)

		if(tdA < tdB) {
			return order === "asc" ? -1: 1;
		} else if(tdA > tdB) {
			return  order === "asc" ? 1: -1;
		} else {
			return 0;
		}
	});
	
	trsArray.forEach(function(tr){
		docFragment.appendChild(tr);
	})

	target.className = order;
	console.log(target.className)
	table.querySelector("tbody").appendChild(docFragment);
}

for (var i=0; i < ths.length; i++) {
	ths[i].addEventListener("click",sortBy,false);
}

