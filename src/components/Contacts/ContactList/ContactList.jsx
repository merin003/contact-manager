import React from 'react'
import {Link} from "react-router-dom";
import {useEffect,useState} from 'react';
import {ContactServices} from "../../../services/ContactServices";
let ContactList = ()=>
{
    
    
      let [state, setState] = useState({
        loading: false,
        contacts: [],
        errorMessage: ''
      });
    
      useEffect(() => {
        const fetchData = async () => {
          try {
                setState({
                    ...state,loading:true});
                
             let response = await ContactServices.getAllContacts();
            setState({
                ...state,
                loading:false
            });
          }
           catch (error) {
           
            setState({
                ...state,
                loading:false,
                errorMessage:error.message
            });
          }
        };
      
        fetchData();
      
      }, []);
      
     
      let { loading, contacts, errorMessage } = state;
    

    
    
    
    
    return(
        <React.Fragment>
           <section className="contact-search" p-3>
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">Contact Manager
                                <Link to ={'/Contacts/add'} className="btn btn-primary ms-2"> 
                                <i className="fa fa-plus-circle me-2"/>New</Link>
                            </p>
                            <p className="fst-italic">A contact manager app built in React serves as a centralized hub for organizing and managing contacts efficiently. Utilizing React's components and state management, it enables users to add, edit, and delete contacts seamlessly.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="row">
                                <div className="col">
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Search Names"/>
                                </div>

                                </div>
                                <div className="col">
                                <div className="mb-2">
                                 <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                </div>

                                </div>
                                
                                
                            </form>

                        </div>
                    </div>
                </div>

            </div>
           </section>

           <section className="contact-list">
            <div className="containder">
                <div className="row  ">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                               <div className="row align-items-center d-flex-justify-content-around">
                               <div className="col-md-4">
                                    <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt=""className=" contact-img"/>
                                </div>
                                <div className="col-md-7">
                                    <ul className="list-group">

                                    <li className="list-group-item list-group-item-action">
                                            Name:<span className="fw-bold">Neha</span>

                                        </li>
                                        
                                    <li className="list-group-item list-group-item-action">
                                            Mobile:<span className="fw-bold">7856432198</span>

                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email:<span className="fw-bold">Neha@gmail.com</span>

                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                    <Link to={'/Contacts/view/:contactId'}className="btn btn-warning my-1">
                                        <i className="fa fa-eye"/>
                                    </Link>
                                    <Link to={'/Contacts/edit/:contactId'}className="btn btn-primary my-1">
                                        <i className="fa fa-pen"/>
                                    </Link>
                                    <button className="btn btn-danger my-1 ">
                                        <i className="fa fa-trash"/>
                                        </button>
                                    

                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                               <div className="row align-items-center d-flex-justify-content-around">
                               <div className="col-md-4">
                                    <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt=""className=" contact-img"/>
                                </div>
                                <div className="col-md-7">
                                    <ul className="list-group">

                                    <li className="list-group-item list-group-item-action">
                                            Name:<span className="fw-bold">Neha</span>

                                        </li>
                                        
                                    <li className="list-group-item list-group-item-action">
                                            Mobile:<span className="fw-bold">7856432198</span>

                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email:<span className="fw-bold">Neha@gmail.com</span>

                                        </li>
                                    </ul>

                                    

                                </div>
                                
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                    <Link to={'/Contacts/view/:contactId'}className="btn btn-warning my-1">
                                        <i className="fa fa-eye"/>
                                    </Link>
                                    <Link to={'/Contacts/edit/:contactId'}className="btn btn-primary my-1">
                                        <i className="fa fa-pen"/>
                                    </Link>
                                    <button className="btn btn-danger my-1 ">
                                        <i className="fa fa-trash"/>
                                        </button>
                                    

                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
        </React.Fragment>

    )
};
export default ContactList;