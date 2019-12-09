import assert from "assert";
import { getInitialState } from "./sources";

describe("Weather App Data Store", () => {
  describe("getInitialState", () => {
    let actual;
    let expected;

    it("creates an initial state object", () => {
      expected = { location: "", weather: {} };
      actual = getInitialState();
      assert.deepStrictEqual(actual, expected);
    });
  });
});
