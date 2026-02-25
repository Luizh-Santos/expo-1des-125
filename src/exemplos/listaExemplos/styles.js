import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: RFPercentage(1),
    },
    botao:{
        borderWidth: RFPercentage(1),

    },
    txtBotao:{
        fontSize: RFPercentage(4),
    }
});

export default style;