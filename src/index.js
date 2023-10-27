import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './utils/store';
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Body from './components/Body/Body';
import Error from './components/Error/Error';
import Login from './components/Login/Login';


const appRouter = createBrowserRouter([{
  path:"/",
  element:<App />,
  errorElement:<Error />,
  children:[{
    path:"/",
    element:<Body/>
  },{
    path:"/login",
    element:<Login/>
  }]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
