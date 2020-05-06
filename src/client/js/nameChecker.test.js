import {checkForName} from './nameChecker';

it('should alert "Welcome Captain!"', () => {
    const name = checkForName('Picard')
    expect(name).toEqual(alert("Welcome Captain!"))
})