import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-test-sand-author-l');
  this.route('new-platform-test-sand-author-e',
  { path: 'new-platform-test-sand-author-e/:id' });
  this.route('new-platform-test-sand-author-e.new',
  { path: 'new-platform-test-sand-author-e/new' });
  this.route('new-platform-test-sand-book-l');
  this.route('new-platform-test-sand-book-e',
  { path: 'new-platform-test-sand-book-e/:id' });
  this.route('new-platform-test-sand-book-e.new',
  { path: 'new-platform-test-sand-book-e/new' });
  this.route('new-platform-test-sand-country-l');
  this.route('new-platform-test-sand-country-e',
  { path: 'new-platform-test-sand-country-e/:id' });
  this.route('new-platform-test-sand-country-e.new',
  { path: 'new-platform-test-sand-country-e/new' });
  this.route('new-platform-test-sand-language-l');
  this.route('new-platform-test-sand-language-e',
  { path: 'new-platform-test-sand-language-e/:id' });
  this.route('new-platform-test-sand-language-e.new',
  { path: 'new-platform-test-sand-language-e/new' });
});

export default Router;
