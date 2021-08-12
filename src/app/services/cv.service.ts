import {Injectable} from '@angular/core';
import {Education} from "../models/education";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

import {Observable} from "rxjs";
import {Experience} from "../models/experience";
import {Skill} from "../models/skill";
import {ProfilInfo} from "../models/profilInfo";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  siteUrl = environment.siteUrl;
  jsonUrl =  "/assets/json/"


  constructor(private http: HttpClient) {
  }

  public getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.jsonUrl + "education.json")
  }

  public getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.jsonUrl + "experiences.json")
  }

  public getSkills():Observable<Skill[]> {
    return this.http.get<Skill[]>(this.jsonUrl + "skills.json")
  }

  getProfilinfos(): Observable<ProfilInfo[]> {
    return this.http.get<ProfilInfo[]>(this.jsonUrl+"homepage.json")
  }
}
