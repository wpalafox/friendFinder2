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
      scores: [3, 4, 2, 2, 5, 3, 4, 1, 4, 1]
     
   },   
   { 
   	friendName: "Will Smith",
   	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
      scores: [5, 4, 4, 4, 1, 1, 3, 2, 2, 4]
   
   }, 
     { 
   	friendName: "Philip Banks",
   	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
      scores: [3, 4, 2, 2, 3, 5, 4, 3, 5, 1]
   
   }, 
     { 
   	friendName: "Vivian Banks",
   	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
      scores: [2, 2, 4, 1, 2, 3, 5, 4, 5, 1]
     
   }, 
     { 
 	friendName: "Hilary Banks",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: [3, 5, 1, 3, 2, 2, 3, 1, 1, 1]
   
   }, 
     { 
 	friendName: "Ashley Banks",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: [3, 2, 3, 4, 2, 2, 4, 1, 2, 1]
   
   }, 
     { 
 	friendName: "Nicky Banks",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: [2, 4, 2, 3, 1, 3, 1, 1, 1, 1]
   
   }, 
     { 
 	friendName: "Geoffrey Barbara Butler",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: [4, 1, 5, 1, 3, 3, 2, 5, 1, 1]
   
   }, 
     { 
 	friendName: "Jazz",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
    scores: [4, 2, 3, 5, 1, 1, 2, 2, 1, 5]
   
   }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userArray;
