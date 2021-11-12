import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CrewComponent extends Component {
  @tracked crewMember = this.args.model[0];

  @action changeCrewMember(index, element) {
    this.crewMember = this.args.model[index];

    let crewNav = element.srcElement.parentElement.children;
    for (let i = 0; i < crewNav.length; i++) {
      crewNav[i].ariaSelected = false;
    }
    element.srcElement.ariaSelected = true;
  }

  setActive(element) {
    let tabIndex = parseInt(element.attributes.tabIndex.value);

    if (tabIndex === 0) {
      element.ariaSelected = true;
    }
  }
}
