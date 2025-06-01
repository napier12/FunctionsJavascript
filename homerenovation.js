function addPaintAndSupplies(totalCost, callback) {

    let paintCost = prompt("Enter the cost for the paint and supplies :");

    paintCost = parseFloat(paintCost);

    if (paintCost > 100)

        paintCost *= 1.1;

    let paintArea = document.querySelector(".paint");

    paintArea.innerHTML = `Paint $ ${paintCost}`;

    callback(totalCost + paintCost);

    return (totalCost + paintCost);

}

function addFurniture (totalCost, callback) {

    let furnitureCost = prompt("Enter the cost of the furniture :");

    furnitureCost = parseFloat(furnitureCost);
   
    if (furnitureCost < 500)

        furnitureCost *= 0.90;

    let furnitureArea = document.querySelector(".furniture");

    furnitureArea.innerHTML = `Furniture $ ${furnitureCost}`;

    callback(totalCost + furnitureCost);

    return (totalCost + furnitureCost);
}

const addFloorCoverings = function(totalCost, callback){

    let floorCost = prompt("Enter the cost for the floor coverings :");

    floorCost = parseFloat(floorCost);

    if (floorCost < 500)

        floorCost *= 0.85;

    let floorArea = document.querySelector(".floorCoverings");

    floorArea.innerHTML = `Floor Coverings $ ${floorCost}`;

    callback(totalCost + floorCost);

    return (totalCost + floorCost);
}


const updateTotals = (cost) => {

    totalCost = cost

    let totalsArea = document.querySelector(".totalCost");

    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;

}

let totalCost = 0;

totalCost = addPaintAndSupplies(totalCost, updateTotals) + addFurniture(totalCost, updateTotals) + addFloorCoverings(totalCost, updateTotals);





