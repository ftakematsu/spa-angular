# Execução do projeto

Este projeto foi desenvolvido com o [Angular CLI](https://github.com/angular/angular-cli) versão 16.

## Comandos a serem executados na máquina local

`npm install -g @angular/cli`

`npm install -g @yarn`

`yarn install`

Abrir o PowerShell em modo de administrador e executar o comando:

`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`

## Comandos a serem executados no Docker

Antes de executar os comandos a seguir, dê um `yarn install` no seu projeto local.

### Construa a imagem Docker
No terminal, no diretório raiz do projeto (onde está o Dockerfile) execute o seguinte comando para criar a imagem Docker:

`docker build -t spa-angular:latest .`

### Execute o contêiner
Após a construção da imagem, você pode executar o contêiner com o seguinte comando:

`docker run -d -p 4500:4200 -v D:\Workspace\laragon\www\spa-angular:/app --name web-angular spa-angular:latest`

Acesse o sistema em `http://localhost:4500`. 

Para parar o container, execute: `docker stop {ID_CONTAINER}`. Veja a lista de containers em execução em `docker ps`.

Acesse o container em : `docker exec -it web-angular /bin/bash`


# Bibliotecas e recursos utilizados

## Material Angular

Este projeto utiliza os componentes do Material Angular e foi instalado seguindo os passos deste [link](https://material.angular.io/guide/getting-started).

## Tailwind CSS

A instalação do Tailwind CSS foi feito seguindo os passos do tutorial disponível neste [link](https://tailwindcss.com/docs/guides/angular).


## Execução em modo de desenvolvedor

Execute o comando `ng serve` para executar o comando no modo de desenvolvimento. Acesse o sistema no navegador pela URL `http://localhost:4200/`. A aplicação será atualizada automaticamente quando algum arquivo-fonte do projeto for atualizado.

## Code scaffolding

Execute `ng generate component component-name` para gerar automaticamente um conjunto de arquivos via code scaffolding. Você pode gerar diversos arquivos, como `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build --prod` para compilar o projeto e gerar uma versão de produção, isto é, o projeto compilado para HTML/JavaScript. Todos os artefatos estarão na pasta `dist/`.

