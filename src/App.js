import React from 'react';
import './App.css';
import {Routes , Route , Navigate} from 'react-router-dom';
import NavBar from "./components/Navbar/NavBar";
import ContactList from "./components/Contacts/ContactList/ContactList";
import AddContact from "./components/Contacts/AddContact/AddContact";
import ViewContact from "./components/Contacts/ViewContact/ViewContact";
import EditContact from "./components/Contacts/EditContact/EditContact";
import Spinner from './components/Spinner/Spinner';
let App= ()=> {
  return (
    <React.Fragment>
      <Spinner/>
      <NavBar/>
        <Routes>
          <Route path={'/'} element={<Navigate to ={'/Contacts/list'}/>}/>
          <Route path={'/Contacts/list'} element={<ContactList/>} />
          <Route path={'/Contacts/add'} element={<AddContact/>} />
          <Route path={'/Contacts/view/:contactId'} element={<ViewContact/>} />
          <Route path={'/Contacts/edit/:contactId'} element={<EditContact/>} />
        </Routes>
        
        </React.Fragment>
       
     

   
  );
}

export default App;
