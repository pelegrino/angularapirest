import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: User[] = [];

  constructor(private usuarioService: UsuarioService) {
    
   }

  ngOnInit() {
    this.usuarioService.getStudentsList().subscribe(data => {
      this.students = data;
    });

  }

}
