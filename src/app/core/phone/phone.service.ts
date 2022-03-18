import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone, PhoneListing } from "./phone.types";

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  constructor(private httpClient: HttpClient) { }

  getAllPhones() {
    return this.getPhoneData<PhoneListing[]>('phones');
  }

  getPhoneDetail(id: string) {
    return this.getPhoneData<Phone>(id);
  }

  private getPhoneData<T>(dataId: string) {
    return this.httpClient.get<T>('phones/:phoneId.json', { params: { phoneId: dataId }});
  }
}

// angular.
//   module('core.phone').
//   factory('Phone', ['$http',
//     function($http: ) {
//       return $http('phones/:phoneId.json', {}, {
//         query: {
//           method: 'GET',
//           params: {phoneId: 'phones'},
//           isArray: true
//         }
//       });
//     }
//   ]);
