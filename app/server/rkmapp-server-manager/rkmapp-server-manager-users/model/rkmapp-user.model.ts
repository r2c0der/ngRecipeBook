/**
 * Created by Rayvn on 7/13/2017.
 */



export class User {
  userID: number;
  userFirstName: string;
  userLastName: string;
  userPermission:string;


  constructor(uid: number, ufn: string, uln: string, up){
    this.userID = uid;
    this.userFirstName = ufn;
    this.userLastName = uln;
    this.userPermission = up;

  }

}
