import { PhoneService } from "../core/phone/phone.service";
import { Phone } from "../core/phone/phone.types";

class PhoneListController {
    phones: Phone[];
    orderProp: string;
    query = '';

    static $inject = ['Phone']; // The dependency injection annotations are attached to the class using a static property $inject

    constructor(Phone: PhoneService) {
      this.phones = Phone.get();
      this.orderProp = 'age';
    }
  }
export default PhoneListController;
