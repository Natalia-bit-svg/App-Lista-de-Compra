import { View, Text, FlatList, StyleSheet } from 'react-native';
import ItemCompra from './ItemCompra';
import type { ItemDeCompra } from '../types';
// TypeScript: tipando as props
type ListaComprasProps = {
itens: ItemDeCompra[]; // array de itens
aoRemover: (id: string) => void; // função para remover
};
export default function ListaCompras({ itens, aoRemover }: ListaComprasProps) {
return (
<FlatList
data={itens} // array de dados
keyExtractor={(item) => item.id} // chave única por item
renderItem={({ item }) => ( // como renderizar cada item
<ItemCompra item={item} aoRemover={aoRemover} />
)}
ListEmptyComponent={ // o que mostrar quando vazio
<View style={estilos.vazio}>
<Text style={estilos.vazioEmoji}>🧺</Text>
<Text style={estilos.vazioTexto}>Sua lista está vazia</Text>
<Text style={estilos.vazioSubtitulo}> Adicione um produto no campo acima </Text>
</View>
}
ListHeaderComponent={ // cabeçalho interno
<Text style={estilos.rotulo}>Produtos</Text>
}
ListFooterComponent={<View style={estilos.espacador} />}
contentContainerStyle={estilos.conteudo} />);
}
const estilos = StyleSheet.create({
conteudo: {
paddingHorizontal: 20,
},
rotulo: {
fontSize: 14,
fontWeight: '600',
color: '#374151',
marginTop: 20,
marginBottom: 10,
},
espacador: {
height: 20,
},
vazio: {
alignItems: 'center',
paddingVertical: 40,
},
vazioEmoji: {
fontSize: 40,
marginBottom: 8,
},
vazioTexto: {
fontSize: 16,
fontWeight: '600',
color: '#374151',
},
vazioSubtitulo: {
fontSize: 13,
color: '#9CA3AF',
marginTop: 4,
},
});