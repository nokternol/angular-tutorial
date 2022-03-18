import { NgModule } from "@angular/core";
import { CorePhoneModule } from "./phone/phone.module";

// Define the `core` module
//angular.module('core', ['core.phone']);
NgModule({
  imports: [ CorePhoneModule ]
})
export class CoreModule {}
