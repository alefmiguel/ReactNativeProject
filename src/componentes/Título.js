import { StyleSheet, Text, View } from "react-native";

export default function Título(props) {
    return (
        <View style={styles.titleView}>
            <Text style={styles.titleStyle}>{<strong>{props.estado}</strong>} {props.pais}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 38,
    },
    titleView: {
        left: 40,
    },
});