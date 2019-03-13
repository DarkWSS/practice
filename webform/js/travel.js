let recommendIndex = 1;
$(document).ready(function() {
	setCountryChoose();
	setRecommend();
	$(".curve_num").text(1);
	$(".total_num").text($(".order_recommend").length - 2);
	$(".total_num").judgeInOrOut();
})
$("body").scroll(function() {
	if($(".city_sub").eq(0).judgeInOrOut() && $(".city").css("opacity") == 0) {
		cityAnime();
	}
	if($(".ctrl_recommend").eq(0).judgeInOrOut() && $(".recommend_title").css("opacity") == 0) {
		recommendAnime();
	}
})
$(".add").click(function() {
	recommendIndex++;
	if(recommendIndex > $(".order_recommend").length - 2) {
		$(".add").removeClass("ctrl_recommend_btn");
		recommendIndex = $(".order_recommend").length - 2;
	} else {
		$(".add").addClass("ctrl_recommend_btn");
		$(".minus").addClass("ctrl_recommend_btn");
		$(".curve_num").text(recommendIndex);
		recommendAdd();
		console.log(recommendIndex);
	}
})
$(".minus").click(function() {
	recommendIndex--;
	if(recommendIndex < 1) {
		$(".minus").removeClass("ctrl_recommend_btn");
		recommendIndex = 1;
	} else {
		$(".curve_num").text(recommendIndex);
		$(".add").addClass("ctrl_recommend_btn");
		$(".minus").addClass("ctrl_recommend_btn");
		recommendMinus();
	}
})
$(".choose_us").click(function() {
	const height = $(window).height();
	$("body").animate({
		scrollTop: height
	}, 500);
})

function setRecommend() {
	$.each($(".order_recommend"), function(i) {
		$(".order_recommend").eq(i).hide();
		if(i < 3) {
			$(".order_recommend").eq(i).show();
		}
	});
	$(".order_recommend").eq(0).css({
		marginLeft: "7%",
		marginRight: "3%"
	});
	$(".order_recommend").eq(1).css({
		width: "30%",
		height: "400px"
	});
	$(".order_recommend").eq(2).css({
		marginLeft: "3%",
		marginRight: "7%"
	});
	$(".recommend_intro").eq(1).hide();
	$(".add").addClass("ctrl_recommend_btn");
}
const animation01 = anime({
	targets: '.intro01',
	color: [{
			value: "#5F9EA0",
			duration: 700
		},
		{
			value: "#3A5FCD",
			duration: 300
		}
	],
	fontSize: [{
			value: "32px",
			duration: 700
		},
		{
			value: "64px",
			duration: 300
		}
	],
	rotate: 180,
	borderRadius: 8,
	duration: 1000,
	loop: false,
	easing: 'easeInOutSine'
})
const animation02 = anime({
	targets: '.intro02',
	color: [{
			value: "#282828",
			delay: 200,
			duration: 700
		},
		{
			value: "#00CD66",
			delay: 200,
			duration: 300
		}
	],
	fontSize: [{
			value: "64px",
			delay: 200,
			duration: 700
		},
		{
			value: "48px",
			delay: 200,
			duration: 300
		}
	],
	rotate: 180,
	borderRadius: 8,
	duration: 1000,
	loop: false,
	easing: 'easeInOutSine'
})
const animation03 = anime({
	targets: '.intro03',
	color: [{
			value: "#473C8B",
			delay: 300,
			duration: 500
		},
		{
			value: "#CD5B45",
			delay: 300,
			duration: 500
		}
	],
	fontSize: [{
			value: "48px",
			delay: 300,
			duration: 500
		},
		{
			value: "64px",
			delay: 300,
			duration: 500
		}
	],
	rotate: 180,
	borderRadius: 8,
	duration: 1000,
	loop: false,
	easing: 'easeInOutSine'
})
const animation04 = anime({
	targets: '.intro04',
	color: [{
			value: "#EAEAEA",
			delay: 400,
			duration: 500
		},
		{
			value: "#FF3030",
			delay: 400,
			duration: 500
		}
	],
	fontSize: [{
			value: "64px",
			delay: 400,
			duration: 500
		},
		{
			value: "80px",
			delay: 400,
			duration: 500
		}
	],
	rotate: 180,
	borderRadius: 8,
	duration: 1000,
	loop: false,
	easing: 'easeInOutSine'
})
const animation05 = anime({
	targets: '.intro05',
	color: [{
			value: "#F08080",
			delay: 500,
			duration: 500
		},
		{
			value: "#6495ED",
			delay: 500,
			duration: 500
		}
	],
	fontSize: [{
			value: "16px",
			delay: 500,
			duration: 500
		},
		{
			value: "64px",
			delay: 500,
			duration: 500
		}
	],
	rotate: 180,
	borderRadius: 8,
	duration: 1000,
	loop: false,
	easing: 'easeInOutSine'
})
const animation06 = anime({
	targets: '.choose_us',
	opacity: [{
			value: 0.5,
			delay: 1000,
			duration: 500
		},
		{
			value: 1,
			delay: 1000,
			duration: 500
		}
	],
	rotate: 360,
	borderRadius: 10,
	duration: 1000,
	loop: false,
	easing: 'easeInOutSine',
})

