import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import HomePage from '../pages/home';
import Login from '../components/loginForm';
import Logout from '../components/logout';
import Register from '../components/registerForm';
import RegisterAdmin from '../components/registerAdminForm';
import EditUserForm from '../components/editUserForm';

import Dashboard from '../pages/admin/dashboard';

import NotFound from '../pages/notfound';
import NotAllowed from '../pages/notallowed';
 
import Car from '../pages/car/show';
import Cars from '../pages/car/all';
import CarList from '../pages/car/list';
import CarCreate from '../pages/car/create';


import UserList from '../pages/user/list';
import UserCreate from '../pages/user/create';
import UserProfile from '../pages/user/show';

import Category from '../pages/category/all';
import CategoryList from '../pages/category/list';
import CategoryCreate from '../pages/category/create';
import CategoryProfile from '../pages/category/show';


import BookTicket from '../pages/transaction/bookticket';
import Schedule from '../pages/transaction/schedule';
import SeatSelection from '../pages/transaction/seatselection';
import Payment from '../pages/transaction/payment';
import ThankYou from '../pages/transaction/success';

import MyBookings from '../pages/admin/mybookings';
import MyTransactions from '../pages/mytransactions';

import AdminTransactions from '../pages/admintransactions/list';
 

const Router = () => (

   <BrowserRouter>
   		<Switch>
   			<Route exact path="/" component={HomePage} />
   			
   			<Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin/register" component={RegisterAdmin} />
   				
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/profile/:slug" component={EditUserForm} />          

            <Route exact path="/dashboard/cars" component={CarList} />
            <Route exact path="/dashboard/car/new" component={CarCreate} />
            <Route exact path="/dashboard/car/edit/:slug" component={CarCreate} />

            <Route exact path="/dashboard/categories" component={CategoryList} />
            <Route exact path="/dashboard/category/new" component={CategoryCreate} />
            <Route exact path="/dashboard/category/edit/:slug" component={CategoryCreate} />

            <Route exact path="/dashboard/users" component={UserList} />
            <Route exact path="/dashboard/user/new" component={UserCreate} />
            <Route exact path="/dashboard/user/edit/:slug" component={UserCreate} />
            
            <Route exact path="/dashboard/bookings" component={MyBookings} />
            <Route exact path="/dashboard/transactions" component={MyTransactions} />


            <Route exact path="/transaction/schedule" component={Schedule} />
            <Route exact path="/transaction/booktickets" component={BookTicket} />
            <Route exact path="/transaction/seatselection" component={SeatSelection} />
            <Route exact path="/transaction/payment" component={Payment} />
            <Route exact path="/transaction/success/:id" component={ThankYou} />
           
            
            <Route exact path="/user/:slug" component={UserProfile} />
            
            <Route exact path="/cars" component={Cars} />
            <Route exact path="/car/:slug" component={Car} /> 

            <Route exact path="/category" component={Category} />
            <Route exact path="/category/:slug" component={Category} />
            
            <Route exact path="/notallowed" component={NotAllowed} />

            <Route component={NotFound} />

   		</Switch>
   </BrowserRouter>

)

export default Router;