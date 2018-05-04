// base 58 of alphabets/charactors excluding 0 l I O <- base 62 incluses those
const alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
const base = alphabet.length

// encodes
const encode = () => {
    let encoded = ''
    for (let i = 0; i < 5; i++) {
        encoded += alphabet.charAt(Math.floor(Math.random() * base))
    }
    return encoded
}

// decodes


module.exports.encode = encode
//module.exports.decode = decode
