// Configuración de Firebase - REEMPLAZA CON TUS DATOS
const firebaseConfig = {
  apiKey: "AIzaSyAiHV9CjjR2pYwgZfdQxk3cCkTxrtVUeQo",
  authDomain: "global-reportesmtto.firebaseapp.com",
  projectId: "global-reportesmtto",
  storageBucket: "global-reportesmtto.firebasestorage.app",
  messagingSenderId: "130610536156",
  appId: "1:130610536156:web:0a2c65a9d2481ce9af9e19"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
// Inicializar Firestore
const db = firebase.firestore();
const auth = firebase.auth();

