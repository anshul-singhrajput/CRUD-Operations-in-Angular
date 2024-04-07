import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { InfoServiceService } from 'src/app/services/info-service.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  bsdate: Partial<BsDatepickerConfig>;

  constructor(
    private _fb: FormBuilder,
    private info: InfoServiceService,

  ) { 
    this.bsdate = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  infodataform: FormGroup = this._fb.group({
    Date: [''],
    YourName: [''],
    BusinessName: [''],
    Profession: [''],
    Location: [''],
    PreviousTypeOfJobs: [''],
    FamilyInformation: [''],
    Spouse: [''],
    Children: [''],
    Animals: [''],
    Hobbies: [''],
    ActivityOfInterest: [''],
    CityOfResidence: [''],
    BurningDesire: [''],
    SomethingNoOneKnowsAboutMe: [''],
    KeyToSuccess: [''],
    BusinessGoals: [''],
    BusinessAccomplishments: [''],
    BusinessInterests: [''],
    BusinessNetworks: [''],
    BusinessSkills: [''],
    PersonalGoals: [''],
    PersonalAccomplishments: [''],
    PersonalInterests: [''],
    PersonalNetworks: [''],
    PersonalSkills: [''],
  });

  saveinfo(data : any) {
     
    this.info.saveinfo('saveInfo' , data).subscribe((res: any) => {
      console.log(res);
      console.log(this.infodataform.value);
      alert("Data Added Successfully");
      this.infodataform.reset();
    })
  }


}
