(function(){
	// http://stackoverflow.com/a/6274398/754471
	Array.prototype.shuffle = function () {
	    for (var i = this.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var tmp = this[i];
	        this[i] = this[j];
	        this[j] = tmp;
	    }
	    return this;
	}

	var members = ["FWeinb", "HugoGiraudel", "Mobilpadde", "TheBabyDino", "TimPietrusky", "SaraSoueidan"].shuffle(); // Alphabetic => Random

	for(var key in members){ 
		document.querySelector("#c"+(43+parseInt(key))).parentNode.href="https://twitter.com/"+members[key]+"/"; 
	}
})();