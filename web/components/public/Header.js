import React, { useState } from 'react';
import Link from 'next/link'

const Header = () => {

    const [ introState , setIntroState ] = useState(0);
    
    return ( 
        <>
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <Link href={{ pathname:"/"}}>
                            <a href="#" className="navbar-brand d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2 web_title" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                                <strong className="web_title">
                                    <h4>Gindumac</h4>
                                </strong>
                            </a>
                        </Link>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            onClick={() => setIntroState(!introState)} >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>

                <div className={ introState===true ? "collapse bg-dark show" : "collapse bg-dark"} id="navbarHeader">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                        <p className="text-muted">We buy and sell used machinery out of metalworking and plastics processing industries. We focus on used machine tools, used sheet metal machines, used plastics processing machines, used automation equipment and used spare parts as well as complementary machine types of different international manufacturers.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Follow Us</a></li>
                            <li><a href="#" className="text-white">Service</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </header>

        </>
     );
}
 
export default Header;

