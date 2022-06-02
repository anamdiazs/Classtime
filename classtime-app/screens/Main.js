import { StatusBar } from 'expo-status-bar';
import React, { useEffect , useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { UserContext} from '../navigation/AuthProvider'


const getCurrentDate=()=>{
  var day = new Date().getDay();
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  switch(day){
    case 1: 
      day = 'Lunes'; 
      break;
    case 2: 
      day = 'Martes'; 
      break;
    case 3: 
      day = 'Miercoles'; 
      break;
    case 4: 
    day = 'Jueves'; 
      break;
    case 5: 
      day = 'Viernes'; 
      break;
    case 6: 
      day = 'Sábado'; 
      break;
    case 7: 
      day = 'Domingo'; 
      break;
    default:
      day = 'Non fund';
  }
  switch(month){
    case 1: 
      month = 'Enero'; 
      break;
    case 2: 
      month = 'Febrero'; 
      break;
    case 3: 
      month = 'Marzo'; 
      break;
    case 4: 
      month = 'Abril'; 
      break;
    case 5: 
      month = 'Mayo'; 
      break;
    case 6: 
      month = 'Junio'; 
      break;
    case 7: 
      month = 'Julio'; 
      break;
    case 8: 
      month = 'Agosto'; 
      break;
    case 9: 
      month = 'Septiembre'; 
      break;
    case 10: 
      month = 'Octubre'; 
      break;
    case 11: 
      month = 'Noviembre'; 
      break;
    case 12: 
      month = 'Diciembre'; 
      break;
    default:
      day = 'Non fund';
  }

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  return day + ', ' + date + ' de ' + month;//format: dd-mm-yyyy;
}

const getCurrentHour=()=>{
  var hour = new Date().getHours();
  var minutes = new Date().getMinutes();

  return hour + ':' + minutes;
}

var hora = getCurrentHour()
var fecha = getCurrentDate()

export default function Main({ navigation }) {
  /* En esta sección con el setOptions puedes manipular la barra superior de forma
  independiente en vez de hacerlo en el App.js  */
	const {userInfo, setUserInfo} = useContext(UserContext)
	const picture = userInfo.picture
  useEffect(function(){
    navigation.setOptions({ headerShow: true});
  });

  return (
      <View style={styles.container}>
        <View style={styles.navcont}>
          <View style={styles.menucont}>
            <Image
            style={styles.custom_image}
            source={require('../assets/Menuicono.png')}/>
          </View>
          <View style={styles.profilecont}>
            <Image
            style={styles.profile_image}
            source={{uri:`${picture}`}}/>
          </View>
        </View>
        <StatusBar style="dark"></StatusBar>
        <Text style={styles.displayfecha}> {fecha} </Text>
        <Text style={styles.displayhora}>{hora}</Text>
			<TouchableOpacity style={styles.buttonconatiner} onPress={() => navigation.navigate('Event')}>
				<Image  style={styles.addbutton}source={require('../assets/button-add.png')}/>
			</TouchableOpacity>
      </View>
  );
}




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  custom_image: {
    width: 35,
    height: 35,
  },
  profile_image: {
    width: 42,
    height: 42,
    borderRadius: 180,
    borderWidth: 2,
  },
  navcont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 20,
    gap: 10,
    width: '100%',
  },
  profilecont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    gap: 10,
  },
  menucont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 10,
  },
  displayhora: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 44,
    color: '#42EB9A',
  },
  displayfecha: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#000000',
  },
  addbutton:{
    width: '100%',
    height: '100%',
  },
  buttonconatiner:{
    width: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    marginRight: 33,
    marginTop: '90%',
    

  }

});
