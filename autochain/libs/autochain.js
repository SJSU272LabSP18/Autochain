'use strict';

const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const MemoryCardStore = require('composer-client').MemoryCardStore;


// these are the credentials to use to connect to the Hyperledger Fabric
let cardname = 'admin@autochain-1';


/** Class for the land registry*/
class AutoChain {

   /**
    * Need to have the mapping from bizNetwork name to the URLs to connect to.
    * bizNetwork nawme will be able to be used by Composer to get the suitable model files.
    *
    */
    constructor() {
    	
        this.bizNetworkConnection = new BusinessNetworkConnection();
       

    }

   /** 
    * @description Initalizes the LandRegsitry by making a connection to the Composer runtime
    * @return {Promise} A promise whose fullfillment means the initialization has completed
    */
    async init() {
    	console.log('test 3');
        this.businessNetworkDefinition = await this.bizNetworkConnection.connect(cardname);
        console.log('testing... ',cardname);
         console.log('AutoChain:<init>', 'businessNetworkDefinition obtained', this.businessNetworkDefinition.getIdentifier());
    }

    async getVehicles() {

    	const METHOD = 'getVehicles';

        let vehcileRegistry;
        // get the land title registry and then get all the files.

        try {
            
            let vehcileRegistry = await this.bizNetworkConnection.getAssetRegistry('org.acme.autochain.Vehicle');
           
            let aResources = await vehcileRegistry.resolveAll();
          

            
            return aResources;
        } catch(error) {
            console.log(error);
            this.log.error(METHOD, 'uh-oh', error);
        }

    }

   /** 
    * Listen for the sale transaction events
    */
    listen() {
       
    }

  
}
module.exports = AutoChain;