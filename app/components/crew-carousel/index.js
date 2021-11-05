import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CrewComponent extends Component {
  @tracked crewMemberRole = 'Commander';

  @action changeCrewMember(crewMemberRole) {
    this.crewMemberRole = crewMemberRole;
  }
  get showCrewMember() {
    let results = this.args.model.filter(
      (element) => element.role === this.crewMemberRole
    );
    let crewMember = results[0];
    return crewMember;
  }
}
