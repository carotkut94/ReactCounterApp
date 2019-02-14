import React from "react";

// state less functional component rather then class, as it does not have any state, and eventHandlers
const NavBar = ({ total }) => {
  // in stateless functional component we cannot use lifecycle hooks
  console.log("NavBar Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        NavBar
        <span className="badge badge-pill badge-secondary m-2">{total}</span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           NavBar
//           <span className="badge badge-pill badge-secondary m-2">
//             {this.props.total}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
