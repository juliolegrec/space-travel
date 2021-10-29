import EmberRouter from '@ember/routing/router';
import config from 'space-travel/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('destination', { path: '/destination/:destination_id' });
  this.route('crew');
  this.route('technology');
});
