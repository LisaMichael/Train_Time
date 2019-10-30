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


}); // end of document.on(ready)