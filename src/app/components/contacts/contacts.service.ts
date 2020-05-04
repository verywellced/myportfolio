import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private _contacts: Contact[] = [
    {
      title: 'Facebook',
      imgSrc: './../assets/images/facebook.png',
      info: 'facebook.com/verywellced',
      link: 'https://www.facebook.com/verywellced',
  },
      {
        title: 'Linkedin',
        imgSrc: './../assets/images/linkin.png',
        info: 'linkedin.com/in/verywellced/',
        link: 'https://www.linkedin.com/in/verywellced/',
      },
      {
        title: 'Twitter',
        imgSrc: './../assets/images/twitter.png',
        info: 'twitter.com/verywellced17',
        link: 'https://twitter.com/verywellced17',
      },
      {
        title: 'Gmail',
        imgSrc: './../assets/images/gmail.png',
        info: 'cedrick.pablo71@gmail.com',
        link: 'mailto:cedrick.pablo71@gmail.com',
    },
  ];

  constructor() { }

  get contacts() {
    return this._contacts;
  }
}
