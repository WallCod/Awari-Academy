# Prática: Lista de Usuários Aprimorada

![Layout a ser reproduzido]()

Esta prática exemplifica como aplicar boas práticas a projetos React.js.

Esta prática usará como base o exercício da aula anterior, “Lista de usuários”, com navegação entre páginas. As tarefas são:

1 - Adicionar à configuração do ESLint, que já vem com o Create React App, as seguintes regras:
	semi com o chave/valor “error” e “always”, para sempre utilizar “;” no projeto;
2 - Quotes com o chave/valor “error” e “single”, para sempre utilizar aspas simples no projeto;
3 - Adicionar o comando lint aos scripts do projeto eslint ./src/**/*.{js,jsx};
4 - Criar o arquivo .editorconfig com uma configuração padrão, para padronizar a indentação do código;
5 - Instalar o CommitLint com @commitlint/config-conventional para estender o padrão Conventional Commits;
6 - Instalar o Husk;
7 - Adicionar o hook pre-commit para executar o comando nom run lint;
8 - Adicionar o hook commit-msg para validar as mensagens de commit.
