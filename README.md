# PokemonChallenge

Essa aplicação tem como objetivo fornecer o frontend para a aplicação de captura de pokemons.

## Iniciando o projeto

Para iniciar o projeto basta rodar o comando `sudo docker-compose up` no diretório que contem o arquivo `docker-compose.yml`.
A aplicação será servida através da porta 80. Além disso, a api será baixada do dockerhub e iniciada na porta 8080, juntamente com um banco de dados mongodb, o qual aceitará conexões através da porta `27017`.

Para acessar a aplicação, vá para `http://localhost:80`

## Utilizando a aplicação

Após acessar a porta 80, você deve se deparar com um campo juntamente com um botão. Escreva o nome do pokemon que você capturou e então
clique em "Registrar Captura". O id do pokemon, juntamente com a sua imagem serão buscados na api, salvos no banco de dados, devolvidos para
o frontend e imediatamente redenrizados.