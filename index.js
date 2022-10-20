const single = (num, numLength) => {
    switch(num) {
        case '0': return (numLength === 1) ? 'zero' : ''
        case '1': return 'one '
        case '2': return 'two '
        case '3': return 'three '
        case '4': return 'four '
        case '5': return 'five '
        case '6': return 'six '
        case '7': return 'seven '
        case '8': return 'eight '
        case '9': return 'nine ' 
    }
}

const ten2Nineteen = (num) => {
    switch(num) {
        case '0': return 'ten ' 
        case '1': return 'eleven '
        case '2': return 'twelve '
        case '3': return 'thirteen '
        case '4': return 'fourteen '
        case '5': return 'fifteen '
        case '6': return 'sixteen '
        case '7': return 'seventeen '
        case '8': return 'eighteen '
        case '9': return 'nineteen '
    }
}

const divisibleByTen = (num) => {
    switch(num) {
        case '2': return 'twenty '
        case '3': return 'thirty '
        case '4': return 'fourty '
        case '5': return 'fifty '
        case '6': return 'sixty '
        case '7': return 'seventy '
        case '8': return 'eighty '
        case '9': return 'ninety '
        default: return ''
    }
}

const numToString = (num) => {
    let stringConversion = ""
    let stringValue = num.toString()
    for (let i = 0; i < stringValue.length; i++) {
        if ((stringValue.length - i === 6 || stringValue.length - i === 3) && stringValue[i] !== '0') {
                stringConversion += `${single(stringValue[i])}hundred `
        } else if (stringValue.length - i === 5 || stringValue.length - i === 2) {
            if(stringValue[i] === '1') {
                stringConversion += ten2Nineteen(stringValue[i+1])
            } else {
                stringConversion += divisibleByTen(stringValue[i])
            }
        } else if (stringValue.length - i === 4 || stringValue.length - i === 1) {
            if(stringValue.length - i === 4) {
                stringConversion += stringValue[i-1] !== '1' ? `${single(stringValue[i])}thousand ` :  'thousand '
            } else {
                stringConversion += stringValue[i-1] !== '1' ? single(stringValue[i], stringValue.length) : ''
            }
        }
    }
    return stringConversion
}

console.log(numToString(101010))
console.log(numToString(314819))
console.log(numToString(301809))
console.log(numToString(300000))
console.log(numToString(111111))
console.log(numToString(100200))
console.log(numToString(306))
console.log(numToString(06))
console.log(numToString(101099))
console.log(numToString(999999))
