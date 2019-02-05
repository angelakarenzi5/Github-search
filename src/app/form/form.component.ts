import{ Component, OnInit, EventEmitter, Output} from '@angular/core';
import{User} from '../user-class/user';
@Component({
    selector:'app-form',
    templateUrl:'./form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    newUser=new User ("");
    @Output () add=new EventEmitter <User>();
    submitForm(){
        this.add.emit(this.newUser);
    }

    constructor() { }

    ngOnit() {

    }
}
   
