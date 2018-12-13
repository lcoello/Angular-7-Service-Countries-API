import { Component, OnInit } from '@angular/core';
import {CountriesService } from './services/countries.http.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountriesService]
})
export class AppComponent implements OnInit {
  title = 'Angular-Service-Get';
  theForm: FormGroup;
  public countryDetails: any[];
  public countryName: string;
  public countriesList: any;

  constructor(private countriesService: CountriesService, private fb: FormBuilder){
    this.createForm();
  }

  createForm(){
    this.theForm = this.fb.group({
      countries: ['']
    })
    this.theForm.get('countries').setValue('default')
  }
//
  ngOnInit() {
      this.countriesService.getCountries().subscribe(res => {
      this.countriesList = res
    });
    this.theForm.get('countries').valueChanges.subscribe(val => {
      if(val !== 'default'){
        this.countriesService.getCountryDetail(val).subscribe( details => {
          this.countryDetails = details;
        })
      }
    });
  }
}
