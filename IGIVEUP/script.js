//$(document).ready(function(){
	var i, index, _this, go, node, key;
	var $mmbrs = $map = $lrtb = new Array();

	$mmbrs = [	
		["_joshnh", true],
		["FWeinb", true],
		["HugoGiraudel", true],
		["jackrugile", true],
		["Mobilpadde", true],
		["thebabydino", false],
		["TimPietrusky", true],
		["SaraSoueidan", true]
	];

	for(i=1; i<=100; i++){
		$("#box").append("<div id='b"+i+"' class='b"+Math.floor(Math.random()*7)+"'></div>");
	}

	$("#box div").click(function(){
		_this = $(this);
		index = $("#box div").index(this);
		$lrtb = new Array();

		// Map 'em out!; Ay sir!
		$map = $.map($("."+_this.attr("class")), function(n, i){
			return n;
		});
		
		// Anybody home up there?
		i=0;
		go = true;
		while(go){
			var size = $lrtb.length;
			for(key in $map){
				node = $map[key];
				if((index-(i*10)) == $("#box div").index(node)){
					$lrtb.push(node);
				}
			}
			if(size == $lrtb.length){go = false}
			i++;
		}

		// Or down here?
		i=0;
		go = true;
		while(go){
			var size = $lrtb.length;
			for(key in $map){
				node = $map[key];
				if((index+(i*10)) == $("#box div").index(node)){
					$lrtb.push(node);
				}
			}
			if(size == $lrtb.length){go = false}
			i++;
		}

		// How about left?
		i=0;
		go = true;
		while(go){
			var size = $lrtb.length;
			for(key in $map){
				node = $map[key];
				if((index-i) == $("#box div").index(node)){
					$lrtb.push(node);
				}
			}
			if(size == $lrtb.length){go = false}
			i++;
		}

		// One way or another, I'm gon' find ya!
		i=0;
		go = true;
		while(go){
			var size = $lrtb.length;
			for(key in $map){
				node = $map[key];
				if((index-i) == $("#box div").index(node)){
					$lrtb.push(node);
				}
			}
			if(size == $lrtb.length){go = false}
			i++;
		}
		console.log($lrtb);

		// That array is DIRTY!
		var tmpArr = $lrtb.filter(function(el, pos){
			return $lrtb.indexOf(el) == pos;
		})
		$lrtb = tmpArr;

		// Remove those same coloured bastards! (No racism intended)
		if($lrtb.length > 1){
			for(key in $lrtb){
				$lrtb[key].remove();
			}
		}
	})


//})