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

  checkString(input: string){
    // Validation input

    console.log(input);

    // Check if the string is empty
    this.stringEmpty = input === "" ;
    // input !== "" ? this.stringEmpty = false : this.stringEmpty=true;
    console.log('String empty: ' + this.stringEmpty);

    // Check if the string is valid (10 characters, digits only)
    let regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    this.stringInvalid = !regex.test(input);

    if(this.stringEmpty || this.stringInvalid){
      this.showErrorHelper = true;
    }
    else{
      this.showErrorHelper = false;
    }
    console.log('Show error message: ' + this.showErrorHelper )
  }

  onRegisterPhoneNumber(input: string) {
    //insert api call that uploads phone number to Amazon SNS
    console.log("button clicked");
    this.listOfNumbers.push(input);
    console.log(this.listOfNumbers);
    this.phoneNumber = "";
    this.showModal=!this.showModal;
  }
}
