# UNO!™ — Site Oficial

Site completo do UNO!™ com todas as páginas, funcionalidades e conteúdos.

## 📁 Estrutura do Projeto

```
playuno/
├── index.html              # Página principal (Home)
├── css/
│   └── style.css           # Estilos globais
├── js/
│   └── main.js             # JavaScript global
├── pages/
│   ├── news.html           # Listagem de notícias
│   ├── news-detail.html    # Detalhe de notícia
│   ├── support.html        # Suporte e FAQ
│   ├── privacy.html        # Política de Privacidade
│   └── eula.html           # Termos de Uso (EULA)
└── img/                    # Pasta de imagens (adicione suas imagens aqui)
```

## 🚀 Como Subir no GitHub Pages

1. Crie um repositório no GitHub (ex: `playuno`)
2. Faça upload de todos os arquivos desta pasta
3. Vá em **Settings → Pages**
4. Em **Source**, selecione `Deploy from a branch`
5. Selecione branch `main` e pasta `/ (root)`
6. Clique em **Save**
7. Aguarde ~2 minutos e acesse: `https://seu-usuario.github.io/playuno`

## 🌐 Como Usar com Domínio Próprio (playuno.com.br)

1. Suba o projeto no GitHub Pages (passos acima)
2. Crie um arquivo `CNAME` na raiz com o conteúdo: `playuno.com.br`
3. No seu registrador de domínio, configure os DNS:
   - Tipo A: `185.199.108.153`
   - Tipo A: `185.199.109.153`
   - Tipo A: `185.199.110.153`
   - Tipo A: `185.199.111.153`
   - CNAME `www` → `seu-usuario.github.io`
4. Ative **Enforce HTTPS** no GitHub Pages

## 📄 Páginas Incluídas

| Página | Arquivo | Descrição |
|--------|---------|-----------|
| Home | `index.html` | Hero, features, galeria, notícias, download CTA |
| Notícias | `pages/news.html` | Listagem com filtros por categoria + paginação |
| Detalhe Notícia | `pages/news-detail.html` | Artigo completo com notícias relacionadas |
| Suporte | `pages/support.html` | FAQ completo: Regras, Modos, Recarga, Conta |
| Privacidade | `pages/privacy.html` | Política de Privacidade completa (LGPD) |
| EULA | `pages/eula.html` | Termos de Uso completos |

## ✅ Funcionalidades

- ✅ Navbar responsiva com menu mobile
- ✅ Modal de link externo ("Você está saindo...")
- ✅ Modal de download (App Store / Google Play)
- ✅ Banner de cookies com aceitar/rejeitar
- ✅ News ticker animado
- ✅ Filtro de notícias por categoria
- ✅ Galeria com abas (Screenshots / Vídeos)
- ✅ FAQ com accordion (abre/fecha)
- ✅ Dropdowns no menu
- ✅ Design responsivo (mobile-first)
- ✅ Animações CSS suaves
- ✅ Footer completo com todos os links legais

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Vermelho UNO | `#E8001D` | Primária, CTAs, destaques |
| Amarelo UNO | `#FFD700` | Secundária, títulos, links |
| Azul UNO | `#0057A8` | Acentos, botões |
| Verde UNO | `#00963A` | Tags, badges |
| Preto | `#0a0a0a` | Background principal |

## 🔧 Personalização

Para alterar as cores, edite as variáveis CSS em `css/style.css`:

```css
:root {
  --red: #E8001D;
  --blue: #0057A8;
  --yellow: #FFD700;
  --green: #00963A;
}
```

Para adicionar notícias, copie um bloco `.news-item` em `pages/news.html` e altere o conteúdo.