/* 级联 */
const countryData = ["  ", "Angola", "Afghanistan", "Albania", "Algeria", "Andorra", "Anguilla", "  "];
const cityData = [
	[],
	["  ", "Angola01", "Angola02", "Angola03", "Angola04", "Angola05", "Angola06", "  "],
	["  ", "Afghanistan01", "Afghanistan02", "Afghanistan03", "Afghanistan04", "Afghanistan05", "Afghanistan06", "  "],
	["  ", "Albania01", "Albania02", "Albania03", "Albania04", "Albania05", "Albania06", "  "],
	["  ", "Algeria01", "Algeria02", "Algeria03", "Algeria04", "Algeria05", "Algeria06", "  "],
	["  ", "Andorra01", "Andorra02", "Andorra03", "Andorra04", "Andorra05", "Andorra06", "  "],
	["  ", "Anguilla01", "Anguilla02", "Anguilla03", "Anguilla04", "Anguilla05", "Anguilla06", "  "],
	[],
];
let countryDataIndex = 1;
let cityDataIndex = 1;
/*
 * 页面内元素使用鼠标滚轮事件时，屏蔽页面的滚轮滑动事件
 */
$.fn.scrollUnique = function() {
	return $(this).each(function() {
		var eventType = 'mousewheel';
		if(document.mozHidden !== undefined) {
			eventType = 'DOMMouseScroll';
		}
		$(this).on(eventType, function(event) {
			// 一些数据
			var scrollTop = this.scrollTop,
				scrollHeight = this.scrollHeight,
				height = this.clientHeight;

			var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);

			if((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
				// IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
				this.scrollTop = delta > 0 ? 0 : scrollHeight;
				// 向上滚 || 向下滚
				event.preventDefault();
			}
		});
	});
};
$(".choose_country").scrollUnique();
$(document).on("mousewheel", ".choose_country", function(event) {
	var dir = event.originalEvent.deltaY > 0 ? countryDataIndex++ : countryDataIndex--;
	if(countryDataIndex < 1) {
		countryDataIndex = 1;
	} else if(countryDataIndex > countryData.length - 2) {
		countryDataIndex = countryData.length - 2;
	}
	setCountryChoose();
})

function setCountryChoose() {
	$(".order_one").eq(0).text(countryData[countryDataIndex - 1]);
	$(".choose_one").eq(0).text(countryData[countryDataIndex]);
	$(".order_one").eq(1).text(countryData[countryDataIndex + 1]);
	cityDataIndex = 1;
	setCityChoose();
}
$(".choose_city").scrollUnique();
$(document).on("mousewheel", ".choose_city", function(event) {
	var dir = event.originalEvent.deltaY > 0 ? cityDataIndex++ : cityDataIndex--;
	if(cityDataIndex < 1) {
		cityDataIndex = 1;
	} else if(cityDataIndex > cityData[countryDataIndex].length - 2) {
		cityDataIndex = cityData[countryDataIndex].length - 2;
	}
	setCityChoose();
})

function setCityChoose() {
	$(".order_one").eq(2).text(cityData[countryDataIndex][cityDataIndex - 1]);
	$(".choose_one").eq(1).text(cityData[countryDataIndex][cityDataIndex]);
	$(".order_one").eq(3).text(cityData[countryDataIndex][cityDataIndex + 1]);
}

