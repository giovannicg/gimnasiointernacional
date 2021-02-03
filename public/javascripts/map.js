let map;

var position = { lat: -0.1318983, lng: -78.5013948 }

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 17
  });
  var marker = new google.maps.Marker({position: position, map: map});
}
