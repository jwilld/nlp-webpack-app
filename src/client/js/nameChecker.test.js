import { checkForName } from "./nameChecker";

it('should alert "Welcome Captain!"', () => {
  window.alert = jest.fn()
  const name = checkForName("Picard");
  expect(name).toEqual(alert("Welcome Captain!"));
});
