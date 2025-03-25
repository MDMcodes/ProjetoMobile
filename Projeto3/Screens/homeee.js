//colocar imagem Gaivotas.jpg como backgroud, 3 textos e mais 4 imagens por uri
import { View, ImageBackground, Text, StyleSheet, Image } from "react-native-web";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function Home() {
    return (
        <ImageBackground source={require('../assets/gaivota.jpg')} style={styles.backgroundImage}>
            <View>
            <Text style={styles.text}>Gaivotas são aves que se alimentam de resto de comida, geralmente em locais urbanos.</Text>
            <Text style={styles.text}>Eles são conhecidos por sua capacidade de sobrevivencia em ambientes urbanos.</Text>
            <Text style={styles.text}>Eles são uma espécie de ave que é encontrada em todo o mundo.</Text>
            </View>
           <View>
           <Image source={{uri:'https://ae01.alicdn.com/kf/He0864968eded40c79e5666ead2cce35c4.jpg'}} style={styles.images} />
            <Image source={{uri:'https://s3.amazonaws.com/media.wikiaves.com.br/images/6603/3066041_60f4b40fb1e6baf366b4d90544ffaf3f.jpg'}} style={styles.images} />
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BzgLqhjPr9xn3rQhqD9QDzksbzT3_sL53w&s'}} style={styles.images} />
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YK2ZViAJn15cOpM1kjFJOPKcacUsZyXZtw&s'}} style={styles.images} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 20,
    },
    images: {
        width: 100,
        height: 100,
    }
});
