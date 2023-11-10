import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'sala-cine';
  base64: any;

  onInputChanged(event: any) {
    let file: File = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onload = (e) => {
      this.base64 = fileReader.result
    }
    fileReader.readAsDataURL(file);
  }
}
