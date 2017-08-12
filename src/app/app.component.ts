import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  states = ['Stable', 'Critical', 'Finished'];

  defaultStatus = 'Stable';

  projectForm: FormGroup;

  onSubmit()
  {

  }

  ngOnInit()
  {
    this.projectForm = new FormGroup(
      {
        'projectname': new FormControl(null, Validators.required ),
        'email': new FormControl(null, [ Validators.email, Validators.required ]),
        'status': new FormControl(null)
      }
    );
  }
}
