import { getInitialState } from "./sources";

describe("Weather App Data Store", () => {
  describe("getInitialState", () => {
    let actual;
    let expected;

    test("creates an initial state object", () => {
      expected = { location: "", weather: {} };
      actual = getInitialState();
      expect(actual).toEqual(expected);
    });
  });
});
