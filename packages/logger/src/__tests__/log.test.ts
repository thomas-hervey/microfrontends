import { log } from "..";

jest.spyOn(global.console, "log");

describe("@repo/logger", () => {
  it("prints a message", () => {
    log("hello");
    // expect that console.log was called
    expect(console.log).toHaveBeenCalled();
  });
});
