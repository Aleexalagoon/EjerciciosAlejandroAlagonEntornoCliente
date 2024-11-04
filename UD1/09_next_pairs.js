

function nextPairs(num) {
    let n1
    let n2
    if (num%2 === 0){
        n1 = num + 2
        n2 = n1 + 2
    }
    else{
        n1 = num + 1
        n2 = n1 + 2
    }
    return `${n1} y ${n2}`
}

 console.log (nextPairs(33))