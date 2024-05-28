# Sistema simples de monitoramento de Lojas

## 📄 Resumo 
Este projeto nasceu da vontade de aplicar alguns conceitos que aprendi no curso de Front-end com React da AdaTech. Trata-se de um sistema compacto de monitoramento de lojas, que oferece a visualização de algumas informações em um painel, como o faturamento mensal, a base de clientes, as conversões de clientes e a comparação com outras lojas cadastradas através de um gráfico que mostra o faturamento dos três primeiros meses..

O sistema também possibilita o cadastro e a atualização de algumas informações da loja. Esses dados são guardados em um arquivo JSON, que simula um banco de dados através da biblioteca json-server.

Além disso, o sistema faz uso da API do Google, permitindo a exibição de um mapa na tela. Nesse mapa, é possível visualizar a localização das lojas e obter algumas informações adicionais por meio de um marcador no mapa.

> **Obs:** *O faturamento mensal e a taxa de conversão estão sendo gerados automaticamente*

.

https://github.com/AndersonS7/react-dashboard/assets/52304311/87a95e04-e120-4645-b2af-99ffe7635b55

.

## 💻 O que utilizei no projeto

### **Vite** 
> O vite permite criar projetos pré-configurados de forma mais simples. [📓 Documentação](https://vitejs.dev/guide/)

### **Typescript** 
> É um superconjunto que permite ao javaScript poder definir tipos mais facilmente para variáveis, deixando assim a tipagem mais forte.  [ 📓 Documentação](https://www.typescriptlang.org/)

### **API Google**
> O Google oferece uma variedade de soluções que podem ser utilizadas no desenvolvimento de sistemas e aplicativos. Nesse caso, utilizei a api de mapa do Google para poder exibir algumas informações da loja, como por exemplo o endereço.
[📓 Documentação](https://developers.google.com/maps)

### **React google maps** 
> React-google-maps é uma biblioteca que permite implementar e manipular a api do google maps de uma forma mais simples. (Obs:. essa versão é antiga e não está mais recebendo atualizações) 
[📓 Documentação](https://tomchentw.github.io/react-google-maps/#documentation)

### **Recharts**
> É uma solução eficiente que permite plotar gráficos na tela. Foi utilizado para mostrar o gráfico de comparação de vendas do mês entre as lojas na tela principal.
[📓 Documentação](https://recharts.org/en-US/)

### **Axios**
> O axios permite fazer requisições e trabalhar com api de forma mais fácil, além de oferecer uma gama de recursos. Outra alternativa seria utilizar o fetch do próprio JavaScript. Nesse projeto estou usando o axios para fazer as requisições ao json-serve.
[📓 Documentação](https://axios-http.com/ptbr/docs/intro)

### **Json-server**
> É uma boa solução para simular um backend localmente caso ainda não tenha um backend estruturado ou queira usar apenas para testes simples, que foi o meu caso. Ele permite fazer chamadas do tipo get, post, delete entre outras. [📓 Documentação](https://www.npmjs.com/package/json-server)

### **Nanoid**
> Permite gerar códigos de forma automáticos que podem ser utilizados como identificadores únicos. Foi utilizado para poder gerar os id únicos ao cadastrar novas lojas.
[📓 Documentação](https://www.npmjs.com/package/nanoid)

### **React-router-dom**
> Permite configurar e gerenciar as rotas da aplicação. [📓 Documentação](https://www.npmjs.com/package/react-router-dom)

### **React-hook-form**
> Uma forma mais robusta e eficiente para trabalhar com formulários, foi utilizado na criação do formulário de cadastro e edição das lojas.
[📓 Documentação](https://react-hook-form.com/)

### **Yup**
> É uma solução que tem como foco auxiliar na validação dos dados, utilizei ele em conjunto com o react-hook-form para gerenciar a entrada de dados por parte do usuário.
[📓 Documentação](https://www.npmjs.com/package/yup)

### **Tailwind CSS**
> Uma solução para desenvolver telas de forma mais eficiente e flexível.
[📓 Documentação](https://tailwindcss.com/docs/installation)

### **React-icons**
> Foi utilizado para fornecer os ícones utilizados no projeto.
[📓 Documentação](https://react-icons.github.io/react-icons/)
> 
## ⚙️ Configurações
Caso queira rodar o projeto em sua máquina, basta seguir os passos a seguir.

*1. Clone o projeto para sua máquina*

![01](https://github.com/AndersonS7/react-dashboard/assets/52304311/c4815524-4c7f-4a63-a22b-58b9037bd94b)

*2. Instale as dependências do projeto*
> Abra o projeto, em seguida vá até o prompt e cole o comando abaixo. <br/>
`` 
npm install
``

![02](https://github.com/AndersonS7/react-dashboard/assets/52304311/803489da-b95e-4277-b90e-e470d70a8a9f)

*3. Crie o arquivo .env na raiz do projeto*
> Em seguida, abra o arquivo .env e adicione as referências abaixo <br/>
\
VITE_SOME_API_KEY = "KEY_API_GOOGLEMAPS"
\
VITE_SOME_BASE_URL = http://localhost:3000/partners


> **Obs:**
> 
> VITE_SOME_API_KEY = "KEY_API_GOOGLEMAPS"
> Substitua "KEY_API_GOOGLEMAPS" por sua chave api do Google
Caso não tenha uma, use o link a seguir para conseguir uma. [API Google](https://developers.google.com/maps)

> VITE_SOME_API_KEY = "KEY_API_GOOGLEMAPS": vai habilitar o uso do mapa no projeto.
> \
> VITE_SOME_BASE_URL = http://localhost:3000/partners: vai habilitar a rota de manipulação do json-server, sem isso não tem como cadastrar ou atualizar as lojas.

![image](https://github.com/AndersonS7/react-dashboard/assets/52304311/34d55e21-4776-4d4d-9a49-fc4e2e18c7d5)

*4. Inicie a aplicação (copie e cole o comando abaixo no prompt)*
\
``
npm run dev
``
> Obs: por padrão, o vite vai usar o http://localhost:5173/

*5. Inicie o json-server (copie e cole o comando abaixo em um prompt separado do anterior)*
\
``
npm run backend
``

*6. Acesse o sistema*
> http://localhost:5173/

## 📱 Onde me encontrar 
[📓 Linkedin](https://www.linkedin.com/in/andersonsilva7/)


