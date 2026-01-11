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


