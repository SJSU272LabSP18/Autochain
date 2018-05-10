import React from "react";
import {rBridge,ajax} from '../helpers/helpers';

class DashboardTabbedNavStub extends React.Component {

  constructor(props) {

    super(props);


    window.logFandango_Analytics = false;

  }

   logout = (e) => {
     e.preventDefault();

     ajax({},function(r){

        window.location.href=  '/logout';

     },'/logout')

  }


  rPush = (e) => {

     if(this.props.push) {

          e.preventDefault();
          this.props.push(e.target.dataset.href);

     } 

  }

	render() {
	
  var admin_menu = null;

	if(this.props.guest === true)
		return null;

  if(this.props.user.role === 'admin') {
    admin_menu = (<div className="admin-sub-sidebar">
            <div className="inner-admin-sub-sidebar">
                  
                  <h5>Cars</h5>  
                  <ul>
                    <li><a onClick={this.rPush} data-href="/dashboard/car/new" href="/dashboard/car/new">Add Car</a></li>
                    <li><a onClick={this.rPush} href="/dashboard/cars">List Cars</a></li>
                  </ul>


                  <h5>Catgory</h5>  
                  <ul>
                    <li><a href="/dashboard/category/new">Add Category</a></li>
                    <li><a href="/dashboard/categories">List Categories</a></li>
                  </ul>


                  <h5>Users</h5>  
                  <ul>
                    <li><a href="/dashboard/user/new">Add User</a></li>
                    <li><a href="/dashboard/users">List Users</a></li>
                  </ul>

                  <h5>Transactions</h5>  
                  <ul>
                    <li><a href="/dashboard/admintransactions">Billings</a></li>
                  </ul>

            </div>
        </div>);


  }

    var loc = window.location.href.split('dashboard');
    loc = loc[loc.length - 1];

    console.log(loc);

		return (
                
                <div>	

                <div className="admin-sidebar">
            <div className="inner-admin-sidebar">
                  
                  <ul className="admin-menu">
                     
                     <li className={loc==='' ? 'active' : ''}>
                       <a href="/dashboard">
                          
                         <svg x="0px" y="0px" viewBox="0 0 64 64" width="64" height="64"><g className="nc-icon-wrapper" fill="#111111" transform="translate(0.5, 0.5)"><path data-cap="butt" data-color="color-2" fill="none" stroke="#111111" strokeWidth="3" strokeMiterlimit="10" d="M24,13.3c2.5-1.1,5.2-1.6,8-1.6 c11.2,0,20.4,9.1,20.4,20.4" strokeLinejoin="miter" strokeLinecap="butt"></path> <path data-cap="butt" data-color="color-2" fill="none" stroke="#111111" strokeWidth="3" strokeMiterlimit="10" d="M11.6,32c0-2.8,0.6-5.5,1.6-8" strokeLinejoin="miter" strokeLinecap="butt"></path> <line data-color="color-2" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="10" x1="27.8" y1="27.8" x2="16.7" y2="16.7" strokeLinejoin="miter"></line> <circle fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="10" cx="32" cy="32" r="30" strokeLinejoin="miter"></circle> <circle data-color="color-2" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="10" cx="32" cy="32" r="6" strokeLinejoin="miter"></circle></g></svg>

                          <span className="label">Dashboard</span>

                       </a>
                     </li> 


                     <li className={(loc === '/bookings') ? 'active' : ''}>
                       <a href="/dashboard/bookings">
                          
                         <svg x="0px" y="0px" viewBox="0 0 32 32" width="32" height="32"><g className="nc-icon-wrapper" fill="#ffffff"><polygon points="28 10 4 10 7 30 25 30 28 10" fill="none" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="miter"></polygon> <path d="M26,6a3.979,3.979,0,0,0-6.575-3.037,3.969,3.969,0,0,0-6.85,0A3.979,3.979,0,0,0,6,6" fill="none" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" data-color="color-2" strokeLinejoin="miter"></path> <line x1="12" y1="30" x2="11" y2="10" fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="2" data-cap="butt" strokeLinecap="butt"></line> <line x1="20" y1="30" x2="21" y2="10" fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="2" data-cap="butt" strokeLinecap="butt"></line></g></svg>

                          <span className="label">My Bookings</span>

                       </a>
                     </li>

                                
                     <li className={(loc.includes('profile') ) ? 'active' : ''}>
                       <a href={"/dashboard/profile/"+this.props.user.slug}>
                          
                          <svg x="0px" y="0px" viewBox="0 0 16 16" width="16" height="16"><g className="nc-icon-wrapper" fill="#ffffff"><path d="M8.5,10.5h-3a5,5,0,0,0-5,5h6" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" data-cap="butt"></path> <circle cx="7" cy="4" r="3.5" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" data-cap="butt"></circle> <polygon points="11 15 8.5 15.5 9 13 13.5 8.5 15.5 10.5 11 15" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" data-cap="butt" data-color="color-2"></polygon></g></svg>

                          <span className="label">Profile</span>

                       </a>
                     </li>

                      <li className={(loc === '/transactions') ? 'active' : ''}>
                       <a href="/dashboard/transactions">
                          
                          <svg x="0px" y="0px" viewBox="0 0 64 64" width="64" height="64"><g className="nc-icon-wrapper" fill="#ffffff"><line data-cap="butt" data-color="color-2" fill="none" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" x1="2" y1="19" x2="25.07" y2="19" strokeLinejoin="miter" strokeLinecap="butt"></line> <line data-cap="butt" data-color="color-2" fill="none" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" x1="2" y1="27" x2="38.851" y2="27" strokeLinejoin="miter" strokeLinecap="butt"></line> <line data-color="color-2" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="10" y1="34" x2="20" y2="34" strokeLinejoin="miter"></line> <polyline data-cap="butt" fill="none" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" points="42,31.494 42,41 2,41 2,9 42,9 42,15 " strokeLinejoin="miter" strokeLinecap="butt"></polyline> <path data-cap="butt" fill="none" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" d="M50,35c-6,0-12-6-12-12h-6 c-4.418,0-8-3.582-8-8v0h18c11.046,0,20,8.954,20,20v0c0,11.046-8.954,20-20,20H20c-3.314,0-6-2.686-6-6v-2h18" strokeLinejoin="miter" strokeLinecap="butt"></path> <path data-cap="butt" fill="none" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" d="M14,47L14,47c-3.314,0-6-2.686-6-6v0" strokeLinejoin="miter" strokeLinecap="butt"></path></g></svg>

                          <span className="label">Transaction</span>

                       </a>
                     </li> 

                     <li>
                       <a href="/logout" onClick={this.logout}>
                          
                          <svg x="0px" y="0px" viewBox="0 0 64 64" width="64" height="64"><g className="nc-icon-wrapper" fill="#ffffff"><path data-cap="butt" data-color="color-2" fill="none" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" d="M22.915,26 C25.464,17.886,33.045,12,42,12c11.046,0,20,8.954,20,20s-8.954,20-20,20c-8.953,0-16.532-5.883-19.082-13.994" strokeLinejoin="miter" strokeLinecap="butt"></path> <line data-cap="butt" fill="none" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" x1="45" y1="32" x2="3" y2="32" strokeLinejoin="miter" strokeLinecap="butt"></line> <polyline fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="13,42 3,32 13,22 " strokeLinejoin="miter"></polyline></g></svg>

                          <span className="label">Logout</span>

                       </a>
                     </li>

                  </ul>

            </div>
        </div>

        {admin_menu}


                </div>  

		);

	}

}


const DashboardTabbedNav = rBridge(DashboardTabbedNavStub); 

export default DashboardTabbedNav;
