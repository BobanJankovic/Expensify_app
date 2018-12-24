import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { Route, Redirect } from 'react-router-dom'; 


// ovako radi ali nismo dobili ono sto smo zeleli, a to je da ne mozemo pristupiti odredjenim 
// stranicama ako nismo logovani
// da bi onemogucili pristup odredjenim stranicama moramo da destruktuiramo props da njegove 
// sadrzajne propertise da bi nad njima primenili conditional logic



export const PrivateRoute = ({
  isAuthenticated, 
  component: Component,
  ...rest


}) => (
  console.log(`ovo je ${isAuthenticated}`),
  

 <Route {...rest} component = {(props) => (
isAuthenticated ? (
  <Redirect to="/dashboard" />,
  <div>
    <Header />
    
    <Component {...props} />
  </div>
  
     
     
   ) :
   // Uvek mi se izvrsava ovaj kod zato sto ovde ne vidi isAuthenticated uvek ga printuje false
   (
     <Redirect to="/" />
   )
 )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
    
});

export default connect(mapStateToProps)(PrivateRoute);



// 1. CreatePUblic Route
// 2. Redirect to /dashboard if logged in
// 3. Render component if not logged in
// 4. Use it for the LoginPage








/*
   console.log(props.isAuthenticated)

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
*/ 