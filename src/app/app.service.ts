import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

  }

  // создаём метод который будет отправлять запрос на бекэнд
  sendOrder(data: any) {
    return this.http.post('https://testologia.site/burgers-order', data);
  }

  getBurgersData() {
    return this.http.get('https://testologia.site/burgers-data');
  }

}
