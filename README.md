# Miguel Castro e Silva · site

Site do Chef Miguel Castro e Silva, feito pela MA Webs. React + Vite.

A versão de trabalho publicada está em https://chefemiguelv1.github.io/

## Correr no computador

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
```

## Onde está cada coisa

- `src/components/`: uma componente por secção (Bar, Hero, Chef, Path, Dishes, Restaurants, Books, Press, Gallery, Instagram, Contact, Footer, Lightbox)
- `src/App.jsx`: junta as secções e arranca o comportamento da página
- `public/assets/js/data.js`: textos e listas (restaurantes, percurso, pratos, livros, imprensa, galeria) e as traduções em inglês
- `public/assets/js/site.js`: comportamento (idioma, faixas que se arrastam, galeria, formulário)
- `public/assets/ig/feed.js` e `public/assets/js/instagram.js`: secção do Instagram
- `public/assets/css/site.css`: estilos
- `public/assets/fonts/`: letra Montserrat, servida pelo próprio site
- `public/privacidade.html`, `cookies.html`, `termos.html`: páginas legais

## Por fazer

Ver a lista no `PLANO-SITE.md` do projeto: lista dos pratos de assinatura, vídeo do início, dados da empresa nas páginas legais, fotos e autorizações, ligação do formulário ao email e do Instagram à API.
