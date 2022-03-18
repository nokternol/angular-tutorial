import angular from "angular";
import PhoneDetailController from "./phone-detail.controller";

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });