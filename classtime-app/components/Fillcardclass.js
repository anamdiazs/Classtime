import React from "react";
import { TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { View } from "react-native-web";

export default function Fillcardclass(){
    return(
        <View style={{
            width: '100%',
            backgroundColor: '#D1FFB6',
            borderRadius: 18,
            borderWidth: 2,
            borderColor: '#000000',
            borderRightColor: '#000000',
            borderRightWidth: 5,
            borderBottomWidth: 5,
            borderBottomColor: '#000000',
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                paddingRight: 25,
                paddingLeft: 25,
                paddingTop: 20,

            }}>
                <TouchableOpacity style={{ 
                    width: 28, 
                    height: 28, 
                    display: 'flex', }}>
                <Image  style={{ 
                    width: '100%',
                    height: '100%', }}source={require('../assets/equis.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    width: 100,
                    height: 38,
                    borderWidth: 2,
                    borderColor: '#000000',
                    borderRightColor: '#000000',
                    borderRightWidth: 5,
                    borderBottomWidth: 5,
                    borderBottomColor: '#000000',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Inter-Regular',

                }}>Guardar</TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 16,
                    paddingRight: 25,
                    paddingLeft: 25,
                    paddingTop:20,
                }}>Nombre de la clase:</Text>
                <TextInput style={{
                    paddingLeft: 10,
                    marginTop: 5,
                    marginRight: 25,
                    marginLeft: 25,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    height: 25,
                }}></TextInput>
            </View>
            <View>
                <Text style={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 16,
                    paddingRight: 25,
                    paddingLeft: 25,
                    paddingTop:20,
                }}>Horario:</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        paddingTop: 4,
                        fontFamily: 'Inter-Regular',
                        fontSize: 16,
                        paddingLeft: 35,
                    }}>De:</Text>
                    <TextInput style={{
                        paddingLeft: 10,
                        marginTop: 5,
                        marginLeft: 7,
                        backgroundColor: 'white',
                        borderRadius: 8,
                        height: 25,
                        width: '30%',
                        display: 'flex'
                    }}></TextInput>
                    <Text style={{
                        paddingTop: 4,
                        fontFamily: 'Inter-Regular',
                        fontSize: 16,
                        paddingLeft: 7,
                    }}>a</Text>
                    <TextInput style={{
                        paddingLeft: 10,
                        marginTop: 5,
                        marginRight: 7,
                        marginLeft: 7,
                        backgroundColor: 'white',
                        borderRadius: 8,
                        height: 25,
                        width: '30%',
                        display: 'flex',
                    }}></TextInput>
                </View>
                
                
            </View>
            <View>
                <Text
                style={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 16,
                    paddingRight: 25,
                    paddingLeft: 25,
                    paddingTop:20,
                }}>Ubicación:</Text>
                <TextInput
                style={{
                    paddingLeft: 10,
                    marginTop: 5,
                    marginRight: 25,
                    marginLeft: 25,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    height: 25,
                }}></TextInput>
            </View>
            <View>
                <Text
                style={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 16,
                    paddingRight: 25,
                    paddingLeft: 25,
                    paddingTop:20,
                }}>Notas:</Text>
                <TextInput
                style={{
                    paddingLeft: 10,
                    marginTop: 5,
                    marginRight: 25,
                    marginLeft: 25,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    height: 75,
                    marginBottom: 25,
                }}></TextInput>
            </View>
        </View>
    );
}
