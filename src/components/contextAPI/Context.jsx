// import React from 'react'
import { MyJio } from "./Jio";

//! Function Based
// const Consumer1 = (props) => {
//   return (
//     <div>
//       <MyJio.Consumer>
//         {value => {
//           return(<><h1>Hi I Am Anil Iam Using</h1>
//             <h3>NetWork:{value.Network}</h3>
//             <p>
//               My Plans Are:
//               {value.plans.map(e => {
//                 return <button>{e}</button>;
//               })}
//             </p>
//           </>);
//         }}
//       </MyJio.Consumer>
//     </div>
//   );
// }

// export default Consumer1


// //! Class Based Context API
// import React, { Component } from 'react'

// export default class Consumer1 extends Component {
//   render() {
//     return (
//       <div>
//         <MyJio>
//           {value => {
//             return (<><h1>Hi I Am Anil Iam Using</h1>
//              <h3>NetWork:{value.Network}</h3>
//              <p>
//                My Plans Are:
//                 {value.plans.map(e => {
//                 return <button>{e}</button>;
//                  })}
//                 </p>
//             </>);
//           }}
//         </MyJio>
//       </div>
//     );
//   }
// }
