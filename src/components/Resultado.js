import React from 'react';
import {View,Text} from 'react-native';
import Visor from './Visor';
// export default function(props){
//     return (
//         <View>
//             <Text>Topo</Text>
//         </View>
//     );   
// }

export default props =>{
    return (
        <Visor resultado={props.resultado}/>
    );
}