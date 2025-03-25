//criar 2 campos para input do usuario (usuario e senha), botao com pop up, titulo

import { View, Text, StyleSheet, Button, TextInput } from "react-native-web";
export default function Loginn() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput>Login</TextInput>
            <TextInput>Senha</TextInput>
            <Button>Fazer Login</Button>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
    },
    titulo: {
        fontSize: 30,
    },
}
)
