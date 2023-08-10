const trips = [

    {
      "name": "Tropical Discovery Cruise",
      "price": 20000,
      "description": "Explore remote islands, snorkel in clear waters, and savor authentic cuisine on our Tropical Discovery Cruise. Immerse yourself in the beauty and culture of exotic destinations, perfect for nature enthusiasts and adventure seekers.",
      "image": "tropical-discovery.jpg"
    },
  
    {
      "name": "Fjords Expedition Cruise",
      "price": 40000,
      "description": "Journey through majestic fjords, witness the Northern Lights, and experience coastal life on our Fjords Expedition Cruise. Luxurious accommodations and guided village visits offer a serene escape into breathtaking natural landscapes.",
      "image": "fjords.jpg"
    },
  
    {
      "name": "Culinary River Voyage",
      "price": 15000,
      "description": "Embark on a flavorsome adventure with our Culinary River Voyage, featuring gourmet dining, wine tastings, and local market explorations. Savor the blend of cultural immersion and culinary excellence as you cruise along picturesque riverbanks.",
      "image": "culinary.jpg"
    },
  
    {
      "name": "Historical Heritage Cruise",
      "price": 30000,
      "description": "Uncover the past on our Historical Heritage Cruise, visiting ancient ports and landmarks with expert guides. Delve into the world's historical wonders, from ancient ruins to UNESCO sites, for a captivating and enlightening journey.",
      "image": "heritage.jpg"
    }

  ];




// --------------------------------------------
//When the documents load

$(document).ready(function(){

 // -----------------------------------------
    // trips page
    
    console.log([trips]);

    loadTrips();

}); 




// --------------------------------------------
// load Trips

function loadTrips(){

  // loop that runs through the array information
  for (let i = 0; i < trips.length; i++){
    const trip = trips[i];
    
    console.log(trip);

    // select trip container and insert array content
    $("#tripsContainer").append($("#tripsTemplate").html());

    let currentChild = $("#tripsContainer").children().eq(i+1);

    $(currentChild).find(".card-img").attr('src','assets/' + trip.image);
    $(currentChild).find("#titleText").text(trip.name);
    $(currentChild).find("#descriptionText").text(trip.description);
    $(currentChild).find("#priceText").text('R' + trip.price);

    // hide the description text
    $(currentChild).find("#descriptionText").hide();

    }
};


// --------------------------------------------
// when the cards are clicked
$("#tripsContainer").on ('click', '.card', function(){

  // toggle content
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();

  // resize image
  $(this).find(".card-img").toggleClass("small");
  
  // text opacity
  $(this).find("#descriptionText").toggleClass("clear");
  $(this).find("#priceText").toggleClass("opaque");

});