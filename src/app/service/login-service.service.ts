import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(usuario: any) {

    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      /*Retorno Http*/
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem("token", token);

      //console.info("Token: " + localStorage.getItem("token"));

    },
    
    error => {
      console.error("Erro ao fazer o login.")
    }
    );
    
  }

}
