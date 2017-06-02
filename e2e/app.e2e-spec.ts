import { TestSubtreesPage } from './app.po';

describe('test-subtrees App', function() {
  let page: TestSubtreesPage;

  beforeEach(() => {
    page = new TestSubtreesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
