
		var world= [
	[2,2,2,2,2,2,2,2,2,2],
	[2,1,1,2,1,1,1,1,3,2],
	[2,1,1,2,1,1,1,2,2,2],
	[2,1,1,2,1,1,1,2,2,2],
	[2,1,1,2,2,2,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,2,1,1,1,2],
	[2,1,1,1,1,2,1,1,1,2],
	[2,2,2,2,2,2,2,2,2,2]
	];

var score = 0;

var absol= {
	x:1,
	y:1
};

function displayWorld(){
	var output='';

		for(var i=0; i<world.length; i++) {
			output +="<div class='row'>\n";
				for(var j=0; j<world[i].length; j++) {
					if(world[i][j] == 2)
						output += "<div class='rock'></div>";
					else if(world[i][j] == 1)
						output += "<div class='puff'></div>";
					else if(world[i][j] == 3)
						output += "<div class='cherry'></div>";
					else if(world[i][j] == 0)
						output += "<div class='empty'></div>";
				}
				output +="\n</div>";
		}
		console.log(output);
		document.getElementById('world').innerHTML = output;
}
	function displayAbsol() {
		document.getElementById('absol').style.left = absol.x*30+"px";
		document.getElementById('absol').style.top = absol.y*30+"px";
	}
	function displayScore() {
		document.getElementById('score').innerHTML = score;
	}

	displayWorld();
	displayAbsol();
	displayScore();

	document.onkeydown = function(e) {
		if(e.keyCode == 37 && world[absol.y][absol.x-1] !=2){
			absol.x--;
		}
		
		else if(e.keyCode == 39 && world[absol.y][absol.x+1] !=2){
			absol.x++;
		}
		else if(e.keyCode == 38 && world[absol.y-1][absol.x] !=2){
			absol.y--;
		}
		else if(e.keyCode == 40 && world[absol.y+1][absol.x] !=2){
			absol.y++;
		}

		if(world[absol.y][absol.x] == 1){
			world[absol.y][absol.x] = 0;
			score+=10;
			displayWorld();
			displayScore();
		};
		if(world[absol.y][absol.x] == 3){
			world[absol.y][absol.x] = 0 ;
			score+=50;
			displayWorld();
			displayScore();
		};

		displayAbsol();
	}
