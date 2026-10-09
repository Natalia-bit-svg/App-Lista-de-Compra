import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./components/Cabecalho";
import FormularioItem from "./components/FormularioItem";
import ListaCompras from "./components/ListaCompras";
import type { ItemDeCompra } from "./types";
export default function App() {
  const [itens, setItens] = useState<ItemDeCompra[]>([
    { id: "1", nome: "Maçã", quantidade: 3 },
    { id: "2", nome: "Arroz", quantidade: 1 },
    { id: "3", nome: "Leite", quantidade: 2 },
  ]);
  function adicionarItem(nome: string, quantidade: number): void {
    const novoItem: ItemDeCompra = {
      id: Date.now().toString(),
      nome,
      quantidade,
    };
    setItens([...itens, novoItem]);
  }
  function removerItem(id: string): void {
    setItens(itens.filter((item) => item.id !== id));
  }
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="dark" />
      <Cabecalho />
      <FormularioItem aoAdicionar={adicionarItem} />
      <ListaCompras itens={itens} aoRemover={removerItem} />
      <View style={estilos.rodape}>
        <Text style={estilos.rodapeTexto}>
          {itens.length} {itens.length === 1 ? "item" : "itens"} na lista
        </Text>
      </View>
    </SafeAreaView>
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  rodape: {
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E9ECF2",
    backgroundColor: "#FFFFFF",
  },
  rodapeTexto: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "500",
  },
});
