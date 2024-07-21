# Bem-vindo ao ESS Base Project! 🗂 🛠

Este projeto serve como ponto de partida para o desenvolvimento de aplicações utilizando os _frameworks_ de _backend_ e _frontend_ escolhidos pela equipe.

---

## Sobre o Projeto

O Projeto Base de ESS utiliza o conceito de **_[Subtrees]('https://www.atlassian.com/br/git/tutorials/git-subtree')_** do Git para integrar dois repositórios separados, um para o _backend_ e outro para o _frontend_. Esses repositórios são clonados dentro deste projeto, em pastas separadas, permitindo o desenvolvimento simultâneo das camadas de _frontend_ e _backend_.

## Passo a Passo 🚶

### Crie um _Fork_

Se você ainda não tem, faça um _fork_ **[deste repositório](https://github.com/Software-Engineering-Assistantship/ess-base-project)** para a sua conta do GitHub.

### Clone o seu _Fork_

Clone o repositório forkado para o seu ambiente de desenvolvimento local.

### Instale o _Python 3_ 🐍

Certifique-se de ter o _Python_ instalado em seu sistema. Se necessário, faça o download e a instalação do _Python_ em https://www.python.org/.

### Abra o seu projeto localmente 💻

Abra o terminal e navegue até o diretório do seu projeto base.

### Escolha os _Frameworks_ 📝

Para prosseguir com a criação do projeto base, é importante que você e sua equipe tenham decidido previamente quais _frameworks_ de _backend_ e _frontend_ serão utilizados.

#### _Frameworks_ Suportados:

- **_Frontend_:** React ⚛️, Angular 🅰️, Vue.js 🔥 e Next.js 🇳
- **_Backend_:** NodeJS 🚀 e FastAPI ⚡️

Certifique-se de que todos estejam alinhados na escolha dos _frameworks_ antes de prosseguir com o processo de criação do projeto. Isso garantirá que você esteja utilizando as tecnologias desejadas e poderá aproveitar ao máximo o potencial oferecido por cada _framework_ selecionado.

### Crie o Projeto Base 📁

Para criar o projeto, execute o comando abaixo:

```sh
pip install inquirer && python3 ./config/cli.py

```

ou, caso o comando `python3` não exista em sua máquina, execute:

```sh
pip install inquirer && python ./config/cli.py
```

Esse comando instalará a biblioteca [inquirer](https://python-inquirer.readthedocs.io/en/latest/) e executará o arquivo cli.py localizado na pasta config. A partir desse momento, você terá acesso a um processo interativo que irá guiá-lo durante a configuração do projeto.

### Comece a desenvolver! 🚀

Comece a desenvolver sua aplicação utilizando esse projeto base como ponto de partida!
Após a conclusão do processo de criação, o projeto já estará estruturado com os diretórios de _backend_ e _frontend_ separados. Cada um desses projetos é baseado nos _frameworks_ que você escolheu, e eles contêm um arquivo README com instruções detalhadas sobre como configurar e executar cada um deles. Portanto, é altamente recomendado que você leia os respectivos READMEs para obter as informações necessárias. Não deixe essa etapa de lado, pois os READMEs fornecerão orientações valiosas para começar a trabalhar nos projetos de _backend_ e _frontend_ com facilidade.

_Que a força esteja com vocês! 🪐💪✨_

---

## Contribuindo 🤝

Se você tiver sugestões de melhorias ou encontrar problemas no projeto base, sinta-se à vontade para abrir uma issue neste repositório. Sua contribuição é valiosa para aprimorarmos continuamente o projeto.
