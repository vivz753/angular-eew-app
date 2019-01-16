import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  phoneNumber: string = "";
  stringInvalid: boolean = false;
  stringEmpty: boolean = true;
  showErrorHelper: boolean = true;
  showModal: boolean = false;
  listOfNumbers: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  checkString (input: string) {
    // Check if the string is empty
    this.stringEmpty = input === "" ;
    // Check if the string is valid (10 characters w/ optional country code, digits only)
    let regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    this.stringInvalid = !regex.test(input);

    // Check if string is empty or string is invalid
    if (this.stringEmpty || this.stringInvalid) {
      this.showErrorHelper = true;
    }
    else {
      this.showErrorHelper = false;
    }

  }

  onRegisterPhoneNumber (input: string) {
    this.listOfNumbers.push(input);
    this.phoneNumber = "";
    this.showErrorHelper = true;
    this.showModal=true;

    //insert api call that uploads phone number to Amazon SNS
  }

  closeModal() {
    this.showModal = false;
  }
}
