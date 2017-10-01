import { ShoppingApplicationPage } from './app.po';

describe('shopping-application App', () => {
  let page: ShoppingApplicationPage;

  beforeEach(() => {
    page = new ShoppingApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
