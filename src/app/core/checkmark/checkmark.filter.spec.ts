import { CheckmarkPipe } from "./checkmark.filter";

describe('checkmark', () => {
  //No need for beforeEach as the pipe is pure
  const pipe = new CheckmarkPipe();

  it('should convert boolean values to unicode checkmark or cross', () => {
    expect(pipe.transform(true)).toBe('\u2713');
    expect(pipe.transform(false)).toBe('\u2718');
  });

});
