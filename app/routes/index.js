import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  activate() {
    document.body.classList.add('home');
  }

  deactivate() {
    document.body.classList.remove('home');
  }
}
