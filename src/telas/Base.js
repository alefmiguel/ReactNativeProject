import { View } from "react-native";
import EspaçoCentral from "../componentes/EspaçoCentral";
import Título from "../componentes/Título";

export default function Base() {
    return (
        <View>
            <Título cidade="Maceió," pais="Brazil"></Título>

            <EspaçoCentral atributo='TEMPERATURA' valor='27°C'></EspaçoCentral>
        </View>
    );
};