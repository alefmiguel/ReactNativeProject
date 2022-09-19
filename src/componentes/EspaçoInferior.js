import { StyleSheet, Text, View, div } from "react-native";

export default function EspaçoInferior(props) {
    return (
        <View style={styles.viewPai}>
            <View style={styles.diasSemana}>
                <Text style={{ textAlign: 'center' }}> AHSLASLA </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewPai: {
        backgroundColor: '#1985a1',
        width: '100%',
        height: '55%',
        marginTop: 30
    },

    diasSemana: {

    }
})