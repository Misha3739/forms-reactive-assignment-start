import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';

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
        'projectname': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)] ),
        'email': new FormControl(null, [  Validators.required, Validators.email ], this.forbiddenEmails),
        'status': new FormControl(null)
      }
    );
  }

  forbiddenProjectNames(control: FormControl): {[s: string]: boolean}
  {
    if(control.value === 'Test')
    {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>
  {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value.startsWith('Test') || control.value.startsWith('test'))
        {
          resolve({'emailIsForbidden' : true});
        }
        else
        {
          resolve(null);
        }

      }, 1500);
    });
    return promise;
  }
}
