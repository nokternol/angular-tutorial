import { Phone } from "../core/phone/phone.types";

class PhoneDetailController {
    phone: Phone;
    mainImageUrl = '';
  
    static $inject = ['$routeParams', 'Phone'];
  
    constructor($routeParams: angular.route.IRouteParamsService, Phone: any) {
      let phoneId = $routeParams['phoneId'];
      this.phone = Phone.get({phoneId}, (phone: Phone) => {
        this.setImage(phone.images[0]);
      });
    }
    setImage(imageUrl: string) {
      this.mainImageUrl = imageUrl;
    }
  }
  export default PhoneDetailController;