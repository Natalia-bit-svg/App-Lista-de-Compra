# 🛒 Minha Lista de Compras

Aplicativo desenvolvido com **React Native**, **Expo** e **TypeScript** para organizar uma lista de compras de forma simples e prática.

## 🎯 Objetivo

Permitir que o usuário adicione produtos à lista, informe suas quantidades e remova itens quando necessário.

## ✨ Funcionalidades

- Exibir uma lista inicial de produtos.
- Adicionar produtos informando nome e quantidade.
- Validar o nome do produto antes de adicioná-lo.
- Remover produtos da lista.
- Exibir a quantidade total de itens cadastrados.
- Mostrar uma mensagem quando a lista estiver vazia.

## 🛠️ Tecnologias utilizadas

- **React Native** — criação da interface do aplicativo.
- **Expo** — execução e configuração do projeto.
- **TypeScript** — tipagem dos dados e das propriedades dos componentes.
- **JavaScript/React Hooks (`useState`)** — gerenciamento do estado da lista e dos campos do formulário.

## 📁 Estrutura do projeto

```text
projeto/
├── App.tsx
├── index.tsx
├── types.ts
└── components/
    ├── Cabecalho.tsx
    ├── FormularioItem.tsx
    ├── ListaCompras.tsx
    └── ItemCompra.tsx
```

### Principais arquivos

- **`App.tsx`**: controla a lista de compras, adiciona e remove produtos e organiza a tela principal.
- **`index.tsx`**: registra o componente principal no Expo.
- **`types.ts`**: define a interface `ItemDeCompra`, com `id`, `nome` e `quantidade`.
- **`Cabecalho.tsx`**: exibe o título e o subtítulo do aplicativo.
- **`FormularioItem.tsx`**: contém os campos para informar o nome e a quantidade do produto.
- **`ListaCompras.tsx`**: apresenta os produtos cadastrados e a mensagem de lista vazia.
- **`ItemCompra.tsx`**: exibe cada produto e oferece a opção de removê-lo.

## ▶️ Como executar

É necessário ter o **Node.js** instalado. Com o projeto aberto no terminal:

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o projeto Expo:

   ```bash
   npx expo start
   ```

3. Abra o aplicativo usando o Expo Go em um dispositivo compatível ou execute-o em um emulador configurado.

> Os comandos pressupõem que o projeto Expo já esteja configurado e que o `package.json` esteja presente na pasta principal.

## 📌 Observações

- A lista começa com três produtos de exemplo: maçã, arroz e leite.
- Os dados são mantidos no estado da aplicação; o código fornecido não implementa armazenamento permanente.
- Se a quantidade não for informada ou não puder ser convertida em número, o formulário utiliza o valor `1`.

## 👩‍💻 Projeto

Projeto de estudo para praticar componentes, propriedades (*props*), estado com `useState`, listas e tipagem com TypeScript no React Native.
