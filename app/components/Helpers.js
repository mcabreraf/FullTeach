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

  static getNameProf(userId,callback){
    var ProfPath1 = "/Profesores/"+userId+"/name"
    firebase.database().ref(ProfPath1).on('value',(snapshot) => {
      var item1 = ''
      if(snapshot.val()){
        item1 = snapshot.val()
      }
      callback(item1)
    })
  }
  static getEmailProf(userId,callback){
    var ProfPath2 = "/Profesores/"+userId+"/email"
    firebase.database().ref(ProfPath2).on('value',(snapshot) => {
      var item2 = ''
      if(snapshot.val()){
        item2 = snapshot.val()
      }
      callback(item2)
    })
  }
  static getHor1Prof(userId,callback){
    var ProfPath3 = "/Profesores/"+userId+"/hor1"
    firebase.database().ref(ProfPath3).on('value',(snapshot) => {
      var item3 = ''
      if(snapshot.val()){
        item3 = snapshot.val()
      }
      callback(item3)
    })
  }
  static getHor2Prof(userId,callback){
    var ProfPath4 = "/Profesores/"+userId+"/hor2"
    firebase.database().ref(ProfPath4).on('value',(snapshot) => {
      var item4 = ''
      if(snapshot.val()){
        item4 = snapshot.val()
      }
      callback(item4)
    })
  }
  static getDesProf(userId,callback){
    var ProfPath5 = "/Profesores/"+userId+"/des"
    firebase.database().ref(ProfPath5).on('value',(snapshot) => {
      var item5 = ''
      if(snapshot.val()){
        item5 = snapshot.val()
      }
      callback(item5)
    })
  }
  static getPrecioProf(userId,callback){
    var ProfPath6 = "/Profesores/"+userId+"/precio"
    firebase.database().ref(ProfPath6).on('value',(snapshot) => {
      var item6 = ''
      if(snapshot.val()){
        item6 = snapshot.val()
      }
      callback(item6)
    })
  }
  static getMat1Prof(userId,callback){
    var ProfPath7 = "/Profesores/"+userId+"/mat1"
    firebase.database().ref(ProfPath7).on('value',(snapshot) => {
      var item7 = ''
      if(snapshot.val()){
        item7 = snapshot.val()
      }
      callback(item7)
    })
  }
  static getMat2Prof(userId,callback){
    var ProfPath8 = "/Profesores/"+userId+"/mat2"
    firebase.database().ref(ProfPath8).on('value',(snapshot) => {
      var item8 = ''
      if(snapshot.val()){
        item8 = snapshot.val()
      }
      callback(item8)
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

  static setImageUrl(userdId,url){
    var userImaPath = "/Users/"+userId+"/URL"
    return firebase.database().ref(userImaPath).set(url)
  }


 gotData = (data) => {
   var scores = data.val();
   var keys = Object.keys(scores);

 }

}

module.exports = Helpers
