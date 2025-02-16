<h1> AppConstrutora - Configuração e Instalação</h1>

<h2>📌 Como rodar o projeto localmente</h2>

<h3>1️⃣ Pré-requisitos</h3>

<ul>
    <li>Instalar <strong>Node.js</strong> (última versão LTS): <a href="https://nodejs.org/" target="_blank">Node.js Download</a></li>
    <li>Verificar a versão do Node.js instalada:
        <pre><code>node -v</code></pre>
    </li>
    <li>Se a versão estiver desatualizada, atualizar via nvm:
        <pre><code>nvm install --lts
nvm use --lts</code></pre>
    </li>
    <li>Verificar e atualizar <strong>npm</strong>:
        <pre><code>npm -v
npm install -g npm</code></pre>
    </li>
    <li>Instalar e atualizar <strong>Yarn 4 (Berry)</strong>:
        <pre><code>corepack enable
yarn set version berry</code></pre>
    </li>
    <li>Verificar a versão do Yarn:
        <pre><code>yarn --version</code></pre>
    </li>
    <li>Configurar compatibilidade do Yarn Berry com Expo:
        <pre><code>yarn config set nodeLinker node-modules</code></pre>
    </li>
    <li>Instalar <strong>Expo CLI</strong>:
        <pre><code>yarn dlx expo-cli</code></pre>
    </li>
</ul>

<hr>

<h3>2️⃣ Clonar o repositório</h3>

<p>Baixe o código-fonte do projeto e acesse o diretório:</p>

<pre><code>git clone https://github.com/danwolker/app-construtora.git
cd app-construtora</code></pre>

<h3>3️⃣ Instalar dependências</h3>

<p>Execute o seguinte comando para instalar todas as dependências do projeto:</p>

<pre><code>yarn install</code></pre>

<h3>4️⃣ Rodar o projeto</h3>

<p>Para iniciar o servidor do Expo, execute:</p>

<pre><code>yarn expo start</code></pre>

<h3>5️⃣ Rodar no emulador ou dispositivo</h3>

<ul>
    <li>Para rodar no <strong>Android</strong>:
        <pre><code>yarn expo run:android</code></pre>
    </li>
    <li>Para rodar no <strong>navegador</strong>:
        <pre><code>yarn expo start --web</code></pre>
    </li>
</ul>

<hr>

<h3>📌 Dicas úteis</h3>

<ul>
    <li>Se precisar atualizar todas as dependências do projeto:
        <pre><code>yarn up "*" --recursive</code></pre>
    </li>
    <li>Se precisar verificar problemas de compatibilidade no Expo:
        <pre><code>npx expo-doctor</code></pre>
    </li>
    <li>Se houver problemas após atualizar pacotes, tente limpar o cache e reinstalar:
        <pre><code>yarn cache clean
rm -rf node_modules .yarn
yarn install</code></pre>
    </li>
</ul>
