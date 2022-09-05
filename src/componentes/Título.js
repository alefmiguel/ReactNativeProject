import { StyleSheet, Text, View } from "react-native";

export default function Título(props) {
    return (
        <View style={styles.titleView}>
            <Text style={styles.titleStyle}>{<strong>{props.cidade}</strong>} {props.pais}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 78,
    },
    titleView: {
        textAlign: 'center',
        padding: 80,
    },
});