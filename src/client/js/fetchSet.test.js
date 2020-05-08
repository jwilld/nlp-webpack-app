import { fetchSet } from "./fetchSet";

describe("fetchSet", () => {
  // jsdom
  document.body.innerHTML =
    `<form class="url-form">` +
    `<input class='url-input' id="url" type="text" name="input" value=""  placeholder="URL"> ` +
    `<input class='submit-button' type="submit" name="" value="submit">` +
    `</form>` +
    `<p class='text-content'></p>` + 
    `<h1 class='polarity-result'></h1>` +
    `<span class='polarity-confidence'></span>` +
    `<h1 class='subjectivity-result'></h1>` + 
    `<span class='subjectivity-confidence'></span>`


  const event = { preventDefault: () => {} };

  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          title: "test json response",
          message: "this is a message",
          time: "now",
        }),
    }).catch((e) => e);
  });

  beforeEach(() => {
    jest.spyOn(event, "preventDefault");
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  describe("fetchSet(event)", () => {
    test("should call event.preventDefault", () => {
      fetchSet(event);
      expect(event.preventDefault).toBeCalled();
      expect();
    });
  });
});
