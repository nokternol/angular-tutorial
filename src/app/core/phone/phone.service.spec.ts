import { inject, TestBed } from '@angular/core/testing';
import { PhoneService } from "./phone.service";

describe('PhoneService', function() {
  var $httpBackend;
  var Phone;
  var phonesData = [
    {name: 'Phone X'},
    {name: 'Phone Y'},
    {name: 'Phone Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Phone` service before each test
  beforeEach(TestBed.configureTestingModule({
    imports: [PhoneService],
  }).compileComponents()); // module('core.phone')

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject([PhoneService], (_Phone_: PhoneService) {
    // $httpBackend = _$httpBackend_;
    // $httpBackend.expectGET('phones/phones.json').respond(phonesData);

    Phone = _Phone_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the phones data from `/phones/phones.json`', function() {
    var phones = Phone.();

    expect(phones).toEqual([]);

    $httpBackend.flush();
    expect(phones).toEqual(phonesData);
  });

});
