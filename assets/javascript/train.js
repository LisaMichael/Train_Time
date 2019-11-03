$(document).ready( function() {

  // var firebaseConfig = {
  //   apiKey: "AIzaSyC4N5iN40dKR8LNLwBw63QawtIxptSQQec",
  //   authDomain: "lisa-test-oct24.firebaseapp.com",
  //   databaseURL: "https://lisa-test-oct24.firebaseio.com",
  //   projectId: "lisa-test-oct24",
  //   storageBucket: "lisa-test-oct24.appspot.com",
  //   messagingSenderId: "88210040314",
  //   appId: "1:88210040314:web:0f83a6c9e1f5f9032a3043",
  //   measurementId: "G-3WC6LSLK5T"
  // };


  var firebaseConfig = {
    apiKey: "AIzaSyDGwT6UnIscWMnVqa54JFT0Z3oso6JJsbI",
    authDomain: "traintime-ffb49.firebaseapp.com",
    databaseURL: "https://traintime-ffb49.firebaseio.com",
    projectId: "traintime-ffb49",
    storageBucket: "traintime-ffb49.appspot.com",
    messagingSenderId: "96272866734",
    appId: "1:96272866734:web:fc99e51f86ff8da6a6bc3f",
    measurementId: "G-C2YD3HTPKB"
  };

    firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  $('#add-train-btn').on('click', function() {

    event.preventDefault();

    let trainName = $('#train-name-input').val().trim();
    let destination = $('#destination-input').val().trim();
    let firstTrainTime = $('#firstTrainTime-input').val().trim();
    // let firstTrainTime = $('#firstTrainTime').moment(Date()).format('H:mm');
    // var frequency = moment().diff(startDate, 'months'); 
    let frequency = $('#frequency-input').val().trim();
    // console.log(moment()); 
    // console.log(moment().diff(startDate, 'months'));  
    
 
    

let newTrain = {

  
    trainName: trainName,
    destination: destination, 
    firstTrainTime: firstTrainTime,
    frequency: frequency,
    
  };  // end of newTrain object

  // clear all of the text boxes 

$(".form-control").val("");


database.ref('/newTrain').push(newTrain)


  }); // end of submit form 

  


// dataRef.ref().on("child_added", function (childSnapshot){

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    // store everything into a variable
    let trName = childSnapshot.val().trainName;
    let dest = childSnapshot.val().destination;
    let fTrainTime = childSnapshot.val().firstTrainTime;
    let freq = childSnapshot.val().frequency;
    // let rate = childSnapshot.val().rate;
    // let billed = parseInt(childSnapshot.val().billed);

     console.log(trName);
    //  console.log(destination);
    //  console.log(firstTrainTime);
    // console.log(rate);
  
    // // // Change the HTML to reflect

    // let tBody = $('#traintable');
    // let newRow = $('<tr>');
    // var trainNameTd = $('<td id="trainName">').text(trainName);
    // var destinationTd = $('<td id="destination">').text(destination);
    // var firstTrainTimeTd = $('<td id="firstTrainTime">').text(firstTrainTime);
    // var frequencyTd = $('<td id="frequency">').text(frequency);
    // var rateTd = $('<td class="rate">').text('$' + rate);
    // var billedTd = $('<td>').text('$' + billed);

     let newRow = $('<tr>');

    // Adds new employee to the DOM
    newRow.append(trName, dest, fTrainTime, freq);
    $('#train-table').append(newRow);



    // $("#name").text(name);
    // $("#role").text(role);
    // $("#startDate").text(startDate);
    // $("#rate").text(rate);
  
    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
	
	
// });

}); // end of document.on(ready)