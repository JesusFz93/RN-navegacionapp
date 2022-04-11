import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button title="Ir a pagina 2" onPress={() => navigation.navigate('Pagina2Screen')} />

            <View style={styles.viewOpacity}>

                <TouchableOpacity
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }}
                    onPress={() => navigation.navigate('PersonaScreen', { id: 1, nombre: 'Juan' })}
                >
                    <Text style={styles.botonGrandeTexto}>Juan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{ ...styles.botonGrande, backgroundColor: '#ff9427' }}
                    onPress={() => navigation.navigate('PersonaScreen', { id: 2, nombre: 'Maria' })}
                >
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};
