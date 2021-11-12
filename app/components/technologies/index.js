import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TechnologiesComponent extends Component {
  @tracked chosenTech = this.args.model[0];

  @action changeTechnology(index, element) {
    this.chosenTech = this.args.model[index];

    let techNav = element.srcElement.parentElement.children;
    for (let i = 0; i < techNav.length; i++) {
      techNav[i].ariaSelected = false;
    }
    element.srcElement.ariaSelected = true;
  }
  setActive(element) {
    let tabIndex = parseInt(element.attributes.tabIndex.value);

    if (tabIndex == 0) {
      element.ariaSelected = true;
    }
  }
}
