import { StyleSheet, Text, View, div } from "react-native";

export default function EspaçoCentral(props) {
    return (
        <View style={styles.divpai}>
            <View style={styles.PrimeiraDiv}>
                {props.atributo}
                <Text style={styles.Text}>
                    {<strong> {props.valor} </strong>}
                </Text>
            </View>

            <View style={styles.SegundaDiv}>
            {props.atributo}
                <Text style={styles.Text}>
                    {<strong> {props.valor} </strong>}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    PrimeiraDiv: {
        backgroundColor: '#6b03fc',
        width: 200,
        height: 150,
        alignItems: 'center',
        borderRadius: 15,
        margin: 50,
        justifyContent: 'center',
        display: "flex",
    },

    Text: {
        fontSize: 65
    },

    SegundaDiv: {
        backgroundColor: '#6b03fc',
        width: 200,
        height: 150,
        alignItems: 'center',
        borderRadius: 15,
        margin: 50,
        justifyContent: 'center',
        display: "flex",
    },

    divpai: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})