import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Base64';
  base64: any;

  onInputChanged(event: any) {
    let file: File = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onload = (e) => {
      this.base64 = fileReader.result
    }
    fileReader.readAsDataURL(file);
  }

  downloadFile() {
    this.base64 = this.base64.replace('data:application/pdf;base64,', '');
    const byteArray = new Uint8Array(
      atob(this.base64)
      .split('')
      .map(char => char.charCodeAt(0))
    );

    const file = new Blob([byteArray], {type: 'application/pdf'});
    const fileUrl = URL.createObjectURL(file);
    let filename = 'download_pdf_prueba';
    let link = document.createElement('a');
    link.download = filename;
    link.target = '_blank';
    link.href = fileUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
