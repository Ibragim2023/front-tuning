import React from 'react';
import Header from './Components/Layout/Header/Header';
import Main from './Components/Pages/main';
import Footer from './Components/Layout/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import Contacts from './Components/Pages/contacts/contacts';
import Company from './Components/Pages/company/company';
import SigninPage from './Components/Pages/Sign/SigninPage';
import { Service } from './Components/Pages/Service/Service';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<Service />}/>
          <Route path='/company' element={<Company />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/signIn' element={<SigninPage />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;