document.on("ready", function() {

    let config = {

      
            apiKey: "AIzaSyDGwT6UnIscWMnVqa54JFT0Z3oso6JJsbI",
            authDomain: "traintime-ffb49.firebaseapp.com",
            databaseURL: "https://traintime-ffb49.firebaseio.com",
            projectId: "traintime-ffb49",
            storageBucket: "traintime-ffb49.appspot.com",
            messagingSenderId: "96272866734",
            appId: "1:96272866734:web:8c19e1459b8ff2cca6bc3f",
            measurementId: "G-VDS17C1TMD"
          
    }

    firebase.initializeApp(config);
  var database = firebase.database();

  $('submit').on('click', function() {
    var trainName = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var time = $('#firstTrainTime').val().trim();
    // var frequency = moment().diff(startDate, 'months'); 
    let frequency = $('frequency').val().trim();
    // console.log(moment()); 
    // console.log(moment().diff(startDate, 'months'));  
    // console.log(worked); 
 
database.ref('/newEmployee').push(newEmp)

var newTrain = {
    trainName: trainName,
    destination: destination, 
    time: startDate,
    frequency: frequency,
    
  };
  });

}); // end of document.on(ready)