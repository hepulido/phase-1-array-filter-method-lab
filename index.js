// Code your solution here

function findMatching(array, string) {
    return array.filter(function (array) { 
        return array.toLowerCase() === string.toLowerCase() })
  }

  function fuzzyMatch(array, string ){
   return array.filter(function (array){
    return array.toLowerCase().substring(0, string.length) === string.toLowerCase()
   })
  }

function  matchName( array , string ){
    return array.filter(function (array){
        return array.name === string
    })
}