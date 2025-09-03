<p align="center"> 
  <img width="579" height="139" alt="BookLibrary-Header" src="https://github.com/user-attachments/assets/93430176-8773-4964-bdd3-f478ef95b4dd" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/desenvolvido%20por-Talytha%20Lopes-white" />
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-white" />
  <img src="https://img.shields.io/github/last-commit/TalythaLopes/PersonalBookLibrary" />
</p>

## Resumo
A **Book Library** é uma aplicação web desenvolvida em **Vue 3 + TypeScript**, inspirada no [Skoob](https://www.skoob.com.br/). O objetivo é criar uma **rede social para leitores**, permitindo organizar leituras, registrar livros e interagir com pessoas com o mesmo hobby.  

O projeto está **em andamento** e é, principalmente, um **exercício prático de aprendizado em Vue**. Atualmente, não há backend real — os dados são simulados com **JSON Server**. Apesar disso, já conta com funcionalidades interativas que demonstram preocupações tanto técnicas quanto de experiência do usuário.  

## Sumário
- [Resumo](#resumo)
- [Funcionalidades](#funcionalidades)
- [Demonstração](#demonstração)
  - [Login](#login)
  - [Recuperar Senha](#recuperar-senha)
  - [Citação inicial](#citação-inicial)
  - [Timeline](#timeline)
- [Tecnologias](#tecnologias)
  - [Futuro](#futuro)
- [Executando o projeto](#executando-o-projeto)
  - [Instalação](#instalação)
  - [Execução](#execução)
- [Ideias Futuras](#ideias-futuras)
- [Mais sobre o Projeto](#mais-sobre-o-projeto)

## Funcionalidades
Entre as funcionalidades já implementadas, destacam-se:
- **Autenticação simulada**: login e cadastro de usuário sem backend real  
- **Recuperação de senha via EmailJS**, com envio de código de verificação por email  
- **Banco de dados** simulados com **JSON Server**  
- **Interface responsiva e componentizada** com **Vuetify**  

## Demonstração

### Login
<p align="center">
  <img width="484" height="339" alt="BookLibrary-Initial" src="https://github.com/user-attachments/assets/8fe29fa1-67b9-4e52-a7b5-82e03d9c8819" /> 
</p>

A tela inicial já apresenta a identidade visual da rede social. O fluxo de login e cadastro foi pensado para ser **simples e direto**, exibindo mensagens de erro claras — como nome de usuário já cadastrado ou tentativas de login mal-sucedidas. Após três falhas, o usuário é direcionado à tela de recuperação de senha.

<p align="center"> 
  <img width="40%" alt="BookLibrary-Login" src="https://github.com/user-attachments/assets/c1948109-caa0-4287-a6b4-2847ff522ec5" /> 
  <img width="40%" alt="BookLibrary-Register" src="https://github.com/user-attachments/assets/af305045-19f3-4f2c-bcec-f07e4d28f15e" /> 
</p>

### Recuperar Senha
A recuperação de senha é feita via **EmailJS**: o usuário é direcionado a um modal, informa seu email e recebe um código único para redefinição.  

<p align="center">
  <img width="45%" alt="BookLibrary-RecuperarSenha" src="https://github.com/user-attachments/assets/1f83c92b-1ede-4879-bf36-14c626a71ede" />
</p>

O email segue a paleta de cores da aplicação, reforçando a consistência visual e a atenção aos detalhes.

<p align="center">
  <img width="70%" alt="BookLibrary-Email" src="https://github.com/user-attachments/assets/68342d78-93f8-4243-9ec6-e40d4edadc7d" />
</p>

### Citação Inicial
Pensando na experiência do usuário, foi criada uma tela de boas-vindas que exibe **citações** de forma aleatória. Todas as citações são de escritoras, filósofas e pensadoras, estimulando reflexão, debate e descoberta de novas autoras.

<p align="center">
  <img src="https://github.com/user-attachments/assets/23cb2443-12bc-4d7c-a885-e33141545312" width="50%" alt="BookLibrary Quote" /> 
</p>

### Timeline
A timeline é a página principal da aplicação. Na parte superior, cards exibem atividades do usuário, histórico de leitura e sugestões de novos livros da estante. Também é destacado o **livro mais comentado do dia**, incentivando a interação.  

<p align="center">
  <img width="45%" alt="BookLibrary-Timeline" src="https://github.com/user-attachments/assets/9dba783d-10db-49fd-b761-e67b633ef04b" /> 
</p>

A parte inferior conta com uma **barra de navegação no estilo mobile app**, levando para busca, perfil do usuário e estante de livros cadastrados.																																						  

<p align="center">
  <img width="70%" alt="BookLibrary-Search" src="https://github.com/user-attachments/assets/35d7c084-7071-41b1-8623-7631baf10507" /> 
</p>

## Tecnologias
<p align="center">
  <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js"/></a>
  <a href="https://vuetifyjs.com/"><img src="https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=white" alt="Vuetify"/></a>
  <a href="https://router.vuejs.org/"><img src="https://img.shields.io/badge/Vue%20Router-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue Router"/></a>
  <a href="https://axios-http.com/"><img src="https://img.shields.io/badge/Axios-671ddf?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/></a>
  <a href="https://www.emailjs.com/docs/"><img src="https://img.shields.io/badge/EmailJS-1A1A1A?style=for-the-badge&logo=gmail&logoColor=white" alt="EmailJS"/></a>
  <a href="https://github.com/typicode/json-server"><img src="https://img.shields.io/badge/JSON%20Server-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON Server"/></a>
</p>

A escolha das tecnologias foi motivada pelo **aprendizado prático** em Vue 3 e seu ecossistema. Além de aplicar conceitos técnicos, o projeto também explora **boas práticas de desenvolvimento front-end**.

### Futuro
<p align="center">
  <a href="https://pinia.vuejs.org/"><img src="https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=vue.js&logoColor=35495E" alt="Pinia"/></a>
</p>

O **Pinia** será adotado como gerenciador de estado global, auxiliando na **organização do código** e na **compartilhação de dados entre componentes**.

## Executando o projeto
### Instalação

Clone o repositório e instale as dependências:
```sh
git clone https://github.com/TalythaLopes/PersonalBookLibrary.git
cd PersonalBookLibrary
npm install
```
### Execução

Suba o JSON Server e depois inicie a aplicação:
```sh
json-server --watch server/db.json --port 3000
npm run dev
```

## Ideias Futuras
Este projeto ainda está no início e há várias melhorias planejadas para as próximas etapas de desenvolvimento, como:  

- Refatorar o código para adotar **CSS global**, reduzindo repetição de estilos
- Encapsular o uso do **EmailJS** e implementar expiração do código de recuperação em **15 minutos**
- Finalizar páginas atualmente em construção
- Adicionar **filtros na biblioteca** (por status de leitura e gênero)
- Permitir marcar livros como **lido / não lido**
- Implementar **busca avançada** por nome, ISBN, autor e gênero
- Estruturar e implementar **fóruns de debate**
- Criar um processo para que **autores possam solicitar verificação**  
- Adicionar uma **caixa de sugestões** para feedback direto com a Book Library
- Evoluir para um **backend real** (Node.js, NestJS ou outra tecnologia)

## Mais sobre o Projeto
A **Book Library** é um projeto piloto de uma rede social literária que eu, enquanto leitora e participante ativa da comunidade, gostaria que existisse. Ele foi pensado e estruturado sob a perspectiva de uma **consumidora final**, o que resulta em uma aplicação que busca ser **útil, intuitiva e prazerosa de usar**.  Trata-se de uma aplicação que cresce junto comigo: enquanto aprendo novas tecnologias, testo ideias que imagino em uma plataforma real de leitores. A atenção aos detalhes de **navegação**, **estética** e **experiência do usuário** está presente em cada escolha, refletindo o cuidado em criar não apenas uma ferramenta funcional, mas também um ambiente agradável e inspirador.  
