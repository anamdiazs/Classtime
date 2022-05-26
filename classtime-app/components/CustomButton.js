import React from "react";
import { TouchableOpacity, Text } from 'react-native'

export default function CustomButton(props){
    return(
        
        <TouchableOpacity 
        onPress={props.action}
        style={{
            width: 215,
            height: 41,
            backgroundColor: '#FFFF',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 18,
            borderWidth: 2,
            borderColor: 'black',
            marginBottom: 12,
            paddingBottom: 25,
            paddingTop: 25,
            paddingLeft: 20,
            paddingRight: 20,
        }}>
            <Text style={{fontSize: 17, color:'#898989',}}>{props.text}</Text>
        </TouchableOpacity>
    );
}

    