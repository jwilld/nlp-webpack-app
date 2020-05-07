import { handleSubmit } from "./formHandler";

describe("handleSubmit", () => {
  // jsdom
  document.body.innerHTML = " <input id='name' value='Picard'> ";

  const event = { preventDefault: () => {} };

  window.fetch = jest.fn().mockImplementation(() => {
  return  Promise.resolve({
    json: () =>
      Promise.resolve({
        'title': 'test json response',
        'message': 'this is a message',
        'time': 'now'
      })
  }).catch(e => e)
})



  beforeEach(() => {
    jest.spyOn(event, "preventDefault");
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  describe("handleSubmit(event)", () => {
    test("should call event.preventDefault", () => {
      handleSubmit(event);
      expect(event.preventDefault).toBeCalled();
      expect();
    });
  });
});
