// Copyright 2021-2022 Shopopop. All rights reserved. ISC license.

import assert from 'assert'
import crypto from 'crypto'

/**
 * Generate a RFC4122 v5 UUID (SHA-1 namespace).
 *
 * ```ts
 * import uuidv5 from "uuidv5";
 *
 * const NAMESPACE_URL = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
 * const data = new TextEncoder().encode("example.org")
 *
 * const uuid =  uuidv5.generate(NAMESPACE_URL, data);
 * uuid === "886313e1-3b8a-5372-9b90-0c9aee199e5d" // true
 * ```
 *
 * @param namespace The namespace to use, uuid valid
 * @param data The data to hash to calculate the SHA-1 digest for the UUID
 * @returns uuid
 */
export function generate (namespace: string, data: Uint8Array): string {
  // namespace hexa to decimal
  const space: number[] = []
  namespace.replace(/[a-fA-F0-9]{2}/g, (hex: string): string => {
    space.push(parseInt(hex, 16))
    return ''
  })

  assert(space.length === 16, 'namespace must be a valid UUID')

  // concat Uint8Array namespace and data
  const toHash = new Uint8Array(space.length + data.length)
  toHash.set(space, 0)
  toHash.set(data, space.length)

  const buffer = crypto.createHash('sha1').update(toHash).digest()
  const bytes = new Uint8Array(buffer)

  bytes[6] = (bytes[6] & 0x0f) | 0x50
  bytes[8] = (bytes[8] & 0x3f) | 0x80

  // convert byte to uuid string
  const bits = [...bytes].map(bit => (bit < 0x10 ? '0' : '') + bit.toString(16))

  return [
    ...bits.slice(0, 4),
    '-',
    ...bits.slice(4, 6),
    '-',
    ...bits.slice(6, 8),
    '-',
    ...bits.slice(8, 10),
    '-',
    ...bits.slice(10, 16)
  ].join('')
}

const UUIDV5_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

/**
 * Validate is an RFC4122 v5 UUID.
 *
 * ```ts
 * import uuidv5 from "uuidv5";
 * import crypto from "crypto"
 *
 * uuidv5.validate(uuidv5.generate("6ba7b810-9dad-11d1-80b4-00c04fd430c8", new Uint8Array())); // true
 * uuidv5.validate(crypto.randomUUID()); // false
 * uuidv5.validate("this-is-not-a-uuid"); // false
 * ```
 */
export function validate (uuid: string): boolean {
  return UUIDV5_REGEX.test(uuid)
}
