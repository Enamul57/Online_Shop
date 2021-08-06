import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/firestore';


const config ={
  apiKey: "AIzaSyA4iWoQSURSVaMG30dcmtf2Ek2QR6bnBus",
  authDomain: "letsroll-efd98.firebaseapp.com",
  projectId: "letsroll-efd98",
  storageBucket: "letsroll-efd98.appspot.com",
  messagingSenderId: "348662637936",
  appId: "1:348662637936:web:3795f72dec590851f3dbb5",
  measurementId: "G-MPSR6P0JTY"
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

