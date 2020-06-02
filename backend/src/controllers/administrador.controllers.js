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

UserCtrl.updateCurso = async (req, res) => {
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
     
      con.query("UPDATE curso set Curso=? ,Nivel_Curso=?, Salon=?, CatidadPersonas=?, Maestro=?, Finicio=?,Ftermino=?,Horario=? WHERE Id_Curso=?",[Curso,Nivel,Salon,Cantidad,Maestro,fechaI,fechaT,hora,req.params.id],(err,rows,fields)=>{
        if(!err){
         res.json("guardado")
         //res.send(rows);
        }else{
            console.log(err);
        }
    })
}
module.exports = UserCtrl;
