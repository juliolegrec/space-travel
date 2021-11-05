import Route from '@ember/routing/route';

export default class CrewRoute extends Route {
  activate() {
    document.body.classList.add('crew');
  }

  deactivate() {
    document.body.classList.remove('crew');
  }

  async model() {
    let response = await fetch('./api/data.json');
    let { crew } = await response.json();
    return crew;
  }
}
