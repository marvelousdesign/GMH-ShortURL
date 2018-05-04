// base 58 of alphabets/characters excluding 0 l I O <- base 62 includes those
const alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
const base = alphabet.length

// encodes / generates 6 random string from the alphabets/characters
const encode = () => {
    let encoded = ''
    for (let i = 0; i < 6; i++) {
        encoded += alphabet.charAt(Math.floor(Math.random() * base))
    }
    return encoded
}

// decodes


module.exports.encode = encode
//module.exports.decode = decode
