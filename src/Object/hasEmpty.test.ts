import { hasEmpty } from "./hasEmpty"

test('should first', () => {
  expect(hasEmpty({name:'chili'})).toBeFalsy()
})

test('should first', () => {
  expect(hasEmpty({name:''})).toBeTruthy()
})
