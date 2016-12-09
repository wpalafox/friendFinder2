// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var tableArray = [
   { 
 	friendName: "Carlton",
 	photoLink: "http://s3.amazonaws.com/rapgenius/carltonbanks.jpg",
   selections: ["4", "3", "1", "2", "4", "2", "2", "5", "4", "2"]
   
   }, 

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
