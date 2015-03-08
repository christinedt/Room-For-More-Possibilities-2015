
// Mini Project Nav

// $('.process-img-1').on("mouseover", function(){
// 	$(this).animate({
// 		top: "10%",
// 		left: "10%",
// 		width: "100%"
// 	});
// });

// $('.process-img-1').on("mouseout", function(){
// 	$(this).animate({
// 		top: "0",
// 		left: "0",
// 		width: "98%"
// 	});
// });


// Heart Nav

// $( ".nav-response" ).hover(function(){
// 	// $( ".nav-response" ).show();
//   $('.nav-response .nav-title').slideToggle('slow');
//     // Animation complete.
//   });

// $( ".nav-response" ).hover(function(){
// 	$( ".heart-nav" ).toggleClass('no-display');
    
//   });


// Page Transition Delay

$("#delayTransition").click(function( e ){
  e.preventDefault();

  $(".desktop").removeClass('main-left');
  $(".desktop").addClass('main-right');

  setTimeout(function() {
    window.location = $("#delayTransition").attr('href');
  }, 350);

});

$("#delayTransitionThoughts").click(function( e ){
  e.preventDefault();

  $("#thought-img").removeClass('half-right');
  $("#thought-img").addClass('half-left');

  setTimeout(function() {
    window.location = $("#delayTransitionThoughts").attr('href');
  }, 180);

});


// Title Bot Rollovers

$( "#people-rollover" ).mouseover(function(){
  $( "#people-rollover-img" ).show();
  });

$( "#people-rollover" ).mouseout(function(){
  $( "#people-rollover-img" ).hide();
  });

$( "#process-rollover" ).mouseover(function(){
  $( "#process-rollover-img" ).show();
  });

$( "#process-rollover" ).mouseout(function(){
  $( "#process-rollover-img" ).hide();
  });

$( "#thoughts-rollover" ).mouseover(function(){
  $( "#thoughts-rollover-img" ).show();
  });

$( "#thoughts-rollover" ).mouseout(function(){
  $( "#thoughts-rollover-img" ).hide();
  });

// Fade Out

$( ".hamburger-nav" ).mousedown(function(){
  $( ".desktop" ).fadeOut();
    // Animation complete.
  });

$( ".hamburger-nav" ).mousedown(function(){
  $( ".mobile" ).fadeOut();
    // Animation complete.
  });

// Nav Left

$(".hamburger-nav").mouseover(function(){
    $(".hamburger-nav").animate({margin: '0 5px 0 0'});
});

$(".hamburger-nav").mouseout(function(){
    $(".hamburger-nav").animate({margin: '0%'});
});


// Front Page

	// 3D Pizza Pen
$( ".front-page-img-1" ).mouseover(function(){
	$('#front-page-text-1').fadeIn('200');
  });

$( ".front-page-img-1" ).mouseout(function(){
	$( "#front-page-text-1" ).fadeOut('100');
  });

	// Sound Capsule
$( ".front-page-img-2" ).mouseover(function(){
	$("#front-page-text-2").fadeIn('200');
  });

$( ".front-page-img-2" ).mouseout(function(){
	$( "#front-page-text-2" ).fadeOut('100');
  });

	// Lucky Stars
$( ".front-page-img-3" ).mouseover(function(){
	$("#front-page-text-3").fadeIn('200');
  });

$( ".front-page-img-3" ).mouseout(function(){
	$( "#front-page-text-3" ).fadeOut('100');
  });

	// Vemoji
$( ".front-page-img-4" ).mouseover(function(){
	$("#front-page-text-4").fadeIn('200');
  });

$( ".front-page-img-4" ).mouseout(function(){
	$( "#front-page-text-4" ).fadeOut('100');
  });

	// Omnipresence
$( ".front-page-img-5" ).mouseover(function(){
	$("#front-page-text-5").fadeIn('200');
  });

$( ".front-page-img-5" ).mouseout(function(){
	$( "#front-page-text-5" ).fadeOut('100');
  });

	// Slice Sourcing
$( ".front-page-img-6" ).mouseover(function(){
	$("#front-page-text-6").fadeIn('200');
  });

$( ".front-page-img-6" ).mouseout(function(){
	$( "#front-page-text-6" ).fadeOut('100');
  });

	// The Imagination of Things
$( ".front-page-img-7" ).mouseover(function(){
	$("#front-page-text-7").fadeIn('200');
  });

$( ".front-page-img-7" ).mouseout(function(){
	$( "#front-page-text-7" ).fadeOut('100');
  });

	// Self-Documenting Objects
$( ".front-page-img-8" ).mouseover(function(){
	$("#front-page-text-8").fadeIn('200');
  });

$( ".front-page-img-8" ).mouseout(function(){
	$( "#front-page-text-8" ).fadeOut('100');
  });

	// Digital Disguise
$( ".front-page-img-9" ).mouseover(function(){
	$("#front-page-text-9").fadeIn('200');
  });

$( ".front-page-img-9" ).mouseout(function(){
	$( "#front-page-text-9" ).fadeOut('100');
  });



// Process Page

$( ".process-title" ).mouseover(function(e){
  var centerTextId;

  console.log($(".process-title"));

  $( ".process-title" ).css('opacity', '0.3');
  $( e.target ).fadeTo( '200', 1 );

  centerTextId = $( e.target ).attr('id');
  centerTextId = centerTextId.slice(0,-6);
  console.log(centerTextId);
  $( ".center-text").hide();
  $( "#" + centerTextId ).fadeIn('200');
});

// Thoughts Page Hover

$(function () {
    $('.thoughts-button').mouseover( function () {
        $(this).attr('src', $(this).attr('src').replace(/thoughts-button.gif/, 'thoughts-button-hover.jpg') );
    });
});

$(function () {
    $('.thoughts-button').mouseout( function () {
        $(this).attr('src', $(this).attr('src').replace(/thoughts-button-hover.jpg/, 'thoughts-button.gif') );
    });
});

$(function () {
    $('.thoughts-button').mousedown( function () {
        $(this).attr('src', $(this).attr('src').replace(/thoughts-button-hover.jpg/, 'thoughts-button-click.jpg') );
    });
});

// Thought Page Random Links

function randomlinks(){
var myrandom=Math.round(Math.random()*33)
var links=new Array()
links[0]="thought-01.html"
links[1]="thought-02.html"
links[2]="thought-03.html"
links[3]="thought-04.html"
links[4]="thought-05.html"
links[5]="thought-06.html"
links[6]="thought-07.html"
links[7]="thought-08.html"
links[8]="thought-09.html"
links[9]="thought-10.html"
links[10]="thought-11.html"
links[11]="thought-12.html"
links[12]="thought-13.html"
links[13]="thought-14.html"
links[14]="thought-15.html"
links[15]="thought-16.html"
links[16]="thought-17.html"
links[17]="thought-18.html"
links[18]="thought-19.html"
links[19]="thought-20.html"
links[20]="thought-21.html"
links[21]="thought-22.html"
links[22]="thought-23.html"
links[23]="thought-24.html"
links[24]="thought-25.html"
links[25]="thought-26.html"
links[26]="thought-27.html"
links[27]="thought-28.html"
links[28]="thought-29.html"
links[29]="thought-30.html"
links[30]="thought-31.html"
links[31]="thought-32.html"
links[32]="thought-33.html"
links[33]="thought-34.html"

window.location=links[myrandom]
}
