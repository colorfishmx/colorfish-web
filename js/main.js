Vue.component('feature',{
  props: [ 'feature' ],
  template: `
  <div class="col-xs-4 features3 mainfeatures3">
    <i>
      <img :src="feature.img" height="120" :alt="feature.alt">
    </i>
    <h2>{{ feature.title }}</h2>
    <p>{{ feature.desc }}</p>
  </div>
  `,
})


let app = new Vue({
  el: '#app',
  data: {
    url_facebook: 'https://www.facebook.com/Colorfish-1371619872930488/' ,
    url_twitter: 'https://twitter.com/colorfishmx',
    url_instagram: 'https://instagram.com/colorfishmx',
    url_dribbble: 'https://dribbble.com/',

    features: [
      {
        title: `Payment cards for employees`,
        desc: `Distribute virtual or plastic Pleo cards with custom predefined limits in just a few clicks.`,
        alt: `Diseño y Desarrollo web`,
        img: `img/f1.png`,
      },
      {
        title: `Diseño de identidad`,
        desc: `Distribute virtual or plastic Pleo cards with custom predefined limits in just a few clicks.`,
        alt: `Diseño de identidad`,
        img: `img/f1.png`,
      },
      {
        title: `Payment cards for employees`,
        desc: `Distribute virtual or plastic Pleo cards with custom predefined limits in just a few clicks.`,
        alt: `Diseño y Desarrollo web`,
        img: `img/f1.png`,
      },
    ],

  }
})



$(document).ready(function(){

  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});


  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);

  });

  //------------------------------------//
  //Wow Animation//
  //------------------------------------//
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();



});
