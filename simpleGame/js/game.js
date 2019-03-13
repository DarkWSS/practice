var canvas = document.createElement("canvas");
var can = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
document.body.appendChild(canvas);
var then = Date.now();
requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame;
cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelAnimationFrame

window.onload = function () {
	rander();
}
var heroState = false;
var heroImg = new Image();
heroImg.onload = function () {
	heroState = true;
}
heroImg.src = "img/hero.png";
	
var bgState = false;
var bgImg = new Image();
bgImg.onload = function () {
	bgState = true;
}
bgImg.src = "img/background.png";
	
var monsterState = false;
var monsterImg = new Image();
monsterImg.onload = function () {
	monsterState = true;
}
monsterImg.src = "img/monster.png";
	
var hero = {
	speed: 256
}
var monster = {};
var monstersCaught = 0;
var countdown = 60;
	
var keyDown = {}
	
var reset = function () {
	document.addEventListener("keydown", function (e) {
		keyDown[e.keyCode] = true;
	}, false)
	document.addEventListener("keyup", function (e) {
		delete keyDown[e.keyCode];
	}, false)
	hero.x = canvas.width/2;
	hero.y = canvas.height/2;
	
	monster.x = 32 + Math.random() * (canvas.width - 64);
	monster.y = 32 + Math.random() * (canvas.height - 64);
}
	
var update = function (modifier) {
	if (38 in keyDown) {
		hero.y -= hero.speed * modifier;
	}
	if (40 in keyDown) {
		hero.y += hero.speed * modifier;
	}
	if (37 in keyDown) {
		hero.x -= hero.speed * modifier;
	}
	if (39 in keyDown) {
		hero.x += hero.speed * modifier;
	}
	if (hero.y < 0) {
		hero.y = 0;
	}
	if (hero.y > canvas.height - 30) {
		hero.y = canvas.height - 30;
	}
	if (hero.x < 0) {
		hero.x = 0;
	}
	if (hero.x > canvas.width - 30) {
		hero.x = canvas.width - 30;
	}
	if (hero.x <= (monster.x +32) && monster.x <= (hero.x + 32) && hero.y <= (monster.y +32) && monster.y <= (hero.y + 32)) {
		++monstersCaught;
		countdown++;
		reset();
	}
}
	
var rander = function () {
	if (bgState) {
		can.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
	}
	if (heroState) {
		can.drawImage(heroImg, hero.x, hero.y);
	}
	if (monsterState) {
		can.drawImage(monsterImg, monster.x, monster.y);
	}
	can.fillStyle = "aliceblue"
	can.font = "18px Arial"
	can.textAlign = "left";
	can.textBaseline = "top";
	can.fillText("Goblins caught: " + monstersCaught + "  Time: " + countdown.toString().split(".")[0], 0, 0);
}

var timer;
var main = function () {
	if (countdown > 0) {
		var now = Date.now();
		var delta = now - then;
		update(delta/1000);	
		rander();
		then = now;
		countdown -= 1/60;
		timer = requestAnimationFrame(main);
	} else {
		cancelAnimationFrame(timer);
		countdown = 0;
		over();
	}
}

var over = function () {
	$(".score").text(monstersCaught);
	$(".mask").eq(1).show();
}

$(document).on("click", "#start", function () {
	$(".mask").hide();
	reset();
	main();
})

$(document).on("click", ".yes_btn", function () {
	$(".mask").hide();
	monstersCaught = 0;
	countdown = 60;
	reset();
	main();
})
