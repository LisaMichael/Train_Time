$(document).ready(function () {

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


  // button for adding train schedule
  $('#add-train-btn').on('click', function () {

    event.preventDefault();

    // Grab user input 

    let tmptrainName = $('#train-name-input').val().trim();
    let tmpdestination = $('#destination-input').val().trim();
    let tmpfirstTrainTime = $('#firstTrainTime-input').val().trim();
    // let firstTrainTime = $('#firstTrainTime').moment(Date()).format('H:mm');
    // var frequency = moment().diff(startDate, 'months'); 
    let tmpfrequency = $('#frequency-input').val().trim();
    // console.log(moment()); 
    // console.log(moment().diff(startDate, 'months'));  


    // create temporary object for holding train data
    let tempTrain = {
      trainName: tmptrainName,
      destination: tmpdestination,
      firstTrainTime: tmpfirstTrainTime,
      frequency: tmpfrequency,

    };  // end of newTrain object

   

    database.ref().push(tempTrain)

     // clear all of the text boxes 
     $("#train-name-input").val("");
     $("#destination-input").val("");
     $("#firstTrainTime-input").val("");
     $("#frequency-input").val("");


  }); // end of submit form 


//create a firebase event for adding employee to db and row in html

  database.ref().on("child_added", function (childSnapshot) {
    console.log("Inside child added method");
    //console.log(childSnapshot.val());
    var t = childSnapshot.val();
    console.log("t: "+JSON.stringify(t));

    // store everything into a variable
    let tmptrainName = childSnapshot.val().trainName;
    let tmpdestination = childSnapshot.val().destination;
    let tmpfirstTrainTime = childSnapshot.val().firstTrainTime;
    let tmpfrequency = childSnapshot.val().frequency;
    // let rate = childSnapshot.val().rate;
    // let billed = parseInt(childSnapshot.val().billed);

    console.log(childSnapshot.val().trainName);
    //  console.log(destination);
    //  console.log(firstTrainTime);
    // console.log(rate);

//prettify the traintime
// var tmpfirstTrainTimePretty = moment.unix(tmpfirstTrainTime).format(HH:mm);

//create a new row 

    // let newRow = $('<tr>').append(
    //   $("<td>").text(tmptrainName),
    //   $("<td>").text(tmpdestination),
    //   $("<td>").text(tmpfirstTrainTime),
    //   $("<td>").text(tmpfrequency),
    // );

  var newRow = "<tr><td>"+tmptrainName+"</td><td>"+tmpdestination+"</td><td>"+tmpfirstTrainTime+"</td><td>"+tmpfrequency+"</td></tr>";

    // Adds new employee to the DOM

    console.log(newRow);
    $("#train-table > tbody").append(newRow);
   // $('#train-table').append(newRow);



    // $("#name").text(name);
    // $("#role").text(role);
    // $("#startDate").text(startDate);
    // $("#rate").text(rate);

    // Handle the errors
  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


  // });

}); // end of document.on(ready)