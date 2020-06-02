const con = require('../database')

const UserCtrl = {};

UserCtrl.getCursos = async (req, res) => {
   con.query("SELECT * FROM curso",(err,rows,fields)=>{
       if(!err){
        res.json(rows)
        //res.send(rows);
       }else{
           console.log(err);
       }
   })
  
};

UserCtrl.createCurso = async (req, res) => {
    
        var Curso=req.body.Curso;
        var Nivel=req.body.Nivel;
        var Salon=req.body.Salon;
        var Cantidad = req.body.Cantidad;
        var Maestro = req.body.Maestro;
        var fechaI= req.body.fechaI;
        var fechaT= req.body.fechaT;
        var hora= req.body.hora;
      
      var values=[
          [Curso,Nivel,Salon,Cantidad,Maestro,fechaI,fechaT,hora]
      ]
      console.log(values);
      con.query("INSERT INTO curso (Curso, Nivel_Curso,Salon,CatidadPersonas, Maestro, Finicio, Ftermino,Horario) VALUES ?",[values],(err,rows,fields)=>{
        if(!err){
         res.json("guardado")
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
UserCtrl.sesionUser = async (req, res)=>{
  
    con.query('SELECT * FROM users WHERE matricula=?',[req.params.matricula],(err,rows,fields)=>{
        if(!err){
         res.json(rows)
         //res.send(rows);
        }else{
            res.send("No existe en la BD de Administrador")
        }
    })
}
UserCtrl.DeleteCurso = async (req, res) => {
    con.query('DELETE FROM curso WHERE Id_Curso=?',[req.params.id],(err,rows,fields)=>{
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
