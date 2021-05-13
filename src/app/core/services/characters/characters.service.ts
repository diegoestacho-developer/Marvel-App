import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Md5 } from 'ts-md5/dist/md5';

import { ENDPOINTS, CREDENTIALS } from 'src/app/core/enums/enum';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  async getCharactes() {
    const timestamp = new Date().getTime();
    const hash = Md5.hashStr(timestamp + CREDENTIALS.PRIVATE_KEY + CREDENTIALS.PUBLIC_KEY).toString();
    const auth = `?ts=${timestamp}&apikey=${CREDENTIALS.PUBLIC_KEY}&hash=${hash}&limit=8`;

    try {
      const resJson: any = await this.http.get(`${CREDENTIALS.BASE_URL}${ENDPOINTS.CHARACTERS}${auth}`).toPromise();
      return resJson;
    } catch (error) {
      throw error;
    }
  }
}
