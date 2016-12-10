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

 


  // ---------------------------------------------------------------------------



  //API post request to submit data user-data.js
  app.post("/api/users", function(req, res){
      //Set of instructions to find the closest user
      
          
          var min_compat=50;
          var index=0;
          
          for(i = 0; i < userData.length; i++){ 
            
            var sum = 0;
            for(k = 0; k < 10; k++){

                sum += Math.abs(parseInt(req.body.scores[k])-parseInt(userData[i].scores[k]));

            } 
            
            if(sum<min_compat){
              min_compat=sum;
              index=i;
            }

          }

          console.log("person that is most compatible is "+i);
          console.log(" compatability rating:"+(50-min_compat));


       




       //find best match 

         
        //userData.push(req.body);
         //res.json(true);








         //console.log(req.body);
        //API post request to submit data into the friends.js 

});

  



  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    userData = [];


    
  });
};
