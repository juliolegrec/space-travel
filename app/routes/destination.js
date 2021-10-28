import Route from '@ember/routing/route';

export default class DestinationRoute extends Route {
  activate() {
    document.body.classList.add('destination');
  }

  deactivate() {
    document.body.classList.remove('destination');
  }
}
