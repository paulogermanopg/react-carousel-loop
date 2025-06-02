# Carousel automático (LOOP) 🐴 
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
## Descrição
Carousel automático que se movimenta sem a intervenção o usuário, utilizando um projeto React criado pelo Vite e estilizado utilizando o Styled-components.

## Como criar nosso Carousel Automático

1. Com a Versão do node v20.17.0 instalada vamos criar nosso projeto com o Vite
   - `npm create vite@latest nome-do-projeto`
   - Escolha o seu framework e sua linguagem padrão :)
   - Instale também o Styled-components:
   -  `npm i styled-components` ou  `yarn add styled-components`

2. Para rodar o seu projeto, basta utilizar
   - `npm run dev`
   - Normalmente ele entrará na porta http://localhost:5173/

3. Modifique o arquivo index.css para que possamos utilizar 100% da altura de nossa aplicação.
   - Em index.css adicione ao final do arquivo:
   - `html, #root { height: 100%; }` 

4. Crie uma pasta chamada "pages" e dentro dela outra chamada "carousel", lá que criaremos o nosso componente principal, como também crie a pasta "images" em assets para usarmos nossas imagens:
   ```bash
    seu-projeto/
    ├─ src/
    │  ├─ assets/
    │  │  └─ images/
    │  ├─ pages/
    │  │  └─ carousel/
    │  ├─ App.jsx
    │  ├─ main.jsx
    ├─ index.html
    ├─ vite.config.js
    ├─ package.json
   ```
 
5. Crie o arquivo "index.tsx" e "styles.ts" na pasta "carousel"
    - Em index.tsx utilizaremos dois hooks (useState e useEffect), para a movimentação automática do carousel, modificando o index selecionado:
    ```jsx
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex - 1 + images.length) % images.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }, []);
    ```
    - Criaremos nosso componente com styled-components, lemebrando de "tipá-los", pois receberemos propriedades para o background e o movimento animado e posição dos itens:
      ```jsx
      type CarouselImageProps = {
        position: "center" | "left" | "right" | "hidden";
      };
      
      type CarouselProps = {
        backgroundImage: string;
      };
      ```

  6. Saberemos qual a Position do item do carousel pela função no index.tsx:
     - Passando a função como parâmetro em nosso componente de redenrização do item, para que cada item dentro do Map tenha a sua position definida com o tempo.
        ```jsx
        const getPosition = (index: number) => {
          if (index === currentIndex) return "center";
          if (index === (currentIndex - 1 + images.length) % images.length)
            return "left";
          if (index === (currentIndex + 1) % images.length) return "right";
          return "hidden";
        };
        ```

  ## Para mais detalhes acesse meu vídeo tutorial em:
    - 

## Prévia
<img src="SolarSystem2.gif" width="300" />

# Instalação
## Passo 1
Clone o projeto
```bash
git clone https://github.com/paulogermanopg/RN_SolarSystem02
```
## Passo 2
Instale os pacotes necessários
```bash
#use node =>18

#usando o npm
npm install

#usando o yarn (recomendado)
yarn install
```

## Passo 3
Se necessário, fixar as fonts usadas para o projeto com:
```bash
npx react-native-asset
```
# Licença do MIT
Copyright (c) 2025 Paulo Germano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
