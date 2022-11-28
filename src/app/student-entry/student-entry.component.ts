import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  name=""
  rollno=""
  admsnno=""
  mobileno=""
  college=""
  pname=""
  pno=""
  username=""
  password=""

  readValue=()=>
  {
    let data:any={
      "name":this.name,"rollno":this.rollno,"admsnno":this.admsnno,"mobileno":this.mobileno,"college":this.college,"pname":this.pname,
      "pno":this.pno,"username":this.username,"password":this.password
    }
    console.log(data)
  }

}
