import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DestinationsComponent extends Component {
  @tracked chosenDestination = this.args.model[0];

  @action changeDestination(index, element) {
    this.chosenDestination = this.args.model[index];

    let destinationNav = element.srcElement.parentElement.children;
    for (let i = 0; i < destinationNav.length; i++) {
      destinationNav[i].ariaSelected = false;
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
