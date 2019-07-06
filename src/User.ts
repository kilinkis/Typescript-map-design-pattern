import faker from 'faker';
import { Mappable } from './CustomMap';

/**
 * The 'implements' helps typescript understand that User is meant to be considered as type Mappable.
 * So in case of an error, the message will me more clear and will point us in the correct direction.
 * Since an error would probably display in other file (where the User class is used) and we would need to
 * open this file and check ourselves what's wrong. Thanks to 'implements', the error message will show
 * what's missing in the definition.
 *
 */
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'springgreen';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
