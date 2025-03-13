# Frontend - Paggo OCR Case

Este projeto é o frontend do Paggo OCR Case, desenvolvido com **React** e **TypeScript**, utilizando diversas bibliotecas modernas para otimizar o desenvolvimento e a experiência do usuário.

## 🚀 Tecnologias e Bibliotecas Utilizadas

-   **React** - Biblioteca para construção da interface
-   **TypeScript** - Tipagem estática para um código mais seguro e escalável
-   **Vite** - Ferramenta para build e desenvolvimento rápido
-   **React Query** - Gerenciamento de estado assíncrono
-   **Axios** - Cliente HTTP para chamadas à API
-   **Zod** - Validação de dados de forma segura
-   **React Router Dom** - Roteamento para navegação entre páginas
-   **React Hook Form** - Manipulação e validação de formulários
-   **TailwindCSS** - Estilização eficiente e otimizada
-   **Sonner** - Biblioteca para exibição de notificações

---

## 📦 Instalação e Execução

### Pré-requisitos

Certifique-se de ter instalado:

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

### Passos para rodar o projeto

1. Clone este repositório:

    ```sh
    git clone https://github.com/GuiSilveira/paggo-ocr-frontend-case.git
    ```

2. Acesse a pasta do projeto:

    ```sh
    cd paggo-ocr-frontend
    ```

3. Instale as dependências:

    ```sh
    npm install  # ou yarn install ou pnpm install
    ```

4. Inicie o ambiente de desenvolvimento:
    ```sh
    npm run dev  # ou yarn dev ou pnpm dev
    ```

O projeto estará disponível em `http://localhost:5173/` (porta padrão do Vite).

---

## 📁 Estrutura do Projeto

```
📦 paggo-ocr-frontend
├── 📂 dist            # Arquivos gerados após build
├── 📂 node_modules    # Dependências do projeto
├── 📂 public          # Arquivos estáticos
├── 📂 src             # Código-fonte do projeto
│   ├── 📂 components  # Componentes reutilizáveis
│   ├── 📂 context     # Context API para gerenciamento de estado global
│   ├── 📂 hooks       # Hooks personalizados
│   ├── 📂 lib         # Código utilitário
│   ├── 📂 pages       # Páginas da aplicação
│   ├── 📂 routes      # Configuração de rotas
│   ├── 📂 services    # Chamadas à API
│   ├── 📂 types       # Definições de tipos TypeScript
│   ├── App.tsx       # Componente principal
│   ├── index.css     # Estilos globais
│   ├── main.tsx      # Ponto de entrada da aplicação
│   └── vite-env.d.ts # Configuração do Vite
├── .env               # Configuração de variáveis de ambiente
├── .gitignore         # Arquivos e pastas ignorados pelo Git
├── components.json    # Configuração de componentes
├── eslint.config.js   # Configuração do ESLint
├── index.html         # Template base do projeto
├── package.json       # Dependências e scripts do projeto
├── package-lock.json  # Versões travadas das dependências
├── tsconfig.app.json  # Configuração do TypeScript para a aplicação
├── tsconfig.json      # Configuração principal do TypeScript
├── tsconfig.node.json # Configuração do TypeScript para Node.js
└── vite.config.ts     # Configuração do Vite
```

---

## ✅ Checklist de Funcionalidades

-   [x] Upload de documentos (imagens)
-   [x] Extração de texto via OCR
-   [x] Integração com LLM para fornecer explicações interativas sobre o texto extraído
-   [x] Autenticação de usuários para controle de acesso
-   [x] Interface responsiva e intuitiva
-   [x] Mecanismo de feedback para o usuário (mensagens de erro/sucesso e indicadores de progresso)
-   [x] Exibição de documentos enviados anteriormente
-   [x] Download dos documentos com texto extraído e interações do LLM

---

## 🌍 Deployment

A aplicação está disponível em:
🔗 [Paggo OCR Frontend](https://paggo-ocr-frontend-case-fqh8t93re-guilherme-coutinhos-projects.vercel.app/login)

---

## 🛠️ Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias, como:

```
VITE_API_URL=https://sua-api.com
```

Isso garante que a URL da API pode ser configurada sem modificar diretamente o código-fonte.

---

## 🚀 Melhorias Futuras

-   [ ] Implementar um sistema de permissões mais refinado para usuários
-   [ ] Melhorar a acessibilidade da aplicação com boas práticas de **ARIA**
-   [ ] Criar uma suíte de testes automatizados para garantir a estabilidade do código
-   [ ] Melhorar a interface do usuário com animações e design aprimorado
-   [ ] Suporte para mais formatos de documentos e imagens (ex.: PDF, WEBP)
-   [ ] Adicionar suporte para múltiplos idiomas na extração e explicação de texto

---

## 📜 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.

---

💡 **Dúvidas ou sugestões?** Entre em contato!

📩 Email: [guisilveira.cout@gmail.com](mailto:guisilveira.cout@gmail.com)
🌐 GitHub: [github.com/GuiSilveira](https://github.com/GuiSilveira)
