import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router, Navigate, createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import './screens/Dashboard'
import './screens/Home'
import './screens/Login'
import Login from './screens/Login';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import ChatbotUi from './screens/chatBot/ChatbotUi';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
   
    children: [
      { element: <Navigate to="user" />, index: true },
      {
        path: "user",
        element: <Login/>,
      },
      {
        path: "Chat",
        element: <ChatbotUi/>,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "usermanagement",
        element: <Dashboard />,
      }       
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
    <HelmetProvider>
    <RouterProvider router={router}>
      
      </RouterProvider>
    </HelmetProvider>
    </Provider>
  );
}

export default App;





// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';
// import store from './redux/store';

// import './App.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './screens/Login';
// import Home from './screens/Home';
// import Dashboard from './screens/Dashboard';
// import ChatbotUi from './screens/chatBot/ChatbotUi';

// function App() {
//   return (
//     <Provider store={store}>
//       <HelmetProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/user" element={<Login />} />
//             <Route path="/Chat" element={<ChatbotUi />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/usermanagement" element={<Dashboard />} />
//           </Routes>
//         </Router>
//       </HelmetProvider>
//     </Provider>
//   );
// }

// export default App;
