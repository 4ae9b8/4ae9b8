(function(){
	// http://stackoverflow.com/a/4644705/754471
	function getElementsByClassName(classname, node)  {
	    if(!node) node = document.getElementsByTagName("body")[0];
	    var a = [];
	    var re = new RegExp('\\b' + classname + '\\b');
	    var els = node.getElementsByTagName("*");
	    for(var i=0,j=els.length; i<j; i++)
	        if(re.test(els[i].className))a.push(els[i]);
	    return a;
	}
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
	for (var key in members) { 
		var el = document.querySelector("#c"+(43+parseInt(key)));

		if (el != undefined) {
			el.dataset.twttr = "@"+members[key];
			el.parentNode.href = "https://twitter.com/"+members[key]+"/"; 
		}
	}

	/*var num = Math.round(Math.random()*100); // Number of inverted squared for the next 15 seconds
	function invert(){
		var els = getElementsByClassName("inverted");
		for(var i in els){ els[i].className = ""; }
		var i = 1;
		while(i <= num){
			var el = document.querySelector("#c"+Math.round(Math.random()*100));
			if(el){ el.className = "inverted"; }
			i++;
		}
		num = Math.round(Math.random()*100);
	}
	invert();
	setInterval(function(){ invert() }, 15000);*/
})();