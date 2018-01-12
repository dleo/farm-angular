import { FAPage } from './app.po';

describe('f-a App', () => {
  let page: FAPage;

  beforeEach(() => {
    page = new FAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
