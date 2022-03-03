import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

interface Time {
  collect: string
  discard: string
  end: string
  start: string
}

const app = initializeApp({
  apiKey: "AIzaSyAFP9YokNoBG2jUDgfhxqafwjN8f0mlKw4",
  authDomain: "showroom-timetable.firebaseapp.com",
  projectId: "showroom-timetable",
  storageBucket: "showroom-timetable.appspot.com",
  messagingSenderId: "481684736446",
  appId: "1:481684736446:web:f62faf99b5243f0b8291ef"
});

const db = getFirestore();

const storeTimes = async (date:string, times: Time[]) => {
  times.forEach(async (time, idx) => {
    try {
        await setDoc(doc(db, `${date}`, `${idx}`), {
          collect: time.collect,
          discard: time.discard,
      })
    } catch (e) {
      throw e
    }
  })
}

export default storeTimes;