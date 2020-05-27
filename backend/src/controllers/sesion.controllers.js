const con = require('../database')

const UserCtrl = {};

UserCtrl.getUsers = async (req, res) => {
   con.query("SELECT * FROM users",(err,rows,fields)=>{
       if(!err){
        res.json(rows)
        //res.send(rows);
       }else{
           console.log(err);
       }
   })
  
};

UserCtrl.createUser = async (req, res) => {
    
        var name=req.body.name;
        var last_name=req.body.last_name;
        var phone = req.body.phone;
        var city = req.body.city;
        var country= req.body.country;
        var image_profile= req.file;
      console.log(image_profile)
      var values=[
          [name,last_name,phone,city,country,image_profile.path]
      ]
      console.log(values);
      con.query("INSERT INTO users (name, last_name, phone, city, country, image_profile) VALUES ?",[values],(err,rows,fields)=>{
        if(!err){
         res.json(rows)
         //res.send(rows);
        }else{
            console.log(err);
        }
    })
};

UserCtrl.getUser = async (req, res) => {
   
    con.query('SELECT * FROM users WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err){
         res.json(rows)
         //res.send(rows);
        }else{
            console.log(err);
        }
    })
    
}
//Donde inicia Sesion 
UserCtrl.sesionLogin = async (req, res)=>{
  
    con.query('SELECT * FROM sesion WHERE matricula=?',[req.params.matricula],(err,rows,fields)=>{
        if(!err){
         res.json(rows)
         //res.send(rows);
        }else{
            res.send("No existe en la BD en la tabla sesion")
        }
    })
}
UserCtrl.DeleteUser = async (req, res) => {
    con.query('DELETE FROM users WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err){
         res.json(rows)
         //res.send(rows);
        }else{
            console.log(err);
        }
    })
    
}

UserCtrl.updateUser = async (req, res) => {
    var name=req.body.name;
        var last_name=req.body.last_name;
        var phone = req.body.phone;
        var city = req.body.city;
        var country= req.body.country;
        var image_profile= req.file;
      console.log(image_profile)
      var values=[
          [name,last_name,phone,city,country,image_profile.path,req.params.id]
      ]
     
      con.query("UPDATE users set name=? ,last_name=?, phone=?, city=?, country=?, image_profile=? WHERE id=?",[name,last_name,phone,city,country,image_profile.path,req.params.id],(err,rows,fields)=>{
        if(!err){
         res.json(rows)
         //res.send(rows);
        }else{
            console.log(err);
        }
    })
}
module.exports = UserCtrl;
