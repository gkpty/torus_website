// Initialize and add the map
function initMap() {
  // The location of your shop
  var myshop = {lat: 8.986309, lng: -79.519941};
  // The map, centered at your shop
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: myshop});
  // The marker, positioned at your shop
  var marker = new google.maps.Marker({position: myshop, map: map});
}

//HEADER SCROLL EFFECT
var regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/,
panama = document.getElementById("panama"),
mesaLayers = panama.querySelectorAll("path"),
SVGoffsettop = panama.getBoundingClientRect().top,
vertHeight = panama.getBoundingClientRect().height,
sun = document.getElementById("sun");
stars = document.getElementById("stars");
windows = document.getElementById("windows");
bground = document.getElementById("back-ground");
ocean = document.getElementById("ocean");
skybottom = document.getElementById("sky_bottom");
stars.style.opacity = .1;
windows.style.opacity = .3;
panama.style.background = "hsl(248, 100%, 60%)";

function scrollHandler() {
    if (window.scrollY < vertHeight) {
    Array.prototype.forEach.call(mesaLayers, function(layer) { 
      var layerFill = layer.getAttribute("fill"),
      vertRoll = Math.abs(window.scrollY - vertHeight) / vertHeight;
      /*
      hslComponents = layerFill.match(regex).slice(1),
      newHSL = parseFloat(hslComponents[2]) * vertRoll;
      layer.style.fill = "hsl(" + hslComponents[0] +", "+ hslComponents[1] + "%, " +  newHSL + "%)";
      */
      var bei = 50 * vertRoll;
      if(bei < 38){
        bei = 38;
      }
      panama.style.background = "hsl(248, " + 100 * vertRoll + "%, " + bei + "%)";
      sun.style.transform = "translate3d(0," + window.scrollY + "px, 0)";
      stars.style.opacity = .1 + ( window.scrollY / 40 );
      windows.style.opacity = .3 + ( window.scrollY / 80 );
      ocean.style.opacity = 1 - ( window.scrollY / 200 );
      skybottom.style.opacity = 1 - ( window.scrollY / 250 );
      sun.style.opacity = 1 - ( window.scrollY / 35 );
    });
  }
}

window.onscroll = function() {
    window.requestAnimationFrame(scrollHandler);
}