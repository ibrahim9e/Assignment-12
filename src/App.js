import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products/Products';
import BookingForm from './Pages/Products/BookingForm/BookingForm';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/products">
          <Products></Products>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route exact path="/bookingform">
          <BookingForm></BookingForm>
        </Route>
        <Route exact path="/login">
         <Login></Login>
        </Route>
        <Route exact path="/register">
        <Register></Register>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
