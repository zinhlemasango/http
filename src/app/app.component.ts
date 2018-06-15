import { Component } from '@angular/core';
import { InfoService } from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

profile


constructor(private info: InfoService){
this.profile = this.info.getUser().subscribe(profile =>{
this.profile = profile

})


}
}
