import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent {

  constructor (private routeActive: ActivatedRoute) {}

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id !== null) {
      console.log("Valores sendo editado: " + id);
    }
}
}