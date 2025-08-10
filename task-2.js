const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallName(names){
    let smallest = names[0];
    for (const name of names) {
        if (smallest.length > name.length) {
            smallest = name;
            
        }
    }
    return smallest
}

console.log(smallName(heights2));