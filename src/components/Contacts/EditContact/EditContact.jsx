import React from 'react';
import {Link} from "react-router-dom";
let EditContact = ()=>
{
    return(
        
        <section className="add-contact p-3">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h4 text-primary fw-bold">Edit Contact</p>
                    <p className="fst-italic">Adding a contact in a React-built manager app is quick: enter name, phone, and email, and it's instantly available for easy access and management.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-4">
                    <form>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Photo Url" />
                        </div>
                        <div className="mb-2">
                            <input type="number" className="form-control" placeholder="Mobile" />
                        </div>
                        <div className="mb-2">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Company Name" />
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Title" />
                        </div>
                        
                        <div className="mb-2">
                        <select className="form-control">
                            <option value="">Select a Group</option>

                        </select>       
                            
                        </div>
                        <div className="mb-2">
                            <input type="submit" className="btn btn-primary" value="Update" />
                            <Link to={'/Contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                        </div>

                    </form>
                </div>
                <div className="col-md-6">
                    <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt=""className="contact-img"/>
                </div>
            </div>
        </div>
    </section>

    )
};
export default EditContact;