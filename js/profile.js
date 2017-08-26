			var isScdSecShow = false;
			var isThdSecShow = false;
			var isFrthSecShow = false;

			disableScroll();

			$(window).scroll(function (event) {
			    var scroll = $(window).scrollTop();

			    if(isScdSecShow == false){
				    if(scroll > 260){
				    	 $(".scd-sec-right").animate({
				            
				    	 	opacity : '1',
				    	 	left : '0%'

				        },850);
				    	isScdSecShow = true
				    }
				}

				if(isThdSecShow == false){
				    if(scroll > 730){
				    	$(".thd-sec-left").animate({
				            
				    	 	opacity : '1',
				    	 	left : '0%'

				        },850);
				        isThdSecShow = true;
				    }   
				}

				if(isFrthSecShow == false){
				    if(scroll > 1200){
				    	$(".frth-sec-right").animate({
				            
				    	 	opacity : '1',
				    	 	left : '0%'

				        },850);
				        isFrthSecShow = true;
				    }  
				}

			});
		

			$(document).ready(function(){

				$("html,body").animate({scrollTop: 0}, 100);

				var chart = new Chartist.Pie('.ct-chart', {
				  series: [8.5, 1.5],
				  labels: [1, 2]
				}, {
				  donut: true,
				  donutWidth: 11,
				  showLabel: false
				});

				new Chartist.Pie('.ct-chart2', {
				  series: [8, 2],
				  labels: [1, 2]
				}, {
				  donut: true,
				  donutWidth: 11,
				  showLabel: false
				});

				new Chartist.Pie('.ct-chart3', {
				  series: [8, 2],
				  labels: [1, 2]
				}, {
				  donut: true,
				  donutWidth: 11,
				  showLabel: false
				});

				new Chartist.Pie('.ct-chart4', {
				  series: [7, 3],
				  labels: [1, 2]
				}, {
				  donut: true,
				  donutWidth: 11,
				  showLabel: false
				});

				new Chartist.Pie('.ct-chart5', {
				  series: [8.5, 1.5],
				  labels: [1, 2]
				}, {
				  donut: true,
				  donutWidth: 15,
				  showLabel: false
				});

				new Chartist.Pie('.ct-chart6', {
				  series: [5.5, 4.5],
				  labels: [1, 2]
				}, {
				  donut: true,
				  donutWidth: 9,
				  showLabel: false
				});

				new Chartist.Pie('.ct-chart7', {
				  series: [7, 3],
				  labels: [1, 2]
				}, {
				  donut: true,
				  donutWidth: 9,
				  showLabel: false
				});

				new Chartist.Pie('.ct-chart8', {
				  series: [6, 4],
				  labels: [1, 2]
				}, {
				  donut: true,
				  donutWidth: 9,
				  showLabel: false
				});

				new Chartist.Pie('.ct-chart9', {
				  series: [8, 2],
				  labels: [1, 2]
				}, {
				  donut: true,
				  donutWidth: 15,
				  showLabel: false
				});



			    $("#twitter-icon").on('click touchstart', function() {
			        //alert("icon was clicked.");
			        //window.location = "https://twitter.com/faqrulans";
			        window.open('https://twitter.com/faqrulans', '_blank');
			    });

			    $("#linkedin-icon").on('click touchstart', function() {
			        //alert("icon was clicked.");
			        //window.location = "https://twitter.com/faqrulans";
			        window.open('https://id.linkedin.com/in/faqrul-anshurulloh-320869130', '_blank');
			    });

			    $("#facebook-icon").on('click touchstart', function() {
			        //alert("icon was clicked.");
			        //window.location = "https://twitter.com/faqrulans";
			        window.open('https://www.facebook.com/faqrul.anshurulloh', '_blank');
			    });

			    $("#instagram-icon").on('click touchstart', function() {
			        //alert("icon was clicked.");
			        //window.location = "https://twitter.com/faqrulans";
			        window.open('https://www.instagram.com/faqrulans/', '_blank');
			    });

			    $(".loading-section").on('click touchstart', function() {
			        $(".loading-section").addClass("slideup");
			    });


			    setTimeout(function() {
					 $(".loader").fadeOut( "slow", function() {
					 	 $(".loading-section").addClass("slideup");
					 	 enableScroll();
					 });
					
				}, 1000);    
			});

			var keys = {37: 1, 38: 1, 39: 1, 40: 1};

			function preventDefault(e) {
			  e = e || window.event;
			  if (e.preventDefault)
			      e.preventDefault();
			  e.returnValue = false;  
			}

			function preventDefaultForScrollKeys(e) {
			    if (keys[e.keyCode]) {
			        preventDefault(e);
			        return false;
			    }
			}

			function disableScroll() {
			  if (window.addEventListener) // older FF
			      window.addEventListener('DOMMouseScroll', preventDefault, false);
			  window.onwheel = preventDefault; // modern standard
			  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
			  window.ontouchmove  = preventDefault; // mobile
			  document.onkeydown  = preventDefaultForScrollKeys;
			}

			function enableScroll() {
			    if (window.removeEventListener)
			        window.removeEventListener('DOMMouseScroll', preventDefault, false);
			    window.onmousewheel = document.onmousewheel = null; 
			    window.onwheel = null; 
			    window.ontouchmove = null;  
			    document.onkeydown = null;  
			}