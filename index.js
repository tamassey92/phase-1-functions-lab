function distanceFromHqInBlocks (someValue) {
    if (someValue < 42){
        return(42 - someValue);
    }
    else {
        return(someValue - 42);
    }
}

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
 }

 function distanceTravelledInFeet(start, destination) {
if (start < destination)
return(destination - start)*264
else if (start > destination)
return(start - destination)*264
  }

  function calculatesFarePrice(start, destination) {
    let total = distanceTravelledInFeet(start, destination)
    if (total <= 400)
    return 0;
    else if (total >= 400 && total <= 2000)
    return (total - 400)*.02;
    else if (total >= 2000 && total <= 2500)
    return 25;
    else if (total > 2500)
    return "cannot travel that far"
  }