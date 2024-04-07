import { Component } from '@angular/core';
import { InfoServiceService } from 'src/app/services/info-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  constructor(public info: InfoServiceService,
    private _router: Router,) { }

  InfoReport = [{ ID :"",
    Date: "", YourName: "",
    BusinessName: "", Profession: "",
    Location: "", PreviousTypeOfJobs: "", FamilyInformation: "",
    Spouse: "", Children: "", Animals: "", Hobbies: "",
    ActivityOfInterest: "", CityOfResidence: "",
    BurningDesire: "", SomethingNoOneKnowsAboutMe: "",
    KeyToSuccess: "", BusinessGoals: "", BusinessAccomplishments: "",
    BusinessInterests: "", BusinessNetworks: "", BusinessSkills: "",
    PersonalGoals: "", PersonalAccomplishments: "", PersonalInterests: "",
    PersonalNetworks: "", PersonalSkills: ""
  }]

  ngOnInit(): void {
    this.BindInfo();
  }


  BindInfo() {
    this.info.getInformation('getData').subscribe(
      (res: any) => {
        console.log(res);
        if (res.status == 200) {

          this.InfoReport = res.data[0];
          // this.Date = this.InfoReport[0].Date;
        }
      })
  }

  deleteInfo(ID:any) {
    this.info.deleteInfo('deleteInfo/'+ ID).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status == 200) {
          console.log(res);
          alert("Data Deleted Successfully");
          this.BindInfo();
          // this.Date = this.InfoReport[0].Date;
        }
      })
  }







}
