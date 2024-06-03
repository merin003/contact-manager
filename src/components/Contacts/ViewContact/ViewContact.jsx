import React from 'react';
import {Link} from "react-router-dom";
let ViewContact = ()=>
{
    return(
        <React.Fragment>
            <section className="view-contact intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 test-warning">View Contact</p>
                            <p className="fst-italic">Viewing contacts in a React-based manager app is effortless: tap or click to instantly access detailed information and stay connected.</p>
                        </div>
                    </div>

                </div>

            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt=""className="contact-img"/>

                        </div>
                        <div className="col-md-8">
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
                            <li className="list-group-item list-group-item-action">
                            Company:<span className="fw-bold">Neha@gmail.com</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                            Title:<span className="fw-bold">Neha@gmail.com</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                            Group:<span className="fw-bold">Neha@gmail.com</span>
                            </li>

                            
                            </ul>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/Contacts/list'} className="btn btn-warning">Back Button</Link>
                        </div>


                    </div>
                </div>

            </section>
            
        </React.Fragment>

    )
};
export default ViewContact;