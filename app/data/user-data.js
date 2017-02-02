// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var userArray = [
   { 
   	friendName: "Carlton Banks",
   	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
      scores: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
     
   },   
   { 
   	friendName: "Will Smith",
   	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
      scores: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
   
   }, 
     { 
   	friendName: "Philip Banks",
   	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
      scores: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
   
   }, 
     { 
   	friendName: "Vivian Banks",
   	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
      scores: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
     
   }, 
     { 
 	friendName: "Hilary Banks",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
   
   }, 
     { 
 	friendName: "Ashley Banks",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
   
   }, 
     { 
 	friendName: "Nicky Banks",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
   
   }, 
     { 
 	friendName: "Geoffrey Barbara Butler",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
   
   }, 
     { 
 	friendName: "Jazz",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
   
   }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userArray;
