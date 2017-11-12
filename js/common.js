$(document).ready(
	function(){
		$(window).scroll(function () {
			if ($(window).scrollTop() == 0) {
				$(".head-wrap").css({"background-color":"#fff","opacity":"1"},0);
				$("#logo").css("color","#222");
			}
			else{
				$(".head-wrap").css({"background-color":"#eee","opacity":"0.8"},0);
				$("#logo").css("color","#888");
			}
		});


		$(".box").hover(
			function(){
				$(this).animate({width:"30.5%",height:"252px",left:"-=3px",top:"-=3px"},300);
				$(this).css("box-shadow"," 0 4px 4px 1px #ccc");
			},
			function(){
				$(this).animate({width:"30%",height:"250px",left:"+=3px",top:"+=3px",BoxShadowSpread:"1px"},300);
				$(this).css("box-shadow"," 0 3px 3px 1px #ccc");
			}
		);		
	}
);
