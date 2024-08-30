const measurements = {
    smallFront:{
        lengths:{
            small: {
                width: 3,
                length: 270,
                number: 5
            },
            long:{
                width: 3,
                length: 475,
                number: 11
            }
        }
    }
}

function smallFrontMaterials(number_of_fronts) {
    const smallFrontData = measurements.smallFront.lengths
    
    const smallLengths = number_of_fronts * smallFrontData.small.number;
    const longLengths = number_of_fronts * smallFrontData.long.number;

    return(`For ${number_of_fronts} fronts, you need ${smallLengths} lengths at ${smallFrontData.small.length}mm long and ${longLengths} lengths at ${smallFrontData.long.length}mm long!`)
}

module.exports = smallFrontMaterials;