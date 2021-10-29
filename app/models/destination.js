import Model, { attr } from '@ember-data/model';

export default class DestinationModel extends Model {
  @attr name;
  @attr image;
  @attr description;
  @attr distance;
  @attr travel;
}
