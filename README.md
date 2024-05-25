# Sistema simples de monitoramento de Lojas

## Resumo
Este projeto surgiu da ideia de colocar em prática alguns dos conceitos aprendidos no curso de Front-end com React da AdaTech. O projeto é um pequeno sistema de monitoramento de lojas que permite visualizar algumas informações em um painel, como o faturamento do mês, a base de clientes, as conversões de clientes e a comparação com outras lojas cadastradas.

O sistema também permite o cadastro e a atualização de algumas informações da loja. Esses dados são armazenados em um arquivo JSON que simula um banco de dados por meio da biblioteca json-server.

Este sistema utiliza a API do Google, possibilitando a exibição de um mapa na tela. Nele, é possível ver a localização das lojas e algumas informações adicionais por meio de um marcador no mapa.

Detalhes Técnicos
Para esse projeto foi utilizado:
Vite: O vite permite criar projetos pré-configurados de forma mais simples.
 <https://vitejs.dev/guide/>

Typescript: O projeto está configurado para usar o typescript. Ele vai possibilitar trabalhar com tipagem no javaScript. 

API Google: O Google oferece uma variedade de soluções que podem ser utilizadas no desenvolvimento de sistemas e aplicativos. Nesse caso, utilizei a api de mapa do Google para poder exibir algumas informações da loja, como por exemplo o endereço.
<https://developers.google.com/maps>

React google maps: react-google-maps é uma biblioteca que permite implementar e manipular a api do google maps de uma forma mais simples. (Obs:. essa versão é antiga e não está mais recebendo atualizações) 
<https://tomchentw.github.io/react-google-maps/#documentation>

Recharts: É uma solução eficiente para plotar gráficos na tela. Foi utilizado para mostrar o gráfico de comparação de vendas do mês entre as lojas na tela principal.
<https://recharts.org/en-US/>

Axios: O axios foi utilizado para facilitar as requisições feitas ao json-server. 
<https://axios-http.com/ptbr/docs/intro>

Json-server: É uma boa solução para simular um backend localmente caso ainda não tenha um backend estruturado ou queira usar apenas para testes simples, que foi o meu caso. Ele permite fazer chamadas do tipo get, post, delete entre outras.

Nanoid: Foi utilizado para poder gerar os id únicos ao cadastrar novas lojas.
<https://www.npmjs.com/package/nanoid>

React-router-dom: Foi utilizado para configurar as rotas da aplicação.
<https://www.npmjs.com/package/react-router-dom>



React-hook-form: Uma forma mais robusta e eficiente para trabalhar com formulários, foi utilizado na criação do formulário de cadastro e edição das lojas.
<https://react-hook-form.com/>

Yup: É uma solução que tem como foco auxiliar na validação dos dados, utilizei ele em conjunto com o react-hook-form para gerenciar a entrada de dados por parte do usuário.
<https://www.npmjs.com/package/yup>

Tailwind CSS: Uma solução para desenvolver telas de forma mais eficiente e flexível.
<https://tailwindcss.com/docs/installation>

React-icons: Foi utilizado para fornecer os ícones utilizados no projeto.
<https://react-icons.github.io/react-icons/>

## Configurações
Caso queira rodar o projeto em sua máquina, basta seguir os passos a seguir.

1 - Clone o projeto para sua máquina
[imagem aqui]

2 - Instale as dependências do projeto
Abra o projeto, em seguida vá até o prompt e cole o comando abaixo.
npm install

[imagem aqui]

3 - Crie o arquivo .env na raiz do projeto


Em seguida, abra o arquivo .env e adicione as referências abaixo
VITE_SOME_API_KEY = "KEY_API_GOOGLEMAPS"
VITE_SOME_BASE_URL = http://localhost:3000/partners

Obs:
VITE_SOME_API_KEY = "KEY_API_GOOGLEMAPS"
Substitua "KEY_API_GOOGLEMAPS" por sua chave api do Google
Caso não tenha uma, use esse link: <https://developers.google.com/maps>

VITE_SOME_API_KEY = "KEY_API_GOOGLEMAPS": vai habilitar o uso do mapa no projeto.
VITE_SOME_BASE_URL = http://localhost:3000/partners: vai habilitar a rota de manipulação do json-server, sem isso não tem como cadastrar ou atualizar as lojas.

Deve ficar assim:
[imagem aqui]

4 - Inicie a aplicação (copie e cole o comando abaixo no prompt)
npm run dev
[imagem aqui]

Obs: por padrão, o vite vai usar o http://localhost:5173/

5 - Inicie o json-server (copie e cole o comando abaixo em um prompt separado do anterior)
npm run backend

6 - Acesse o sistema
http://localhost:5173/

## Veja o vesultado
[vídeo aqui]
