const heights2 = [167, 190, 120, 165, 137];

function min(heights){
    let minimum = heights[0];
    for (const height of heights2) {
        if (minimum > height) {
            minimum = height;
            
        } 
    }
    return minimum;
}


const x = min(heights2)
console.log("The minimum height is "+ x);


// alternative

const y = Math.min(heights2);
console.log(y)