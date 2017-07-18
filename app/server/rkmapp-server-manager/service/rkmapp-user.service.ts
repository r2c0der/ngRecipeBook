/**
 * Created by Rayvn on 7/13/2017.
 */
import { Injectable } from '@angular/core';
import { User } from "../rkmapp-server-manager-users/model/rkmapp-user.model";



@Injectable()
export class RKMAppUserService {

  getUsers(){

    return this.users.slice().sort();
  }


  getUser(id:number){
  if(id > 1){
    let userID = --id;
    console.log("user with the id of: "+ (id-1));
    console.log(this.users[userID]);
    return this.users[userID];
  }  else {
    return this.users[0];
  }
}


  users:User[] =
    [
      {
      userID : 1,
      userFirstName: 'Emahlah',
      userLastName: 'Leland',
      userPermission: 'admin'
    },
    {
      userID: 2,
      userFirstName: 'Ashli',
      userLastName: 'Maldonado',
      userPermission: 'admin'
    },
    {
      userID: 3,
      userFirstName: 'Ayanna',
      userLastName: 'Lewis',
      userPermission: 'user'
    },
    {
      userID: 4,
      userFirstName: 'Barbara',
      userLastName: 'Mitchell',
      userPermission: 'user'
    },
    {
      userID: 5,
      userFirstName: 'Iman',
      userLastName: 'Zenhom',
      userPermission: 'user'
    },
    {
      userID: 6,
      userFirstName: 'Lezlie',
      userLastName: 'Link',
      userPermission: 'admin'
    },
    {
      userID: 7,
      userFirstName: 'Eden',
      userLastName: 'Maldonado',
      userPermission: 'admin'
    },
    {
      userID: 8,
      userFirstName: 'Dana',
      userLastName: 'Martin',
      userPermission: 'user'
    },
    {
      userID: 9,
      userFirstName: 'Mealie',
      userLastName: 'Haggerty',
      userPermission: 'user'
    },
    {
      userID: 10,
      userFirstName: 'Guy',
      userLastName: 'Ulm',
      userPermission: 'user',
    },
    {
      userID: 11,
      userFirstName: 'Ken O.B.',
      userLastName: 'Link',
      userPermission: 'user'
    }
    ]

}

