#A simple GraphQL Schema-Query test

##Running Locally

To run locally you just need clone this repo and follow theses steps:

`Run yarn to install dependencies $ yarn`

After that...

`Run yarn start to run app locally $ yarn start`

After all these commands you just need to run in your browser with address http://localhost:4000

This will open the 'GRAPHQL PLAYGROUND', you can test the queries below:

```
query {

ola
horaAtual
usuarioLogado {
id
nome
email
salario
}

    produtoEmDestaque {
    nome3
    preco
    desconto
    precoComDesconto
    }

numerosMegaSena

usuarios {

id

nome

email

}

usuarios{

nome

perfil{

nome

}

}

usuario(id:1){

nome

perfil {

nome

}

}

usuario(id:3) { ... usuarioCompleto }

usuarios {
...usuarioCompleto
}
}

fragment usuarioCompleto on Usuario {
id nome email idade salario vip perfil { nome }
}
```

If you want to comment the line just use your code editor!

### Made with :hearts: by Gregori Spielmann
