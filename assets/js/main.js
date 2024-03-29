
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  /**
   * Easy event listener function
   */

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }



  /**
   * Easy on scroll event listener 
   */
/*
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
*/

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */

  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
/*
      e.preventDefault()

*/
      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
/*
      scrollto(this.hash)
*/
    }
  }, true)

})()

/* When the user scrolls down 50px from the top of the document, resize the header's font size
 */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
    document.getElementById("header").style.background = "#023020"; /* "#7DCEA0"; */
  } else {
    document.getElementById("header").style.background = "transparent";
  }
} 

$(document).ready(function() {
    	$('.carousel').carousel({ interval: 3000 });
	$('.carousel').carousel({ pause: false });
});

/* Gallery
 */

$(function () {
	var filterList = {
		init: function () {
			$('.kasvu-gallery-grid').mixItUp({
				selectors: {
  			  target: '.kasvu-gallery',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: 'all' // show app tab on first load
    		}     
			});								
		}
	};
	// Run
	filterList.init();
});


