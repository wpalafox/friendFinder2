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
    scores: ["3", "4", "2", "2", "5", "3", "4", "1", "4", "1"]
     
   },   
   { 
   	friendName: "Will Smith",
   	photoLink: "http://www.goliath.com/wp-content/uploads/2016/08/Will-Smith-for-Fresh-Prince-of-Bel-Air-reboot.png",
      scores: ["5", "5", "4", "4", "1", "1", "3", "2", "2", "4"]
   
   }, 
     { 
   	friendName: "Philip Banks",
   	photoLink: "https://averagenobodies.files.wordpress.com/2013/08/tumblr_m0o2qve6wd1qdpvjdo1_500.gif",
      scores: ["1", "4", "5", "2", "4", "5", "5", "3", "5", "1"]
   
   }, 
     { 
   	friendName: "Vivian Banks",
   	photoLink: "http://vignette2.wikia.nocookie.net/freshprince/images/8/85/Viv1.jpg/revision/latest?cb=20141116052219",
      scores: ["2", "2", "4", "1", "2", "3", "5", "4", "5", "1"]
     
   }, 
     { 
 	friendName: "Hilary Banks",
 	photoLink: "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F76e72604-e5d1-4d6c-9a8b-47895de86933.jpg",
    scores: ["3", "5", "1", "3", "2", "2", "3", "1", "1", "1"]
   
   }, 
     { 
 	friendName: "Ashley Banks",
 	photoLink: "http://vignette1.wikia.nocookie.net/freshprince/images/c/cc/Ashley_Banks_(Article).jpg/revision/latest?cb=20141020211210",
    scores: ["3", "2","3", "4", "2", "2", "4", "1", "2", "1"]
   
   }, 
      { 
 	friendName: "Geoffrey Barbara Butler",
 	photoLink: "http://vignette2.wikia.nocookie.net/freshprince/images/5/58/PortalGeoffrey.jpg/revision/latest?cb=20150823044534",
    scores: ["4", "1", "5", "1", "3", "3", "2", "5", "1", "1"]
   
   }, 
     { 
 	friendName: "Jazz",
 	photoLink: "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F071e50a2-35f4-43ef-b239-84828eef9073.jpg",
    scores: ["4", "2", "3", "5", "1", "1", "2", "2", "1", "5"]
   
   }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userArray;
