# Projeto Frontend React - Loja Online

Aplicação de e-commerce desenvolvida em React no âmbito da disciplina de Desenvolvimento Web.

## 🛠️ API Escolhida
**FakeStore API** - [https://fakestoreapi.com](https://fakestoreapi.com)

### Endpoints Usados:
- `GET /products`: Listagem de todos os produtos.
- `GET /products/:id`: Detalhes de um produto específico.
- `GET /products/categories`: Obter categorias para filtros.

## ✨ Funcionalidades Implementadas
- **Listagem de Produtos:** Visualização em grelha com imagem, nome e preço.
- **Detalhe do Produto:** Página dedicada com descrição e opção de compra.
- **Carrinho de Compras:**
  - Adicionar e remover produtos.
  - Alterar quantidades.
  - Cálculo automático de subtotais e totais.
- **Persistência:** O carrinho é salvo no `localStorage` (não se perde ao atualizar a página).
- **Filtros:** Pesquisa/Navegação por categorias de produtos.
- **UX/UI:** Feedback de carregamento (loading) e tratamento de erros de API.

## 🚀 Instruções de Instalação e Execução

Para correr o projeto localmente, segue estes passos:

1. **Clonar o repositório:**
```bash
git clone [https://github.com/Gonca1oCarva1h0/LojaOnline.git](https://github.com/Gonca1oCarva1h0/LojaOnline.git)
cd LojaOnline

2. **Instalar as dependências:**
npm install

3. **Executar o projeto:**
npm run dev

4. **Aceder no browser:**
O terminal irá indicar o link local, normalmente: http://localhost:5173

## 💻 Tecnologias Usadas

-React (Hooks, Context API)
-React Router (Navegação)
-Axios (Consumo de API)
-CSS/Vite

