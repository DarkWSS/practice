$(document).ready(() => {
	$(".part").eq(0).css("top", "0%");
})
/*
 * 页面元素可见时的判断
 */
$.fn.judgeInOrOut = function() {
	const scrollTop = $(window).height();
	const offsetTop = $(this).offset().top;
	if(scrollTop > offsetTop) {
		return true;
	}
	return false;
}
/*
 * 数字自增动画
 */
$.fn.numberAnimate = function (num, count) {
 	const addNum = count / 200;
 	setTimeout(() => {
 		$(this).text(parseInt(num));
 		num += addNum;
 		if(num >= count) {
 			$(this).text(parseInt(count));
 		} else {
 			$(this).numberAnimate(num, count);
 		}
 	}, 10);
}
/*
 * 旋转动画
 */
$.fn.rotateAnimate = function (start, rotate) {
	const addDeg = rotate / 20;
	setTimeout(() => {
		$(this).css("transform", "rotate(" + start + "deg)");
		start += addDeg;
		rotate -= addDeg;
		if( rotate >= 0 ){
			$(this).rotateAnimate(start, rotate);
		}
	}, 10);
}
/*
 * 页面滚动事件自动定位锚点
 */
let partIndex = 0;
let startY;
document.body.addEventListener("touchstart", function(event){
	if(event.targetTouches.length == 1) {
		var touch = event.targetTouches[0];
		startY = touch.screenY;
	}
}, false);
document.body.addEventListener("touchend", function(event){
	if(event.changedTouches.length == 1) {　　　　
		const touch = event.changedTouches[0];
		if (startY > touch.screenY) {
	        partIndex++;
			partIndex  = partIndex > $(".part").length - 1 ? $(".part").length - 1 : partIndex;	
			$(".part").eq(partIndex).animate({"top": "0%"}, 1000, function(){
				$(".part h4").eq(partIndex - 1).addClass("animated slideInDown");
				switch (partIndex){
					case 1:
						const rotateArr = [-15, 20, -9, 7, -6];
						const leftArr = [12, 60, 5, 15, 2];
						if(parseInt($(".intro p").eq(1).css("margin-left")) <= 100){
							$.each($(".intro p"), (i) => {
								$(".intro p").eq(i).rotateAnimate(-90, rotateArr[i] + 90);
								$(".intro p").eq(i).animate({"margin-left": leftArr[i] + "%"});
							})
						}
						break;
					case 2:
						skillBar();
						break;
					case 3:
						$(".exp_intro").show();
						$(".exp_intro").eq(0).addClass("animated slideInLeft");
						$(".exp_intro").eq(1).addClass("animated slideInRight");
						break;
					case 4:
						const animeArr = ["slideInDown", "slideInDown", "slideInLeft", "slideInRight", "slideInLeft", "slideInRight", "slideInUp", "slideInUp"];
						$(".hobbie").show();
						$.each($(".hobbie"), function(i) {
							$(this).addClass(`animated ${animeArr[i]}`);
						});
						break;
					default:
						break;
				}
			});
		} else if(startY < touch.screenY && partIndex > 0) {
			$(".part").eq(partIndex).animate({"top": "100%"}, 1000);
			partIndex  = partIndex < 0 ? 0 : partIndex;
			partIndex--;
		}
	}
},false);
/*
 * 技能条颜色以及动画
 */
let skillBar = () => {
	const colorArr = ["#436EEE", "#458B74", "#483D8B", "#6B8E23", "#388E8E", "#CD8162", "#CD3333"];
	const widthArr = [95 , 92, 96, 90, 87, 80, 82];
	if (parseInt($(".skill_bar").eq(0).text()) != widthArr[0]) {
		$.each($(".skill_value"), function(i) {
			$(".skill_value").eq(i).css("border-color", colorArr[i]);
			$(".skill_bar").eq(i).css("background-color", colorArr[i]);
			$(".skill_bar").eq(i).numberAnimate(0, widthArr[i]);
			$(".skill_bar").eq(i).animate({"width": widthArr[i]+"%"},2000);
		});
	}
}