function recommendAdd() {
	anime({
		targets: document.getElementsByClassName("order_recommend")[recommendIndex - 2],
		width: [{
				value: "35%",
				duration: 0
			},
			{
				value: 0,
				duration: 500
			}
		],
		height: [{
				value: "80px",
				duration: 0
			},
			{
				value: 0,
				duration: 500
			}
		],
		marginLeft: [{
				value: "7%",
				duration: 0
			},
			{
				value: "0",
				duration: 500
			}
		],
		marginRight: [{
				value: "3%",
				duration: 0
			},
			{
				value: "0",
				duration: 500
			}
		],
		borderRadius: 10,
		duration: 1000,
		loop: false,
		easing: 'easeInOutSine',
		begin () {
			$(".recommend_name").eq(recommendIndex - 3).fadeOut();
		},
		complete () {
			$(".order_recommend").eq(recommendIndex - 2).hide();
		}
	})
	anime({
		targets: document.getElementsByClassName("order_recommend")[recommendIndex - 1],
		width: [{
				value: "30%",
				duration: 0
			},
			{
				value: "25%",
				duration: 500
			}
		],
		height: [{
				value: "400px",
				duration: 0
			},
			{
				value: "80px",
				duration: 500
			}
		],
		marginLeft: [{
				value: "0",
				duration: 0
			},
			{
				value: "7%",
				duration: 500
			}
		],
		marginRight: [{
				value: "0",
				duration: 0
			},
			{
				value: "3%",
				duration: 500
			}
		],
		rotate: 0,
		borderRadius: 10,
		duration: 500,
		loop: false,
		easing: 'easeInOutSine',
		begin () {
			$(".recommend_intro").eq(recommendIndex - 2).slideUp(500);
		}
	})
	anime({
		targets: document.getElementsByClassName("order_recommend")[recommendIndex],
		width: [{
				value: "25%",
				duration: 0
			},
			{
				value: "30%",
				duration: 500
			}
		],
		height: [{
				value: "80px",
				duration: 0
			},
			{
				value: "400px",
				duration: 500
			}
		],
		marginLeft: [{
				value: "3%",
				duration: 0
			},
			{
				value: "0",
				duration: 500
			}
		],
		marginRight: [{
				value: "7%",
				duration: 0
			},
			{
				value: "0",
				duration: 500
			}
		],
		rotate: 0,
		borderRadius: 10,
		duration: 1000,
		loop: false,
		easing: 'easeInOutSine',
		begin () {
			$(".recommend_intro").eq(recommendIndex - 1).hide(1);
		},
		complete () {
			$(".recommend_intro").eq(recommendIndex - 1).slideDown(1000);
		}
	})
	anime({
		targets: document.getElementsByClassName("order_recommend")[recommendIndex + 1],
		width: [{
				value: "0",
				duration: 0
			},
			{
				value: "25%",
				duration: 500
			}
		],
		height: [{
				value: "0",
				duration: 0
			},
			{
				value: "80px",
				duration: 500
			}
		],
		marginLeft: [{
				value: "0",
				duration: 0
			},
			{
				value: "3%",
				duration: 500
			}
		],
		marginRight: [{
				value: "0",
				duration: 0
			},
			{
				value: "7%",
				duration: 500
			}
		],
		rotate: 0,
		borderRadius: 10,
		duration: 1000,
		loop: false,
		easing: 'easeInOutSine',
		begin () {
			$(".recommend_intro").eq(recommendIndex).hide();
			$(".recommend_name").eq(recommendIndex).hide();
			$(".order_recommend").eq(recommendIndex + 1).show();
		},
		complete () {
			$(".recommend_name").eq(recommendIndex).fadeIn(500);
		}
	})
}

