/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1.sort();
  str2.sort

}

module.exports = isAnagram;function isAnagram(str1, str2) {
 const a= str1.split('').sort().join('');
 const b =  str2.split('').sort().join('');
  
  if(a === b){
    console.log("true");
  }else{
    console.log("false");
  }
  

}
isAnagram("hell0","ellh");
// module.exports = isAnagram;
