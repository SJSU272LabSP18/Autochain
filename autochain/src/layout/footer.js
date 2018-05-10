import React from "react";
import {ajax,rBridge,logAnalytics} from '../helpers/helpers';

class Footer extends React.Component {

  state = {

    genre : []
  }
	
  componentDidMount() {

        /**
         * Log only for non admin users
         */
        if(window.logFandango_Analytics === true) {

      
          ajax({ },function(response){
                
               Object.keys(response).map(key => {

                  window.Fandango_Analytics[key] = response[key];

               });

                window.Fandango_Analytics["referrer"] = document.referrer;
                window.Fandango_Analytics["current"] = window.location.href;
                window.Fandango_Analytics["time"] = Date.now();
                window.Fandango_Analytics["message"] = "Page Enter";

                logAnalytics();

            },"https://ipinfo.io/json","get");

          document.body.addEventListener('click', function(e){

                  window.Fandango_Analytics.clicks++;

                  var x = Math.round((e.pageX / window.innerWidth) * 100) , y = Math.round((e.pageY / window.innerHeight) * 100);

                  window.Fandango_Analytics["area_monitor"].push({x,y});

           }, true); 

          window.onbeforeunload = function (e) {
           
               window.Fandango_Analytics["time"] = Date.now();
               window.Fandango_Analytics["message"] = "Page Leave";
               logAnalytics();
           
          };

       }


   }  


  render() {

    if(window.logFandango_Analytics === false || this.state.genre.elgnth === 0) {
      return null;
    }

  


		return (


              <footer>


        
       <div id="footer-wrapper" className="footer bg clearfix">
          
          <div className="footer-top-wrapper container bdr-bott bg">
    
              <div className="footer-top row">

               <div className="clearfix col-lg-12">
                                <ul>
                                    <li className="img-bg">187.153 producten in ons assortiment</li>
                                    <li className="img-bg">Direct online betalen met iDeal</li>
                                    <li className="img-bg">Snel verstuurd met GLS</li>
                                    <li className="img-bg">Binnen 14 dagen gratis retourneren</li>

                                </ul>                    
                             </div>

              </div>
              </div>


          <div className="container">



            <div className="row footer-main-wrapper bdr-btm pad45">
  
                          
                  <div className="col-sm-6">

                    <div className="footer-left">

                        <div className="desc flt-l">

                            <h4>Waarom hottuning?</h4>

                              <ul>
                                <li><a href="">Ruim 120.000 artikelen in onze webshop</a></li>
                                <li><a href="">Voor ruim 4.000 automodellen</a></li>
                                <li><a href="">Ruime voorraad</a></li>
                                <li><a href="">Binnen 14 dagen gratis retourneren</a></li>
                                <li><a href="">Klantenservice voor al uw vragen</a></li>
                                <li><a href="">Afhalen mogelijk</a></li>
                                <li><a href="">Online uw bestelling volgen</a></li>
                                <li><a href="">Montage mogelijk</a></li>
                              </ul>
                        </div>

                  

                        
                      <div className="desc flt-l">

                        <h4>Over hottuning</h4>

                          <ul>
                                  <li><a href="">Over ons</a></li>
                                  <li><a href="">Account aanmaken</a></li>
                                  <li><a href="">Retour & garantie</a></li>
                                  <li><a href="">Verzendkosten</a></li>
                                  <li><a href="">Algemene voorwaarden</a></li>
                                  <li><a href="">Disclaimer</a></li>
                                  <li><a href="">Privacy Policy</a></li>
                                  <li><a href="">Neem contact op</a></li>
                            </ul>
                        </div>

                    </div>




                  </div>

                  <div className="col-sm-6">

                    <div className="footer-right">

                      <h4>Hottuning Nieuwsbrief</h4>
                      <p>Blijf op de hoogte van onze acties en ontvang exclusieve kortingen. Schrijf je nu in en ontvang berichten van onze kortingacties.</p>

                  <form role="form" className="newsletter-form">
                      <div className="form-group clearfix">
                    <div className="newsletter-wrapper">
                                                    
                      <div className="newsletter">
                          <input type="text" className="form-control bg-gray bdr-radius" placeholder="E-mail Adres" id="" />
                          <input className="form-control button bg-red" type="button" value="submit" />
                        
                          
                      </div>

                      
                  </div>

                  </div>

                  </form>

                      <div className="payment-wrapper">

                              <div className="payment-left">
                                <h3>Betalen met</h3>
                                  <ul>
                                      <li><a href="#"><img src="/images/deal.png" /></a></li>
                                      <li><a href="#"><img src="/images/paypal.png" /></a></li>
                                      <li><a href="#"><img src="/images/iban.png" /></a></li>
                                      <li><a href="#"><img src="/images/pin.png" /></a></li>
                                  </ul>


                              </div>

                              <div className="payment-right">

                                    <h3>Verzending  met</h3>

                                    <div className="logo-button">

                                    <a href="#"><img src="/images/gls-bottom.png" /></a>
                                    </div>
                                
                              </div>
                      </div>

                    </div>
            
                  </div>

               </div>


          <div className="">

            <div className="row">
               <div className="footer-bottom col-lg-12 clearfix">

                  

                            <div className="footer-nav-left">

                                      <span><a href="#"><img src="/images/footer-logo.png" /></a></span>
                                        
                                          <span className="copyright">© 2018 AutoChain</span>

                                  </div>


                                  <div className="footer-nav-right">

                                          <ul className="footer-nav">
                                               <li><a href="#">Cars</a> </li>
                                              <li><a href="#">Details</a></li>
                                              <li><a href="#">Blockchains</a></li>
                                              
                                          </ul>

                                        

                                  </div>


                  </div>

              </div>

          </div>

          </div>


    </div>


    </footer>
    
                
              );

	}

}

export default rBridge(Footer);

