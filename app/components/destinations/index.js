import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DestinationsComponent extends Component {
  @tracked destinationName = 'moon';

  @action changeDestination(destinationName) {
    this.destinationName = destinationName;
  }
  get showDestination() {
    let results = this.args.model.filter(
      (element) => element.name === this.destinationName
    );
    let destination = results[0];
    return destination;
  }
}
