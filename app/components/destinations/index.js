import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DestinationsComponent extends Component {
  @tracked destinationName = 'moon';
  @tracked isActive = false;

  @action changeDestination(destinationName, index) {
    this.destinationName = destinationName;
    console.log(index);
  }
  get showDestination() {
    let results = this.args.model.filter(
      (element) => element.name === this.destinationName
    );
    let destination = results[0];
    return destination;
  }
}
