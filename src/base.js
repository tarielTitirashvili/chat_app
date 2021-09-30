import React, {createContext} from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBi7eVUOzSFADFm17jlH3AM0JVJLGKz-HA",
  authDomain: "chat-app-auth-test.firebaseapp.com",
  projectId: "chat-app-auth-test",
  storageBucket: "chat-app-auth-test.appspot.com",
  messagingSenderId: "567414222257",
  appId: "1:567414222257:web:a59dba8a65c9bf1fede190",
  measurementId: "G-GD3HBBK2FQ"
});

const firestore = firebase.firestore()
export const chatContext = createContext(null)


export function ChatProvider({children}) {
  return (
    <chatContext.Provider value = {{
      firebase,
      firestore
    }}>
      {children}
    </chatContext.Provider>
  )
}


export default app;