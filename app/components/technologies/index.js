import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TechnologiesComponent extends Component {
  @tracked technologyId = 1;

  @action changeTechnology(technologyId) {
    this.technologyId = technologyId;
  }
  get showTechnology() {
    let results = this.args.model.filter(
      (element) => element.id === this.technologyId
    );
    let technology = results[0];
    return technology;
  }
}
