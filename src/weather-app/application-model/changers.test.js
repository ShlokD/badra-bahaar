import { getDataChangers } from "./changers";

describe("data changers", () => {
    let actual;
    let expected;
    let dataChangers;

    beforeEach(() => {
        dataChangers = getDataChangers({});
    });

    test("doSetLocation sets the app location", () => {
        expected = { location: "Winterfell"};
        actual = dataChangers.doSetLocation({}, "Winterfell");
        expect(actual).toEqual(expected);
    });
});