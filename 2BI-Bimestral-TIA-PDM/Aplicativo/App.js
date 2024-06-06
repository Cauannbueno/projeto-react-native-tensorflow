import { SafeAreaView, View, FlatList,} from "react-native";
import { useState } from "react";
import { Text } from "react-native-paper";
import styles from "./src/constants/styleIndex";
import classificador from "./src/constants/ia";
import Caixa from "./src/components/Caixa";
import Botao from "./src/components/Botao";
import traducoes from "./src/constants/i18n";

export default function App() {
  const [texto, setTexto] = useState("");
  const [historico, setHistorico] = useState([]);
  const [toxicidade, setToxicidade] = useState(traducoes.port.verificaToxicidade);

  async function click(texto){
    setHistorico([...historico, texto]);
    setToxicidade(await classificador(texto));
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <Text style={styles.titulo}>{toxicidade}</Text>
      <FlatList
        style={styles.flatList}
        data={historico}
        renderItem={({ item }) => (
          <Text children={item} style={{color: "white"}}/>
        )}
      />
        <Caixa placeholder={traducoes.port.placeholder} onChangeText={setTexto} value={texto}/>
        <Botao children={traducoes.port.botao} onPress={() => click(texto)}/>
    </SafeAreaView>
  );
}
