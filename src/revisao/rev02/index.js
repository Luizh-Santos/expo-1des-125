import { View, Text, Image } from 'react-native';

import { camisas } from './produtos';

import styles from './styles';


import Card from './card';

function Revisao02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            {/* <Card 
                nome={camisas[0].nome} 
                decricao={camisas[0].decricao} 
                valor={camisas[0].valor} 
                imagem={camisas[0].imagem} 
            /> */}

            {
                camisas.map(item => 
                    <Card
                        nome={item.nome}
                        decricao={item.decricao}
                        valor={item.valor}
                        imagem={item.imagem}
                    />                    
                )
            }



        </View>
    );
}

export default Revisao02;