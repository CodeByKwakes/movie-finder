import { NewMovieFinderPage } from './app.po';

describe('new-movie-finder App', () => {
  let page: NewMovieFinderPage;

  beforeEach(() => {
    page = new NewMovieFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
