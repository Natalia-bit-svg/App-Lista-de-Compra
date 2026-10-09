import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { ItemDeCompra } from '../types';
// TypeScript: tipando as props
type ItemCompraProps = {
item: ItemDeCompra; // o item: { id, nome, quantidade }
aoRemover: (id: string) => void; // função para remover
};
export default function ItemCompra({ item, aoRemover }: ItemCompraProps) {
return (
<View style={estilos.cartao}>
{/* Informações do produto */}
<View style={estilos.info}>
<Text style={estilos.nome}>{item.nome}</Text>
<Text style={estilos.quantidade}>Qtd: {item.quantidade}</Text>
</View>
{/* Botão de remover (TouchableOpacity com feedback visual) */}
<TouchableOpacity
style={estilos.botaoRemover}
onPress={() => aoRemover(item.id)}
activeOpacity={0.7} // opacidade ao tocar
>
<Text style={estilos.botaoRemoverTexto}>✕</Text>
</TouchableOpacity>
</View>
);
}
const estilos = StyleSheet.create({
cartao: {
flexDirection: 'row', // filhos em linha (horizontal)
alignItems: 'center', // centraliza verticalmente
justifyContent: 'space-between', // conteúdo à esquerda, botão à direita
backgroundColor: '#FFFFFF',
paddingVertical: 14,
paddingHorizontal: 16,
borderRadius: 14,
marginBottom: 10,
elevation: 2,
shadowColor: '#000',
shadowOpacity: 0.05,
shadowRadius: 6,
shadowOffset: { width: 0, height: 2 },
},
info: {
flex: 1, // ocupa o espaço disponível
},
nome: {
fontSize: 16,
fontWeight: '600',
color: '#1F2937',
},
quantidade: {
fontSize: 13,
color: '#6B7280',
marginTop: 2,
},
botaoRemover: {
width: 36,
height: 36,
borderRadius: 18, // metade da largura = círculo
backgroundColor: '#FEE2E2', // vermelho claro
alignItems: 'center',
justifyContent: 'center',
},
botaoRemoverTexto: {
fontSize: 16,
fontWeight: 'bold',
color: '#DC2626', // vermelho escuro
},
});