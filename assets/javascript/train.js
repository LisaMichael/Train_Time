$(document).ready( function() {

  var firebaseConfig = {
    apiKey: "AIzaSyC4N5iN40dKR8LNLwBw63QawtIxptSQQec",
    authDomain: "lisa-test-oct24.firebaseapp.com",
    databaseURL: "https://lisa-test-oct24.firebaseio.com",
    projectId: "lisa-test-oct24",
    storageBucket: "lisa-test-oct24.appspot.com",
    messagingSenderId: "88210040314",
    appId: "1:88210040314:web:0f83a6c9e1f5f9032a3043",
    measurementId: "G-3WC6LSLK5T"
  };

    firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  $('#submit').on('click', function() {

    event.preventDefault();

    let trainName = $('#trainName').val().trim();
    let destination = $('#destination').val().trim();
    var firstTrainTime = $('#firstTrainTime').val().trim();
    // let firstTrainTime = $('#firstTrainTime').moment(Date()).format('H:mm');
    // var frequency = moment().diff(startDate, 'months'); 
    let frequency = $('#frequency').val().trim();
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
    // console.log(snapshot.val());
    let trainName = childSnapshot.val().trainName;
    let destination = childSnapshot.val().destination;
    let firstTrainTime = childSnapshot.val().firstTrainTime;
    let frequency = childSnapshot.val().frequency;
    // let rate = childSnapshot.val().rate;
    // let billed = parseInt(childSnapshot.val().billed);

     console.log(childSnapshot.val().trainName);
     console.log(destination);
     console.log(firstTrainTime);
    // console.log(rate);
  
    // // // Change the HTML to reflect
    var tBody = $('#traintable');
    var tRow = $('<tr>');
    var trainNameTd = $('<td id="trainName">').text(trainName);
    var destinationTd = $('<td id="destination">').text(destination);
    var firstTrainTimeTd = $('<td id="firstTrainTime">').text(firstTrainTime);
    var frequencyTd = $('<td id="frequency">').text(frequency);
    // var rateTd = $('<td class="rate">').text('$' + rate);
    // var billedTd = $('<td>').text('$' + billed);

    // Adds new employee to the DOM
    tRow.append(trainNameTd, destinationTd, firstTrainTimeTd, frequencyTd);
    tBody.append(tRow);



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