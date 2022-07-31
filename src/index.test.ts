import { describe, expect, test } from '@jest/globals'
import crypto from 'crypto'
import { TextEncoder } from 'util'
import uuidv5 from './index'

describe('[index] uuidv5 generate()', () => {
  test.each`
    namespace | uuid | data | expected
    ${'DNS'} | ${'6ba7b810-9dad-11d1-80b4-00c04fd430c8'} | ${'hello'} | ${'9342d47a-1bab-5709-9869-c840b2eac501'}
    ${'URL'} | ${'6ba7b811-9dad-11d1-80b4-00c04fd430c8'} | ${'hello'} | ${'074171de-bc84-5ea4-b636-1135477620e1'}
    ${'URL'} | ${'6ba7b811-9dad-11d1-80b4-00c04fd430c8'} | ${'http://example.org/page'} | ${'6b19973b-8154-5782-bca0-15e6b730ca00'}
    ${'OID'} | ${'6ba7b812-9dad-11d1-80b4-00c04fd430c8'} | ${'hello'} | ${'4d71d03f-f19b-5d9e-8523-9628ba18063c'}
    ${'X500'} | ${'6ba7b814-9dad-11d1-80b4-00c04fd430c8'} | ${'hello'} | ${'feddb5c6-6b33-5dd7-a4d8-fb98254f583f'}
  `('namespace $namespace returns $expected when $data', ({ namespace, uuid, data, expected }) => {
    expect(
      uuidv5.generate(uuid, new TextEncoder().encode(data))
    ).toEqual(expected)
  })
})

describe('[index] uuidv5 valid()', () => {
  test('9342d47a-1bab-5709-9869-c840b2eac501 is uuid v5 valid', () => {
    expect(uuidv5.validate('9342d47a-1bab-5709-9869-c840b2eac501')).toBeTruthy()
  })

  test('crypto.randomUUID() is uuid v5 not valid', () => {
    expect(uuidv5.validate(crypto.randomUUID())).toBeFalsy()
  })

  test('hello-world is uuid v5 not valid', () => {
    expect(uuidv5.validate('hello-world')).toBeFalsy()
  })
})
