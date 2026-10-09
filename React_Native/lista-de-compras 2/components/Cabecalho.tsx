import { View, Text, StyleSheet } from 'react-native';
export default function Cabecalho() {
return (
<View style={estilos.container}>
<Text style={estilos.emoji}>🛒</Text>
<Text style={estilos.titulo}>Minha Lista de Compras</Text>
<Text style={estilos.subtitulo}>Organize suas compras de forma
simples</Text>
</View>
);
}
const estilos = StyleSheet.create({
container: {
alignItems: 'center', // centraliza horizontalmente
paddingTop: 24,
paddingBottom: 8,
},
emoji: {
fontSize: 36,
marginBottom: 4,
},
titulo: {
fontSize: 24,
fontWeight: 'bold',
color: '#1F2937',
},
subtitulo: {
fontSize: 14,
color: '#6B7280',
marginTop: 4,
},
});