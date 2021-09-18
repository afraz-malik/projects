import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { doc, getDocs, setDoc, collection } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDByxHls0w5vFTmNVBE_A4lnOHv6w6cllM',
  authDomain: 'projects-255e4.firebaseapp.com',
  projectId: 'projects-255e4',
  storageBucket: 'projects-255e4.appspot.com',
  messagingSenderId: '573732005317',
  appId: '1:573732005317:web:f5432ea0be4160511157ac',
  measurementId: 'G-DHEX5HLJPB',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
var db = getFirestore()

// const projects = [
//   {
//     name: 'Faculty Directory',
//     img: 'images/fyp.png',
//     source: 'https://github.com/afraz-malik/fyp',
//     live: 'https://afraz-malik.github.io/fyp/',
//   },
//   {
//     name: 'Smart Brain',
//     img: 'images/smartbrain.png',
//     source: 'https://github.com/afraz-malik/smartBrain',
//     live: 'https://afraz-malik.github.io/smartBrain/',
//   },

//   {
//     name: 'Skip The Agent',
//     img: 'images/skiptheagent.png',
//     source: 'https://github.com/afraz-malik/skiptheagent',
//     live: 'https://afraz-malik.github.io/skiptheagent/',
//   },
//   {
//     name: 'King Shopping',
//     img: 'images/king.png',
//     source: 'https://github.com/afraz-malik/king-shopping',
//     live: 'https://afraz-malik.github.io/king-shopping/',
//   },
//   {
//     name: 'Optimiz Agents',
//     img: 'images/optimiz.png',
//     source: 'https://github.com/afraz-malik/optimiz-agents',
//     live: 'https://afraz-malik.github.io/optimiz-agents/',
//   },
//   {
//     name: 'Calculator',
//     img: 'images/calculator.gif',
//     source: 'https://github.com/afraz-malik/calculator',
//     live: 'https://afraz-malik.github.io/calculator/',
//   },
//   {
//     name: 'React PHP CRUD',
//     img: 'images/faculty.png',
//     source: 'https://github.com/afraz-malik/react-php-crud',
//     live: 'https://afraz-malik.github.io/react-php-crud/',
//   },
//   {
//     name: 'Robofriends',
//     img: 'images/robots.PNG',
//     source: 'https://github.com/afraz-malik/robofriends',
//     live: 'https://afraz-malik.github.io/robofriends/',
//   },
//   {
//     name: 'Quote Generator',
//     img: 'images/quote.png',
//     source: 'https://github.com/afraz-malik/quote-generator',
//     live: 'https://afraz-malik.github.io/quote-generator/',
//   },
//   {
//     name: 'Responsive CV',
//     img: 'images/cv.png',
//     source: 'https://github.com/afraz-malik/cv-template',
//     live: 'https://afraz-malik.github.io/cv-template/',
//   },
// ]
// export const addInFirebase = () => {
//   projects.map(async (pj) => {
//     try {
//       const docRef = doc(collection(db, 'projects'))
//       await setDoc(docRef, pj)
//     } catch (e) {
//       console.log(e)
//     }
//   })
// }
const pjs = []
export const getDatas = async () => {
  const querySnapshot = await getDocs(collection(db, 'projects'))
  querySnapshot.forEach((doc) => {
    pjs.push(doc.data())
    // console.log(`${doc.id} => ${doc.data()}`)
  })
  return pjs
}
