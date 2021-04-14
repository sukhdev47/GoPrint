const express = require('express');
const ex = express();
const bodyparser= require('body-parser');

ex.use(bodyparser.json());
ex.use(bodyparser.urlencoded({extended:true}));
ex.use(express.static('HTML_Pages'));
const mysql= require('mysql2');
var cors = require('cors');
ex.use(cors());
 
 const con=mysql.createConnection({
	 host:'localhost',
	 user:'root',
	 password:'root@123',
	 database:'GoPrint'
		 
 });

var result;

ex.get('/UserAuth',(req,res)=>{

		con.query("SELECT * FROM Customer WHERE customer_id= ?",[req.query.UserName],(err,res1)=>{
			if(err)
				result=err;
			else
				result=JSON.stringify(res1);
		res.send(result);
		console.log(result);
		});
	//res.send(req.query.a);
});


ex.get('/Zone',(req,res)=>{

		con.query("SELECT * FROM Zone WHERE zip= ?",[req.query.pincode],(err,res1)=>{
			if(err)
				result=err;
			else
				result=JSON.stringify(res1);
		res.send(result);
		console.log(result);
		});
	//res.send(req.query.a);
});

ex.get('/VendorAuth',(req,res)=>{

		con.query("SELECT * FROM Vendor WHERE vendor_id= ?",[req.query.UserName],(err,res1)=>{
			if(err)
				result=err;
			else
				result=JSON.stringify(res1);
		res.send(result);
		console.log(result);
		});
	//res.send(req.query.a);
});

ex.listen(8081,()=>{
	
	console.log("Server is Runnning at port 8081");
});