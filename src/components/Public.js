import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css"

function Public() {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const navigateTo = (path) => {
    setExpanded(false); // Close the navbar before navigating
    window.location.href = path;
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="gradient-underline mr-auto">
            <Nav.Link onClick={() => navigateTo('/Home')}>HOME</Nav.Link>
            <Nav.Link onClick={() => navigateTo('/About')}>ABOUT</Nav.Link>
            <Nav.Link onClick={() => navigateTo('/Skills')}>SKILLS</Nav.Link>
            <Nav.Link onClick={() => navigateTo('/Highlights')}>HIGHLIGHTS</Nav.Link>
            <Nav.Link onClick={() => navigateTo('/Portfolio')}>PORTFOLIO</Nav.Link>
            <Nav.Link onClick={() => navigateTo('/Private')} className="logout">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Public;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

// function Public() {
//   const history = useHistory();

//   const navigateTo = (path) => {
//     history.push(path);
//   };

//   return (
//     <>
//       <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link onClick={() => navigateTo('/Home')}>HOME</Nav.Link>
//             <Nav.Link onClick={() => navigateTo('/About')}>ABOUT</Nav.Link>
//             <Nav.Link onClick={() => navigateTo('/Skills')}>SKILLS</Nav.Link>
//             <Nav.Link onClick={() => navigateTo('/Highlights')}>HIGHLIGHTS</Nav.Link>
//             <Nav.Link onClick={() => navigateTo('/Portfolio')}>PORTFOLIO</Nav.Link>
//             <Nav.Link onClick={() => navigateTo('/Private')} className="logout">LOGOUT</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// }

// export default Public;




// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './Navbar.css';

// function Public() {
//   const navigateTo = (path) => {
//     // Close the navbar when a link is clicked
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     const navbarCollapse = document.querySelector('.navbar-collapse');
    
//     if (navbarToggler.classList.contains('collapsed')) {
//       // Navbar is already collapsed, do nothing
//       return;
//     }

//     navbarToggler.click(); // Simulate a click on the toggler to close the navbar
//     window.location.href = path;
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-transparent">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto nav nav-underline gradient-underline">
//               <li className="nav-item">
//                 <button className="nav-link" onClick={() => navigateTo('/Home')}>
//                   HOME
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link" onClick={() => navigateTo('/About')}>
//                   ABOUT
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link" onClick={() => navigateTo('/Skills')}>
//                   SKILLS
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link" onClick={() => navigateTo('/Highlights')}>
//                   HIGHLIGHTS
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link" onClick={() => navigateTo('/Portfolio')}>
//                   PORTFOLIO
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link logout" onClick={() => navigateTo('/Private')}>
//                   LOGOUT
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Public;