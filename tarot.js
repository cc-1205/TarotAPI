function searchAPI() {
	fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards/random`)
		.then((res) => res.json())
		.then((out) => {
			document.getElementById("name").innerHTML = out.cards[0].name;
			document.getElementById("desc").innerHTML = out.cards[0].desc;
			document.getElementById("meaning_up").innerHTML = out.cards[0].meaning_up;
		});
}

function toggleWarning(){
  var warning = document.getElementById('warning');
  warning.style.display = 'flex';
}

function toggleInfo(){
	var info1 = document.getElementById('info1');
	var info2 = document.getElementById('info2');
	var info3 = document.getElementById('info3');

	info1.style.display = 'block';
	info2.style.display = 'block';
	info3.style.display = 'block';
}

document.getElementById("one").addEventListener("click", function () {
	toggleInfo()
	searchAPI();
    toggleWarning();
});
