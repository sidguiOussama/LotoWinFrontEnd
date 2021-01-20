import { Component, OnInit } from '@angular/core';
import {FichierService} from '../../../Services/fichier.service';
import {Fichier} from '../../../Models/Fichier.module';

@Component({
  selector: 'app-upload-fichier',
  templateUrl: './upload-fichier.component.html',
  styleUrls: ['./upload-fichier.component.scss']
})
export class UploadFichierComponent implements OnInit {

  constructor(private fichierSevice: FichierService) { }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      this.fichierSevice.uploadFile(formData);
      const fichier = new Fichier();
      fichier.nomFichier = event.target.files[0].name;
      this.fichierSevice.createNewFile(fichier).subscribe(
        (data) => {
          alert(JSON.stringify(data));
        }, (error) => {
          console.log('Erreur : ' + error);
        }
      );
    }

  }

  onDownload(file: string): void {
    const link = document.createElement('a');
    link.setAttribute('target', 'blank');
    link.setAttribute('href', 'localhost:8080/document/download/' + file);
    link.setAttribute('download', file);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
