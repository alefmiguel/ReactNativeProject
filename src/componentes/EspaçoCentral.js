import { StyleSheet, Text, View, div } from "react-native";

export default function EspaçoCentral(props) {
    return (
        <View style={styles.divpai}>
            <View style={styles.DivMenor}>
                {props.atributo}
                <Text style={styles.Text}>
                    {<strong> {props.valor} </strong>}
                </Text>
    
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    DivMenor: {
        backgroundColor: '#1985a1',
        width: 150,
        height: 150,
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    Text: {
        fontSize: 35
    },
    divpai: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})