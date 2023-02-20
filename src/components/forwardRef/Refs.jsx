// import React from "react";

// const ForWardRef = React.forwardRef((props, ref) => {
//   return (
//     <div>
//       <video
//         src={props.value.state}
//         onClick={props.value.playOrPause}
//         ref={ref}
//       ></video>
//     </div>
//   );
// });

// export default ForWardRef;


// !
// import React from "react";
// import { useState } from "react";
// import VIDEO from "../src/assets/hong-kong-2849.mp4";
// import ForWardRef from "./ForWardRef";
// const App = () => {
//   let [state, setState] = useState(VIDEO);
//   let [value, setValue] = useState(true);
//   let ref = React.createRef();
//   let playOrPause = () => {
//     setValue(!value);
//     if (value == true) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   };
//   return (
//     <div>
//       <ForWardRef value={{ state, playOrPause }} ref={ref} />
//     </div>
//   );
// };

// export default App;
