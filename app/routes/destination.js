import Route from '@ember/routing/route';

export default class DestinationRoute extends Route {
  activate() {
    document.body.classList.add('destination');
  }

  deactivate() {
    document.body.classList.remove('destination');
  }

  async model() {
    let response = await fetch('./api/data.json');
    let { destinations } = await response.json();
    return destinations;
  }
}