function recommendMinus() {
	anime({
		targets: document.getElementsByClassName("order_recommend")[recommendIndex + 2],
		width: [{
				value: "35%",
				duration: 0
			},
			{
				value: 0,
				duration: 500
			}
		],
		height: [{
				value: "80px",
				duration: 0
			},
			{
				value: 0,
				duration: 500
			}
		],
		marginLeft: [{
				value: "3%",
				duration: 0
			},
			{
				value: "0",
				duration: 500
			}
		],
		marginRight: [{
				value: "7%",
				duration: 0
			},
			{
				value: "0",
				duration: 500
			}
		],
		borderRadius: 10,
		duration: 500,
		loop: false,
		easing: 'easeInOutSine',
		begin () {
			$(".recommend_name").eq(recommendIndex + 1).hide();
		},
		complete () {
			$(".order_recommend").eq(recommendIndex + 2).hide();
		}
	})
	anime({
		targets: document.getElementsByClassName("order_recommend")[recommendIndex + 1],
		width: [{
				value: "30%",
				duration: 0
			},
			{
				value: "25%",
				duration: 500
			}
		],
		height: [{
				value: "400px",
				duration: 0
			},
			{
				value: "80px",
				duration: 500
			}
		],
		marginLeft: [{
				value: "0",
				duration: 0
			},
			{
				value: "3%",
				duration: 500
			}
		],
		marginRight: [{
				value: "0",
				duration: 0
			},
			{
				value: "7%",
				duration: 500
			}
		],
		rotate: 0,
		borderRadius: 10,
		duration: 500,
		loop: false,
		easing: 'easeInOutSine',
		begin () {
			$(".recommend_intro").eq(recommendIndex).slideUp(500);
		}
	})
	anime({
		targets: document.getElementsByClassName("order_recommend")[recommendIndex],
		width: [{
				value: "25%",
				duration: 0
			},
			{
				value: "30%",
				duration: 500
			}
		],
		height: [{
				value: "80px",
				duration: 0
			},
			{
				value: "400px",
				duration: 500
			}
		],
		marginLeft: [{
				value: "3%",
				duration: 0
			},
			{
				value: "0",
				duration: 500
			}
		],
		marginRight: [{
				value: "7%",
				duration: 0
			},
			{
				value: "0",
				duration: 500
			}
		],
		rotate: 0,
		borderRadius: 10,
		duration: 500,
		loop: false,
		easing: 'easeInOutSine',
		begin () {
			$(".recommend_intro").eq(recommendIndex - 1).hide(1);
		},
		complete () {
			$(".recommend_intro").eq(recommendIndex - 1).slideDown(1000);
		}
	})
	anime({
		targets: document.getElementsByClassName("order_recommend")[recommendIndex - 1],
		width: [{
				value: "0",
				duration: 0
			},
			{
				value: "25%",
				duration: 500
			}
		],
		height: [{
				value: "0",
				duration: 0
			},
			{
				value: "80px",
				duration: 500
			}
		],
		marginLeft: [{
				value: "0",
				duration: 0
			},
			{
				value: "7%",
				duration: 500
			}
		],
		marginRight: [{
				value: "0",
				duration: 0
			},
			{
				value: "3%",
				duration: 500
			}
		],
		rotate: 0,
		borderRadius: 10,
		duration: 500,
		loop: false,
		easing: 'easeInOutSine',
		begin () {
			$(".order_recommend").eq(recommendIndex - 1).show();
			$(".recommend_intro").eq(recommendIndex - 2).hide();
			$(".recommend_name").eq(recommendIndex - 2).fadeOut(1);
		},
		complete () {
			$(".recommend_name").eq(recommendIndex - 2).fadeIn(500);
		}
	})
}

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

function cityAnime() {
	anime({
		targets: ".city",
		opacity: [0, 1],
		duration: 1000,
		loop: 1,
		easing: 'easeInOutSine'
	})
	anime({
		targets: ".city_title",
		width: [{
				value: "50%",
				delay: 500,
				duration: 0
			},
			{
				value: "100%",
				duration: 1000
			}
		],
		duration: 1000,
		loop: 1,
		easing: 'easeInOutSine'
	})
	anime({
		targets: ".city_choose",
		width: [{
				value: "100%",
				delay: 500,
				duration: 0
			},
			{
				value: "70%",
				duration: 1000
			}
		],
		duration: 1000,
		loop: 1,
		easing: 'easeInOutSine'
	})
	anime({
		targets: ".city_sub",
		width: [{
				value: "5%",
				delay: 500,
				duration: 0
			},
			{
				value: "100%",
				duration: 1000
			}
		],
		duration: 1000,
		loop: 1,
		easing: 'easeInOutSine'
	})
}
/*
 * 选择困难区域动画
 */
function recommendAnime() {
	anime({
		targets: document.getElementsByClassName("recommend_title")[0].getElementsByTagName("span")[0],
		color: [{
				value: "#535353",
				duration: 100
			},
			{
				value: "#cd3333",
				duration: 900
			}
		],
		fontSize: [{
				value: "1px",
				duration: 0
			},
			{
				value: "48px",
				duration: 2000
			}
		],
		duration: 2000,
		loop: 1,
		easing: 'easeInOutSine',
		update: function () {
			$(".recommend_title").css("opacity",1);
			$(".recommend_title span").eq(0).show();
		},
		complete: function () {
			$(".recommend_title span").eq(0).hide();
			$(".recommend_title span").eq(1).show();
		}
	})
	anime({
		targets: document.getElementsByClassName("recommend_title")[0].getElementsByTagName("span")[1],
		color: [{
				value: "#535353",
				delay: 2500,
				duration: 0
			},
			{
				value: "#8DB6CD",
				duration: 1000
			}
		],
		duration: 1000,
		loop: 1,
		easing: 'easeInOutSine'
	})
	anime({
		targets: ".recommend_area",
		color: [{
				value: "#535353",
				delay: 3500,
				duration: 0
			},
			{
				value: "#8DB6CD",
				duration: 1000
			}
		],
		duration: 1000,
		loop: 1,
		easing: 'easeInOutSine',
		update: function () {
			$(".recommend_area").delay(3500).animate({"opacity": 1});
			$(".ctrl_recommend").delay(3500).animate({"opacity": 1});
		}
	})
}
