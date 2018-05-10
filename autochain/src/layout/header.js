import React from "react";
import {rBridge,ajax} from '../helpers/helpers';


class Header extends React.Component {

  logout = (e) => {
     e.preventDefault();

     ajax({},function(r){

        window.location.href=  '/logout';

     },'/logout')

  }

	render() {

    let nav,logout_button = '';

    if(this.props.userLoggedIn === true) {


       var avatar;
      if(this.props.user.avatar === "" || typeof this.props.user.avatar === "undefined"){
        avatar = <span className="avatar avatar-sm">{this.props.user.first_name[0]}{this.props.user.last_name[0]}</span>
      } else {
        avatar = <img alt="avatar" src={"/uploads/"+this.props.user.avatar} className="avatar avatar-sm" />
      }

       nav = ( <div id="main-area"  className='clearfix'>
                    
                           <div className="user-avatar">
                               {avatar}
                          </div>                          

                     <div className="greet">
                        <a href="/dashboard"><span>Hi, {this.props.user.first_name}</span> </a>
                     </div> 
                    
                    
                 </div>    );
       logout_button = ( <a href="/logout" onClick={this.logout} className="logout-btn">Logout</a>);

    } else {

      nav = ( 
                               
               <ul>
                                                <li>
                                                    <div className="search-form">
                                                                <div className="form-group">
                                                                       <input type="text" className="form-control" id="search" size="20" placeholder="Search by Car..." />
                                                                </div>

                                                            </div>
                                                </li>

                                                 <li><a className="service" href="/register">Register</a></li>
                                                 <li><a href="/login">Login</a></li>
                                                

                                           </ul>

               
                );

    }

		return (

             <div className="jumbotron main-header header-wrapper">

              <div className="header-top clearfix">

                <div className="container">

                  <div className="row">
                <div className="header-left flt-l col-lg-3 clearfix">

                                    <div className="logo-wrapper"><h1><a href="/"><img src="/images/logo.png" /></a></h1></div>

                            </div>

        


                                <div className="header-right col-lg-9 flt-r clearfix">
                                    <div className="login-wrapper">
                                          {nav}

                                          {logout_button}


                                         </div>


                                </div>                
                            </div>

                    </div>

                    </div>


                    <div className="header-main">

                      <div className="container">

                        <div className="row">
                                    <div className="header-left col-lg-6 clearfix">

                                                    <div className="nav-wrapper">
                                                         <div className="nav1">
                                                                    <a href="/" className="menu"><div className="image"><img src="/images/home-icon.png" /></div></a>
                                                                    

                                                                    <a href="#" className="menu ">  <div className="category_txt"><span>Alle categorieen</span></div>
                       <svg className="svg-icon closed-menu" viewBox="0 0 20 20">
                            <path fill="#262728" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
                                c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
                                s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
                                c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
                        </svg>
                        <svg className="svg-icon opened-menu" viewBox="0 0 20 20">
                            <path fill="#262728" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                        </svg>
                        </a>
                         <div className="row menu-category-panel mar-bott bg clearfix">

                         <div className="main-category-menu">
                             <ul>
                                <li><a href=''> Onderstel & Verlaging <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Carrosserie & plaatwerk <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li className=''><a href='#verlichting'>Verlichting & lampen <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href='#exterieur'>Exterieur <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Interieur <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Transport & Bagage <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Motor & Onderhoud <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Uitlaat & Performance <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Koeling en verwarming <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Aandrijving & Wielen <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Remsysteem <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Poetsmiddelen <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Beveiliging & Elektro <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                <li><a href=''>Diversen <i className='glyphicon glyphicon-menu-right'></i> </a></li>
                             </ul>
                         </div>

                         <div className="main-category-submenus">
                                

                                 <div id='exterieur' className='clearfix regular-sub-menu' >
                                       
                                       <div className="col-30 level-1">
                                            <div className="sub-category-menu">
                                             <ul>
                                                <li><a href=''>Brandstofsysteem<i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                                <li><a href=''>Distributie & riemen<i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                                <li><a href='#filters'>Filters<i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                                <li><a href=''>Motor & toebehoren<i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                                <li><a href=''>Motor cilinderkop<i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                                <li><a href=''>Ontsteking<i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                                 <li><a href=''>Smeermiddelen<i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                                <li><a href=''>Turbos & toebehoren<i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                                 <li><a href=''>Overige<i className='glyphicon glyphicon-menu-right'></i> </a></li>
                                             </ul>
                                            </div>
                                       </div> 

                                       <div className="col-30 level-2">

                                            <div className="sub-category-menu" id='filters'>
                                             <ul>
                                                <li><a href=''>Brandstoffilters</a></li>
                                                 <li><a href=''>Carter ontluchtingsfilters</a></li>
                                                 <li><a href=''>Filter accessoirekit</a></li>
                                                <li><a href=''> Filterreinigingskit</a></li>
                                                <li><a href='#Hydrauliekfilter'> Hydrauliekfilter</a></li>
                                                 <li><a href=''>Luchtdroger (remsysteem)</a></li>
                                                 <li><a href=''>Luchtfilters</a></li>
                                                <li><a href=''>Oliefilters</a></li>
                                                <li><a href=''> Universeel Open luchtfilter </a></li>
                                             </ul>
                                            </div>


                                       </div> 

                                       <div className="col-40 level-3">
                                            <div id='Hydrauliekfilter' className="sub-category-menu-final">
                                            <h4>Tuning & Styling</h4>
                                             <ul>
                                                <li><a href=''> Onderstel & VerlagingAchterlichten</a></li>
                                               <li><a href=''>  Achterlichtmaskers</a></li>
                                               <li><a href=''>  Achterlichtspoilers</a></li>
                                                <li><a href=''> Achterlichtspray</a></li>
                                                <li><a href=''> Angel eyes</a></li>
                                                <li><a href=''> Autolampenlak</a></li>
                                                 <li><a href=''>Blacklight</a></li>
                                                 <li><a href=''>Booskijkers</a></li>
                                                 <li><a href=''>CCFL Koplampen</a></li>
                                                 <li><a href=''>Design achterlicht</a></li>
                                                <li><a href=''> Dragon Lights</a></li>
                                                 <li><a href=''>Knightrider lampen</a></li>
                                                <li><a href=''> KoplampenLED </a></li>
                                                <li><a href=''> Kentekenverlichting</a></li>
                                             </ul>
                                            </div>
                                       </div>     


                                </div>    


                         </div>

                         </div>


                                                        </div>

                                                            <div className="nav2">

                                                                <div className="merke">
                                                                        <a href="#"  className="menu"><span>Alle merken</span>
                                                                        
                                                                        <svg className="svg-icon closed-menu" viewBox="0 0 20 20">
                            <path fill="#262728" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
                                c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
                                s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
                                c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
                        </svg>
                        <svg className="svg-icon opened-menu" viewBox="0 0 20 20">
                            <path fill="#262728" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                        </svg>

                                </a>
                                 <div className="row menu-top-panel logo-panel mar-bott bg clearfix">
                                        <div className="logo-lrg clearfix">

                                                    <ul className="border clearfix">

                                                        <li><a className="highlight" href="#"><img src="/images/Mercedes.png" /><h4>Mercedes Benz</h4></a></li>
                                                        <li><a className="highlight" href="#"><img src="/images/Opel.png" /><h4>Opel</h4></a></li>
                                                        <li><a className="highlight" href="#"><img src="/images/bmw.png" /><h4>BMW</h4></a></li>
                                                        <li><a className="highlight" href="#"><img src="/images/volkswagen.png" /><h4>Volkswagen</h4></a></li>
                                                        <li><a className="highlight" href="#"><img src="/images/ford.png" /><h4>Ford</h4></a></li>
                                                        <li><a className="highlight" href="#"><img src="/images/honda.png" /><h4>Honda</h4></a></li>

                                                    </ul>

                                        </div>


                                        <div className="logo-sm">

                                                <ul className="clearfix border">

                                                    <li><a className="highlight-gray" href="#"><img src="/images/chrysler.png" /><h5>Chrysler</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/dacia.png" /><h5>Dacia</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/renault.png" /><h5>Renault</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/rover.png" /><h5>Rover</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/saab.png" /><h5>Saab</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/volvo.png" /><h5>Volvo</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/hyundai.png" /><h5>Hyundai</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/kia.png" /><h5>KIA</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/toyota.png" /><h5>Toyota</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/suzuki.png" /><h5>Suzuki</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/alfa.png" /><h5>Alfa Romeo</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/audi.png" /><h5>Audi</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/nissan.png" /><h5>Nissan</h5></a></li>
                                                </ul>

                                                 <ul className="clearfix border">

                                                    <li><a className="highlight-gray" href="#"><img src="/images/chrysler.png" /><h5>Smart</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/dacia.png" /><h5>Daewoo</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/renault.png" /><h5>Peugeot</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/rover.png" /><h5>Fiat</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/saab.png" /><h5>Subaru</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/volvo.png" /><h5>Cadillac</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/hyundai.png" /><h5>Chevrolet</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/kia.png" /><h5>Daihatsu</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/toyota.png" /><h5>Citroen</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/suzuki.png" /><h5>Mitsubishi</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/alfa.png" /><h5>Seat</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/audi.png" /><h5>Skoda</h5></a></li>
                                                    <li><a className="highlight-gray" href="#"><img src="/images/nissan.png" /><h5>Mazda</h5></a></li>
                                                </ul>

                                        </div>

                                            <a className="graybutt" href="#"><div className="merke-button flt-r"><span>Meer merken</span></div></a>
                              
                                           </div>     
                                                                 </div>

                                                          </div>

                                                        </div>
    
                                        </div>

                                                            <div className="header-right col-lg-6 clearfix">

                                    <div className="admin-rating-wrapper">

                                            <div className="rating_wrapper">
                                              <img src="/images/blockchain-logo.png" alt=""/>
                                         </div>

                                            <div className="gls_wrapper">
                                                        <a href="http://blockchain.org"><div className="category_txt"><span>Powered By</span></div></a>
                                                </div>

                                </div>

                            </div>

                                        </div>


                    
                      


                    </div>

              <div className="menu-wrapper">
                        
                    </div>

              


       </div>


              </div>

                 );

	}

}



export default rBridge(Header);

