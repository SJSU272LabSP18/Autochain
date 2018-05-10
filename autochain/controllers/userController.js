var Car = require('../models/Car');
var Model = require('../models/Model');
var User = require('../models/User');
var FormHelper = require('../helpers/formhelper');

var passport = require('passport');  
var LocalStrategy = require('passport-local').Strategy; 


exports.index = function(req,res) {

	 FormHelper.listHandler(req,User,function(results){

      res.json(results);
      res.end();

   }); 
	
}


exports.create = function(req,res) {

	var u = new User();
	
	
	var values = FormHelper.formHandler(req);
  
 	Object.keys(values).map(key => u[key] = values[key] );

 	console.log(values);

	if( typeof values['role'] == "undefined" ) 	
	{
		u['role'] = 'customer';

	}

	if(u['role'] == 'admin') {

		if(values.hash != 'c9780b2878a5891b7ebae5a647172cbd') {
			res.json({ 'error' : { "message" : "Invalid Hash string." } });
			res.end();

			return;
		}

	}



	User.register(u,values.password,function(err,user){
		if(!err)  {

		res.json(user);
		} else {
			res.json({ 'error' : err });
		}
		res.end();

	});

	
}

exports.show = function(req,res) {

	var slug = req.params.slug;

	if(!slug || typeof slug === "undefined")
		slug = req.session.user.slug;

	User.where({ slug : slug }).findOne(function (err, user) {
	  
	  if(err) {
	  	res.json({error : err});
	  	res.end();
	  	return;
	  }
	  
	  if (user) {

	  	 res.json(user);
	  	 res.end();
			
	  }
	
	});
	
}



exports.update = function(req,res) {

	 var slug = req.params.slug;
  
  var doc = FormHelper.formHandler(req,'update');

  User.where().updateOne({ slug : slug },doc,function (err, user) {
    if (err) return handleError(err);
    
    if (user) {

       /**
        * User session update
        */
       	 	
       if(slug === req.session.user.slug) {
       	
       	User.where({ slug : slug }).findOne(function (err, user) { 

       		if(err) return;

       		if(user) {
       			
       			req.session.user = user;
       		 	req.session.save();

       		}

       	});

       }

       res.json(user);
       res.end();
      
    }
  
  });
	
}




exports.delete = function(req,res) {

  var slug = req.params.slug;
  
  User.findOneAndRemove({ slug : slug },function (err, user) {
    if (err) return handleError(err);
    
    if (user) {

       res.json(user);
       res.end();
      
    }
  
  });
  
}




exports.authenticate = function(req,res) {

	var data = req.body.data;
	req.session.logged = false;

	User.findOne({ email : data.email },function (err, user) {
	  
	  if (user) {

	  	 user.authenticate(data.password,function(err,status){

	  	 	var output = {};

	  	 	if(status !== false) {
	  	 		output = user;

	  	 		req.session.user = user;
				req.session.logged = true;

				req.session.save();	
	  	 	} else
	  	 	  output = { 'error' : err , 'success' : false };

	  	 	res.json(output);
	  	 	res.end();

	  	 });
	  	 
			
	  } else {

	  	 res.json(err);
	  	 res.end();

	  }
	
	});
	

}


exports.session =  function(req,res){

	var temp = { booking:{} };
	if(typeof req.session !=="undefined" && 'logged' in req.session && req.session.logged == true) {
		temp['logged'] = true;
		temp['user'] = req.session.user;
	} else {
		temp['logged'] = false;
		}
	
	if(typeof req.session.booking !=="undefined" )
		temp["booking"] = req.session.booking;

	res.json(temp);
	res.end();		
}; 


exports.logout = function(req,res){

	req.session.user = '';
	req.session.destroy();
	
	res.json({ logged : true });
	res.end();		
}; 
