const arrTrips = [

    {
      name: "Tropical Discovery Cruise",
      price: 20000,
      description: "Explore remote islands, snorkel in clear waters, and savor authentic cuisine on our Tropical Discovery Cruise. Immerse yourself in the beauty and culture of exotic destinations, perfect for nature enthusiasts and adventure seekers.",
      image: "tropical-discovery.jpg",
      duration: "long",
      destinations: "multi",
      round: "no",
      cheapest: "yes",
      code: "TDC"
    },
  
    {
      name: "Fjords Expedition Cruise",
      price: 40000,
      description: "Journey through majestic fjords, witness the Northern Lights, and experience coastal life on our Fjords Expedition Cruise. Luxurious accommodations and guided village visits offer a serene escape into breathtaking natural landscapes.",
      image: "fjords.jpg",
      duration: "long",
      destinations: "single",
      round: "yes",
      cheapest: "no",
      code: "FEC"
    },
  
    {
      name: "Culinary River Voyage",
      price: 15000,
      description: "Embark on a flavorsome adventure with our Culinary River Voyage, featuring gourmet dining, wine tastings, and local market explorations. Savor the blend of cultural immersion and culinary excellence as you cruise along picturesque riverbanks.",
      image: "culinary.jpg",
      duration: "short",
      destinations: "single",
      round: "yes",
      cheapest: "yes",
      code: "CRV"
    },
  
    {
      name: "Historical Heritage Cruise",
      price: 30000,
      description: "Uncover the past on our Historical Heritage Cruise, visiting ancient ports and landmarks with expert guides. Delve into the world's historical wonders, from ancient ruins to UNESCO sites, for a captivating and enlightening journey.",
      image: "heritage.jpg",
      duration: "short",
      destinations: "multi",
      round: "no",
      cheapest: "no",
      code: "HHC"
    }

  ];


  let appliedFilter = "";


// --------------------------------------------
//When the documents load

$(document).ready(function(){

 // -----------------------------------------
  // trips page
  
  filterTrips();

}); 




// --------------------------------------------
// load Trips

function loadTrips(tripsToShow){

  $("#tripsContainer").empty();

  // loop that runs through the array information
  for (let i = 0; i < tripsToShow.length; i++){
    const trip = tripsToShow[i];
    

    // select trip container and insert array content
    $("#tripsContainer").append($("#tripsTemplate").html());

    let currentChild = $("#tripsContainer").children().eq(i);

    $(currentChild).find(".card-img").attr('src','assets/' + trip.image);
    $(currentChild).find("#titleText").text(trip.name);
    $(currentChild).find("#descriptionText").text(trip.description);
    $(currentChild).find("#priceText").text('R' + trip.price);

    // hide the description text
    $(currentChild).find("#descriptionText").hide();

    }
};



// --------------------------------------------
// when the filters are clicked

$("input[name='filterRadio']").click(function(){
  appliedFilter = $(this).attr('value');

  filterTrips();

});


function filterTrips() {
  
  let filteredArrTrips = [];

  console.log(appliedFilter);

  //filter trips

  
  if(appliedFilter == 'short'){
    filteredArrTrips = arrTrips.filter(trip => trip.duration == appliedFilter);
  }
  else if(appliedFilter == 'long'){
    filteredArrTrips = arrTrips.filter(trip => trip.duration == appliedFilter);
  }
  else if (appliedFilter == 'single'){
    filteredArrTrips = arrTrips.filter(trip => trip.destinations == appliedFilter);
  }
  else if (appliedFilter == 'multi'){
    filteredArrTrips = arrTrips.filter(trip => trip.destinations == appliedFilter);
  }
  else if(appliedFilter == 'round'){
    filteredArrTrips = arrTrips.filter(trip => trip.round == 'yes');
  }
  else if(appliedFilter == "cheap"){
    filteredArrTrips = arrTrips.filter(trip => trip.cheapest == 'yes');
  }
  else {
    filteredArrTrips = arrTrips;
  }

  console.log(filteredArrTrips);

  loadTrips(filteredArrTrips);

};

// --------------------------------------------
// when the cards are clicked

$("#tripsContainer").on ('click', '.card', function(){

  // toggle content
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();
  $(this).find(".trip-btn").toggle();
  

  // resize image
  $(this).find(".card-img").toggleClass("small");

  // text opacity
  $(this).find("#trip-btn").toggleClass("clear");
  $(this).find("#descriptionText").toggleClass("clear");
  $(this).find("#priceText").toggleClass("opaque");

});




let ticketData = [];

function addTicket (){

    let quantity = 1;
    let cost = trip.price;
    let tripCode = trip.code;
    let tripName = trip.name

};

ticketData.push({

  tripName:  tripName,
  tripQuantity: quantity,
  tripCode: tripCode,
  tripCost: cost

});

console.log(ticketData);




    

