import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';


export default function ListaExemplos(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplos</Text>

            <TouchableOpacity style={styles.botao}
            onPress={() => navigation.navigate('Ex1')}>
                <Text style={styles.txtBotao}>Exemplo 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => navigation.navigate('Ex2')}>
                <Text style={styles.txtBotao}>Exemplo 2</Text>
            </TouchableOpacity>
        </View>
    );
}