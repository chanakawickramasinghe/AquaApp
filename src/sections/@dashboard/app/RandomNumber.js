// import React, { useState, useEffect } from 'react';
// // import {firebase, addDoc,collection, getDocs  } from "@firebase/firestore";
// // import {firestore } from "../../../firebase";
// // import {firestore} from "../firebase";

// import { firebase } from 'firebase/app';
// import 'firebase/firestore';

// function RandomNumber() {
//   const [number, setNumber] = useState(0);
//   const [min, setMin] = useState(1);
//   const [max, setMax] = useState(10);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//       setNumber(newNumber);

//       // Store the number in Firestore
//       const firestore = firebase.firestore();
//       firestore.collection('randomNumbers').add({
//         number: newNumber,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp()
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [min, max]);

//   return (
//     <div>
//       <p>Random number between {min} and {max}: {number}</p>
//     </div>
//   );


// // const [number, setNumber] = useState(0);
// //   const [min, setMin] = useState(50);
// //   const [max, setMax] = useState(500);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// //       setNumber(newNumber);
// //     }, 1000);

// //     return () => clearInterval(interval);
// //   }, [min, max]);

// //   return (
// //     <div>
// //       <p>Random number between {min} and {max}: {number}</p>
// //     </div>
// //   );


//   }
// export default RandomNumber;


// import React, { useState, useEffect } from 'react';
// import { firestore,  db} from '../../../firebase';

// function RandomNumber() {
//   const [number, setNumber] = useState(0);
//   const [min, setMin] = useState(1);
//   const [max, setMax] = useState(10);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//       setNumber(newNumber);

//       // Store the number in Firestore
//       const firestore = db.firestore();
//       firestore.collection('randomNumbers').add({
//         number: newNumber,
//         timestamp: db.firestore.FieldValue.serverTimestamp()
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [min, max]);

//   return (
//     <div>
//       <p>Random number between {min} and {max}: {number}</p>
//     </div>
//   );
// }

// export default RandomNumber;


// ------------------------------------------------------


import React, { useState, useEffect } from 'react';
import {firestore, db } from '../../../firebase';
// import 'firebase/firestore';

function RandomNumber() {
  const [number, setNumber] = useState(0);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setNumber(newNumber);

      // Store the number in Firestore
      // const firestore = db.firestore();
      // firestore.collection('randomNumbers').add({
      //   number: newNumber,
      //   timestamp: db.firestore.FieldValue.serverTimestamp()
      // });
    }, 1000);

    return () => clearInterval(interval);
  }, [min, max]);

  return (
    <div>
      <p>Random number between {min} and {max}: {number}</p>
    </div>
  );
}

export default RandomNumber;