import { StyleSheet, Text, View, div } from "react-native";

export default function EspaçoCentral(props) {
    return (
        <View style={styles.divpai}>
            <View style={styles.DivMenor}>
                <Text>{props.atributo}</Text>
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
        elevation: 7
    },
    Text: {
        fontSize: 35,
        fontStyle: 'bold',
        color: 'white',
        textShadow: '1px 1px 4px black'
    },
    divpai: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})