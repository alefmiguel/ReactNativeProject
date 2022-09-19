import { StyleSheet, Text, View, Image } from "react-native";

export default function EspaçoInferior(props) {
    return (
        <View style={styles.viewPai}>
            <View style={styles.diasSemana}>
                <Text style={{ textAlign: 'center' }}> SEGUNDA </Text>

                <Image style={styles.img} source={require('../../assets/partly_cloudy.png')}/>
            </View>

            <View style={styles.diasSemana}>
                <Text style={{ textAlign: 'center' }}> TERÇA </Text>

                <Image style={styles.img} source={require('../../assets/sunny.png')}/>
            </View>

            <View style={styles.diasSemana}>
                <Text style={{ textAlign: 'center' }}> QUARTA </Text>

                <Image style={styles.img} source={require('../../assets/partly_cloudy.png')}/>
            </View>

            <View style={styles.diasSemana}>
                <Text style={{ textAlign: 'center' }}> QUINTA </Text>

                <Image style={styles.img} source={require('../../assets/rain_s_cloudy.png')}/>
            </View>

            <View style={styles.diasSemana}>
                <Text style={{ textAlign: 'center' }}> SEXTA </Text>

                <Image style={styles.img} source={require('../../assets/partly_cloudy.png')}/>
            </View>

            <View style={styles.diasSemana}>
                <Text style={{ textAlign: 'center' }}> SÁBADO </Text>

                <Image style={styles.img} source={require('../../assets/partly_cloudy.png')}/>
            </View>

            <View style={styles.diasSemana}>
                <Text style={{ textAlign: 'center' }}> DOMINGO </Text>

                <Image style={styles.img} source={require('../../assets/partly_cloudy.png')}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewPai: {
        backgroundColor: '#1985a1',
        width: '100%',
        height: '55%',
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        order: 1
    },

    diasSemana: {
        flex: 1,
        margin: 5
    },

    img: {
        width: 100,
        height: 100
    }
})