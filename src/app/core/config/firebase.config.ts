import {IFirebase} from "../interfaces/firebase.interface";

export class FirebaseConfig {

  static get devConfig(): IFirebase {
    return {
      apiKey: "AIzaSyCitmGZ7zDo78jSdnwipYkVwS666l36ogM",
      authDomain: "store-9072a.firebaseapp.com",
      databaseURL: "https://store-9072a-default-rtdb.firebaseio.com",
      projectId: "store-9072a",
      storageBucket: "store-9072a.appspot.com",
      messagingSenderId: "327732241999",
      appId: "1:327732241999:web:aecf09741f0afdd5d7ec3a"
    };
  }

}
