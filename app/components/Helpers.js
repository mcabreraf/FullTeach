import * as firebase from 'firebase';

class Helpers {

  static getName(userId, callback){
    var userNamePath = "/Users/"+userId+"/Name"
    firebase.database().ref(userNamePath).on('value',(snapshot) => {
      var name = ''
      if(snapshot.val()){
        name = snapshot.val()
      }
      callback(name)
    })
  }

  static getProfessor(userId, callback){
    var userProfPath = "/Users/"+userId+"/Professor"
    firebase.database().ref(userProfPath).on('value',(snapshot) => {
      var namep = ''
      if(snapshot.val()){
        namep = snapshot.val()
      }
      callback(namep)
    })
  }

 static getMaterias(){
   var matsPath = firebase.database().ref("/Materias/");
   return(mathsPath)
 }

 static getMateria(){

 }

}

module.exports = Helpers
