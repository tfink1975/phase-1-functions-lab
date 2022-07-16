function distanceFromHqInBlocks(blocks) {
   let distance;
    if (blocks > 42) {
        distance = blocks - 42;
    } else if (blocks < 42) {
        distance = 42 - blocks;
    }
    return distance;
}



function distanceFromHqInFeet(blocks) {
    distanceFromHqInBlocks(blocks);
    let travel;
    if (blocks > 42) {
        travel = (blocks - 42) * 264;
    } else if (blocks < 42) {
        travel = (42 - blocks) * 264;
    }
    return travel;
}

function distanceTravelledInFeet(street1, street2) {
    distanceFromHqInFeet(street1, street2);
    let feet;
    if (street1 > street2) {
        feet = (street1 - street2) * 264;
    } else if (street1 < street2) {
        feet = (street2 - street1) * 264;
    }
    return feet;
}

function calculatesFarePrice(street1, street2) {

    
    let fare;
      let distance = distanceTravelledInFeet(street1, street2); 
        if (distance <= 400) {
            fare = 0;
        } else if (distance > 400 && distance <= 2000) {
            fare = 2.56;
        } else if (distance > 2000 && distance < 2500) {
            fare = 25;
        } else if (distance > 2500) {
            fare = 'cannot travel that far';
        }
        return fare;
   }
   