//Intialze and add the map
function initMap() {
  //Your Location
  const loc = { lat: 12.894942869644218, lng: 77.74787570216935 };
  //Centered map on location
  const map = new google.maps.Map(document.querySelector('.map') 
  , {
    zoom: 14,
    center: loc
  });
  //The marker, positioned location
  const marker = new google.maps.Marker({ position: loc, map: map});  
}


//Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    this.document.querySelector('#navbar').getElementsByClassName.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').getElementsByClassName.opacity = 1;
  }
});


//Smooth Scrolling
$('#navbar a') .on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    ); 
  }
}); 