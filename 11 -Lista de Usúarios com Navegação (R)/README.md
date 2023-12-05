# Prática: Lista de Usuários com Navegação

Esta prática exemplifica como fazer uma listagem de usuários com navegação entre páginas usando [React Router DOM](https://reactrouter.com/en/main) no React.Js.

Nesta prática, as tarefas são:

instalar o React Router DOM usando como base o exercício da aula anterior (“Lista de usuários”);
criar uma pasta pages dentro da pasta src;
criar 3 páginas dentro desta pasta pages;
Home (página que irá conter a lista de usuários);
Details (página que irá exibir os detalhes de cada usuário);
Error (página que será exibida quando o endereço informado na url for inválido);
implementar o componente Router, responsável pelo roteamento;
implementar no componente Item um botão “Ver detalhes”, o qual, ao ser clicado, deve redirecionar o usuário para a página Details;
ao acessar a aplicação:
na página Home, deve-se exibir a lista de usuários;
ao clicar no botão “Ver detalhes”, o usuário deve ser redirecionado para a página que contém os detalhes do usuário específico;
a página Details deve exibir nome, descrição e uma imagem do usuário;
deve ser possível retornar à página ”Home”;
ao acessar uma url inexistente, deve ser exibida a página Error, com a mensagem “Página não encontrada” e uma opção para voltar à página Home.