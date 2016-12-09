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
   question1: 	"4",
   question2: 	"1",
   question3: 	"2",
   question4: 	"4",
   question5: 	"2",
   question6: 	"3",
   question7: 	"3",
   question8: 	"1",
   question9: 	"2",
   question10: "4" 				   

					}, 
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
