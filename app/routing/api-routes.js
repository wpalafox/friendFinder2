// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var userData = require("../data/user-data.js");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------


//When the user navigate to /api/users it will responed with the json userdata 
  app.get("/api/users", function(req, res) {
    
    res.json(userData);
  
  });

 

  //API post request to submit data user-data.js
  app.post("/api/users", function(req, res){

        console.log("here");
      
      //Set of instructions to find the closest user
         var selectionArray = [];
            for(i = 0; i < userData.length; i++){ 
              var sum = 0;
              for(k = 0; k < 10; k++){
                
                sum += Math.abs(parseInt(req.body.scores[k])-parseInt(userData[i].scores[k]));

              } 
              selectionArray.push(parseInt(sum));

              
            }
         console.log(selectionArray);
         
         //var min difference
         /*
         var minDif = Math.min.apply(null, selectionArray);
         var theSelection = selectionArray.indexOf(minDif);
         
         res.json(userData[theSelection]);

          userData.push(req.body);
          */
          return true;
    });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    userData = [];


    
  });
};
