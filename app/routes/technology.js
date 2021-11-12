import Route from '@ember/routing/route';

export default class TechnologyRoute extends Route {
  activate() {
    document.body.classList.add('technology');
  }

  deactivate() {
    document.body.classList.remove('technology');
  }

  async model() {
    let response = await fetch('./api/data.json');
    let { technology } = await response.json();
    return technology;
  }
}
