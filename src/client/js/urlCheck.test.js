import { urlCheck} from './urlChecker'

it('should validate url', () => {
  expect(urlCheck('https://www.urlCheck.com')).toBe(true)
});
