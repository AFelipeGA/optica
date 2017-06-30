import { OpticaPage } from './app.po';

describe('optica App', () => {
  let page: OpticaPage;

  beforeEach(() => {
    page = new OpticaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
