# GameFast

Aplicação front-end de uma loja fictícia de jogos, desenvolvida em **Vite + TypeScript**.

O projeto é utilizado como alvo para uma atividade de **testes de performance e carga**, utilizando o [Artillery](https://www.artillery.io/).

---

## 1. Requisitos

- Node.js instalado
- npm instalado
- Git instalado

Para verificar se estão instalados:

```bash
node --version
npm --version
git --version
```

---

## 2. Clonar o projeto

Clone o repositório:

```bash
git clone https://github.com/davifelipef/gamefast.git
```

Entre na pasta:

```bash
cd gamefast
```

---

## 3. Instalar as dependências

Execute:

```bash
npm install
```

---

## 4. Executar a aplicação

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador o endereço apresentado pelo Vite, normalmente:

```text
http://localhost:5173
```

Explore a aplicação e acesse o catálogo e as páginas dos jogos.

---

## 5. Executar o teste de carga

Com a aplicação em execução, abra **outro terminal** dentro da pasta do projeto.

Execute:

```bash
npm run test:load
```

O teste utiliza a configuração localizada em:

```text
tests/load-test.yml
```

O resultado será salvo em:

```text
reports/load-test.json
```

O arquivo é sobrescrito a cada nova execução.

---

## 6. Configuração do teste

Abra:

```text
tests/load-test.yml
```

O teste possui comentários explicando cada configuração.

O principal parâmetro que será alterado durante a atividade é:

```yaml
arrivalRate: 2
```

O `arrivalRate` determina quantos **novos usuários virtuais por segundo** serão iniciados durante o teste.

Na atividade, serão realizados testes com diferentes níveis de carga.

Não altere outras configurações do teste sem orientação do professor.

---

## 7. Visualizar o relatório

Depois de executar o teste, abra no navegador:

```text
http://localhost:5173/reports/report.html
```

O relatório apresenta os dados do arquivo `load-test.json` de forma visual, incluindo:

- usuários virtuais;
- quantidade de requisições;
- taxa de requisições;
- tempo de resposta;
- percentis de resposta;
- quantidade de erros;
- resultados por endpoint.

Para visualizar os resultados de uma nova execução, execute novamente:

```bash
npm run test:load
```

e atualize a página do relatório.

---

## 8. Estrutura do projeto

```text
gamefast/
├── public/
│   └── images/
├── src/
│   ├── main.ts
│   └── style.css
├── tests/
│   └── load-test.yml
├── reports/
│   └── report.html
├── index.html
├── package.json
└── ...
```

O arquivo `reports/load-test.json` **não é versionado**. Ele é criado localmente quando o teste de carga é executado.

---

## 9. Comandos principais

Instalar dependências:

```bash
npm install
```

Executar a aplicação:

```bash
npm run dev
```

Executar o teste de carga:

```bash
npm run test:load
```

Gerar a versão de produção:

```bash
npm run build
```

---

## 10. Atividade

O objetivo deste projeto é permitir a realização de testes de carga em uma aplicação front-end.

Durante a atividade:

1. execute a aplicação;
2. examine o arquivo `tests/load-test.yml`;
3. execute o teste com diferentes valores de `arrivalRate`;
4. visualize os resultados em `report.html`;
5. compare os diferentes níveis de carga;
6. produza o relatório solicitado pelo professor.
