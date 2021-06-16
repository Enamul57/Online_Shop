import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/firestore';


const config ={
  apiKey: "AIzaSyA_s8I06ROzepG7W0k3JIzWpsOBb8W7EaY",
  authDomain: "online-eshop.firebaseapp.com",
  projectId: "online-eshop",
  storageBucket: "online-eshop.appspot.com",
  messagingSenderId: "521432950355",
  appId: "1:521432950355:web:f59bc3d10a9301cc0348a6",
  measurementId: "G-196J6DB9L9"
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

