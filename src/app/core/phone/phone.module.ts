import { NgModule } from "@angular/core";
import { PhoneService } from "./phone.service";

// Define the `core.phone` module
//angular.module('core.phone', ['ngResource']);
@NgModule({
  imports: [PhoneService]
})
export class CorePhoneModule {

}
