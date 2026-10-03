importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js");
firebase.initializeApp({apiKey:"AIzaSyACMTrvEbIEi9OrWCaodEmcGTGcdyVEosE",authDomain:"sorpresa-para-nicole.firebaseapp.com",projectId:"sorpresa-para-nicole",storageBucket:"sorpresa-para-nicole.firebasestorage.app",messagingSenderId:"426658546390",appId:"1:426658546390:web:4d02e56a326f7349957f77"});
const messaging=firebase.messaging();
messaging.onBackgroundMessage((payload)=>{const n=payload.notification||{}; self.registration.showNotification(n.title||"Tienes una nueva carta 💗",{body:n.body||"Hay una nueva carta para ti.",icon:"/sorpresa-para-ella/icon-192.png"});});
