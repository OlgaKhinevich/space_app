function getFavourites() {
    if(!localStorage["favourites"]) return [];
    return JSON.parse(localStorage["favourites"]);
}

function getHistory() {
  if(!localStorage["history"]) return [];
    return JSON.parse(localStorage["history"]);
}

function wrapWithFavourites(results){
  const favourites = getFavourites();
  const compareRegister = {};
  for(let item of favourites){
    compareRegister[item.data[0].nasa_id] = true;
  }
  const resultsCopy = results.slice();
  resultsCopy.forEach((result)=>{
    if(compareRegister[result.data[0].nasa_id]){
      result.inFavourites = true;
    }
  });
  return resultsCopy;
}

module.exports.getFavourites = getFavourites;
module.exports.getHistory = getHistory;
module.exports.wrapWithFavourites = wrapWithFavourites;
