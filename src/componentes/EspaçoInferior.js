import { StyleSheet, Text, View, div } from "react-native";

export default function EspaçoInferior(props) {
    return (
        <View styles={styles.viewPai}>
            {/* <View style={StyleSheet.diasSemana}>

            </View> */}
        </View>
    )
};

const styles = StyleSheet.create ({
    viewPai: {
        backgroundColor: '#000',
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#000'
    },

    diasSemana: {

    }
})