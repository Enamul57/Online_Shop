import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/firestore';


const config ={
  apiKey: "AIzaSyAhTwB3BtKKnD8_uuq3uG_NR9t-KM2gAjU",
  authDomain: "gitprojectreact.firebaseapp.com",
  projectId: "gitprojectreact",
  storageBucket: "gitprojectreact.appspot.com",
  messagingSenderId: "439138185366",
  appId: "1:439138185366:web:6092a166081affea3a92b7",
  measurementId: "G-TLM3GDJY2W"
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

// export const addCollectionAndDocuments = async (CollectionKey, ObjData) =>{
//     const collectionRef = firestore.collection(CollectionKey);
//     console.log(collectionRef);
//     const batch = firestore.batch();
//     ObjData.forEach(obj=>{
//         const newDocRef = collectionRef.doc(obj.title);
//         console.log(newDocRef);
//         batch.set(newDocRef,obj);
//     });
//     return await batch.commit();
// }
// export const ConvertCollectionToArray = (collection)=>{
//     const transformedCollection = collection.docs.map( doc=>{
//         const {title,items} = doc.data();
//         return {
//           routeName: encodeURI(title.toLowerCase()),
//           id: doc.id,
//           title,
//           items
//         }
//       }
//     );

//     console.log(transformedCollection);
// }

export const addToFireBase = async (collectionKey,ObjData)=>{
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    ObjData.forEach(obj=>{
      const collectionDoc = collectionRef.doc();
      console.log(collectionDoc);
      batch.set(collectionDoc,obj);
    });
    return await batch.commit();
}
export const ConvertCollectiontoArray= (collection)=>{
    console.log(collection.docs);
    const transformedCollection = collection.docs.map(  doc=>{
        const {title,items} = doc.data();
        return {
          routeName :encodeURI(title.toLowerCase()),
          id : doc.id,
          title,
          items
        }
    }  );
    return transformedCollection.reduce((total,currentValue)=>{
        total[currentValue.title.toLowerCase()] = currentValue;
        return total;
    },{});
    console.log(transformedCollection);
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const SignInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

