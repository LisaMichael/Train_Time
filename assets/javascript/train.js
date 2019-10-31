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

  $('#submitForm').on('click', function() {

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

  console.log("can you seee this ?")


dataRef.ref().on("child_added", function (childSnapshot){
	
	
});

}); // end of document.on(ready)