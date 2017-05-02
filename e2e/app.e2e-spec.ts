import { ExempleNgForPage } from './app.po';

describe('exemple-ng-for App', () => {
  let page: ExempleNgForPage;

  beforeEach(() => {
    page = new ExempleNgForPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
