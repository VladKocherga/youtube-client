import KeywordFilterPipe from './keyword-filter.pipe';

describe('KeywordFilterPipe', () => {
  it('create an instance', () => {
    const pipe: KeywordFilterPipe = new KeywordFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
