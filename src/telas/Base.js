import { View, StyleSheet } from "react-native";
import EspaçoCentral from "../componentes/EspaçoCentral";
import EspaçoInferior from "../componentes/EspaçoInferior";
import Título from "../componentes/Título";

export default function Base() {
    return (
        <View style={{backgroundColor: "#001b2e", flex: 1}}>
            <Título cidade="Maceió," pais="Brazil"></Título>

            <View style={styles.Espaço_Central}>
                <EspaçoCentral atributo='UMIDADE' valor='70%'></EspaçoCentral>
                <EspaçoCentral atributo='TEMPERATURA' valor='26°C'></EspaçoCentral>
            </View>

            <View style={styles.Espaço_Central}>
                <EspaçoCentral atributo='CHUVA' valor='2%'></EspaçoCentral>
                <EspaçoCentral atributo='VENTO' valor='14Km/h'></EspaçoCentral>
            </View>

            <EspaçoInferior />

        </View>
    );
};

const styles = StyleSheet.create({
    Espaço_Central: {
        justifyContent: "center",
        flexDirection: "row",
    }
})