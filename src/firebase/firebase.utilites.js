import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/firestore';


const config ={
  apiKey: "AIzaSyAK9CLXh8VQeOVbntC2W7O0084jKaT7HfE",
  authDomain: "myproject-a31ef.firebaseapp.com",
  projectId: "myproject-a31ef",
  storageBucket: "myproject-a31ef.appspot.com",
  messagingSenderId: "165965704868",
  appId: "1:165965704868:web:e62e5ca12c3ef1f253c031",
  measurementId: "G-GJDJE4X3DF"
};
firebase.initializeApp(config);

export const userProfileDocument =  async (userAuth,additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email} = userAuth;
     const createdAt = new Date();

     try{
      await userRef.set(
       { displayName,
        email,
        createdAt,
        ...additionalData}
      );
     }catch(err){
      console.log("Error creating user",err.message);
     }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const SignInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

