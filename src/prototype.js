const assert = require('assert')
const crypto = require('crypto')

function generate(namespace, data){
	
	// namespace to bytes
	const space = []
	namespace.replace(/[a-fA-F0-9]{2}/g, (hex) => space.push(parseInt(hex, 16)) && '')

	assert(space.length === 16, "namespace must be a valid UUID")
	
	// concat Uint8Array space and data
	const toHash = new Uint8Array(space.length + data.length)
	toHash.set(space, 0)
	toHash.set(data, space.length)
	
	const buffer = crypto.createHash('sha1').update(toHash).digest()
	const bytes = new Uint8Array(buffer)

    bytes[6] = (bytes[6] & 0x0f) | 0x50
    bytes[8] = (bytes[8] & 0x3f) | 0x80
    
    // bytes to string
    const bits = [...bytes].map(bit => (bit < 0x10 ? '0' : '') + bit.toString(16))
    
    
    return [
      ...bits.slice(0, 4),
      "-",
      ...bits.slice(4, 6),
      "-",
      ...bits.slice(6, 8),
      "-",
      ...bits.slice(8, 10),
      "-",
      ...bits.slice(10, 16),
    ].join("")
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function validate(id) {
  return UUID_RE.test(id);
}

// test
// generate('9999', 'hello')
const c = generate('6ba7b811-9dad-11d1-80b4-00c04fd430c8', 'http://example.org/page')

assert(c === '6b19973b-8154-5782-bca0-15e6b730ca00', 'uuid error')
// console.log(c)


// console.log(globalThis.crypto)
// console.log(crypto.randomUUID()) // nodejs14
