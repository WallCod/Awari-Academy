# Prática: Lista de Usuários com Navegação

Esta prática exemplifica como fazer uma listagem de usuários com navegação entre páginas usando React Router DOM no React.Js.


1 - Instalar o React Router DOM usando como base o exercício da aula anterior (“Lista de usuários”);

2 - Criar uma pasta pages dentro da pasta src;

3 - Criar 3 páginas dentro desta pasta pages;

  3.1 - Home (página que irá conter a lista de usuários);
  3.2 - Details (página que irá exibir os detalhes de cada usuário);
  3.3 - Error (página que será exibida quando o endereço informado na url for inválido);
  3.4 - Implementar o componente Router, responsável pelo roteamento;

4 - Implementar no componente Item um botão “Ver detalhes”, o qual, ao ser clicado, deve redirecionar o usuário para a página Details;

5 - Ao acessar a aplicação:

  5.1 - Na página Home, deve-se exibir a lista de usuários;
  5.2 - Ao clicar no botão “Ver detalhes”, o usuário deve ser redirecionado para a página que contém os detalhes do usuário específico;
  5.3 - A página Details deve exibir nome, descrição e uma imagem do usuário;

6 - Deve ser possível retornar à página ”Home”;

7 - Ao acessar uma url inexistente, deve ser exibida a página Error, com a mensagem “Página não encontrada” e uma opção para voltar à página Home.

