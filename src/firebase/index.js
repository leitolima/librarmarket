import firebase from 'firebase/app';
import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBRjZIewZ99G7kXPIRnVPZudwHNsVqlCZc",
//     authDomain: "ecommerce-romero.firebaseapp.com",
//     projectId: "ecommerce-romero",
//     storageBucket: "ecommerce-romero.appspot.com",
//     messagingSenderId: "82948182374",
//     appId: "1:82948182374:web:9c0feb849a55400d82f8a7"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCmI2ixlUEd-E5OS4RBLeseiIpEcJgj6sw",
  authDomain: "librarmarket.firebaseapp.com",
  projectId: "librarmarket",
  storageBucket: "librarmarket.appspot.com",
  messagingSenderId: "511177769394",
  appId: "1:511177769394:web:712c8aa54103351dd5e4ab"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
  return app;
}

export function getFirestore(){
  return firebase.firestore(app)
}

export const generateOrder = (formData, cart, total) => {
  const db = getFirestore();
  const order = db.collection("orders");
  const newOrder = {
    buyer: formData,
    items: cart,
    total: total
  };
  return order.add(newOrder)
}
