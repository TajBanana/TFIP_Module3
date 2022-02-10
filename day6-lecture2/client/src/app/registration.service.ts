import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Registration, ResponseMessage} from "./model";
import {lastValueFrom} from "rxjs";

const URL_POST_API_REGISTER = 'http://localhost:8080/api/register'

@Injectable()
export class RegistrationService {
  constructor(private http:HttpClient) {
  }

  postForm(registration:Registration) : Promise<ResponseMessage> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const params = new HttpParams()
      .set('name',registration.name)
      .set('email',registration.email)
      .set('phone',registration.phone)

    return lastValueFrom(this.http.post<ResponseMessage>(URL_POST_API_REGISTER,params.toString(),{headers}));
  }

}
