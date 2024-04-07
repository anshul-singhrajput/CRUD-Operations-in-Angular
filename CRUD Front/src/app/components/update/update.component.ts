import { Component , OnInit } from '@angular/core';
import { InfoServiceService } from 'src/app/services/info-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  bsdate: Partial<BsDatepickerConfig>;

  // updateform: FormGroup;
  ID: any;

  constructor(public info: InfoServiceService,
    private _router: Router, private route: ActivatedRoute , 
    private _fb: FormBuilder,) {
    this.bsdate = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      }
    );
  }

  ngOnInit(): void {
    this.ID = +this.route.snapshot.paramMap.get('id')!;
  }


   updateform : FormGroup = this._fb.group({
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


  

  update(data: any , id: any) {
    this.info.updateInformation('updateInfo/' + id , data).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status == 200) {
          console.log(res);
          alert("Data Updated Successfully");
          this._router.navigate(['/read']);
          // this.BindInfo();
          // this.Date = this.InfoReport[0].Date;
        }
      })
  }

  

}
