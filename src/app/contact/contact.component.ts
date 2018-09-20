import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { } from '@types/googlemaps';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ContactForm: FormGroup;
  submitted = false;
  private contacts: Array<object> = [];
  //*
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.ContactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
    
    var mapProp = ({
      center: new google.maps.LatLng(13.785986, 100.546391),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    });
  }

  get f() {
    return this.ContactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.ContactForm.invalid) {
      return;
    }
    alert('SUCCESS!!!\n\n' + JSON.stringify(this.ContactForm.value))
  }
}
