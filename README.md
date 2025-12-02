# 🏥 HAM Saúde e Segurança - Landing Page

Landing page profissional desenvolvida em **HTML, CSS e JavaScript puro** (sem frameworks) para a empresa HAM Saúde e Segurança, especializada em segurança do trabalho e saúde ocupacional.

---

## 📁 Estrutura de Arquivos

```
ham-landing-page/
├── index.html                    # Arquivo HTML principal
├── assets/
│   ├── css/
│   │   └── style.css            # Estilos CSS
│   ├── js/
│   │   └── script.js            # JavaScript
│   └── images/
│       └── logo.png             # Logo da HAM (fundo transparente)
└── README.md                     # Este arquivo
```

---

## 🎨 Características

### ✅ Tecnologias
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilos modernos com variáveis CSS
- **JavaScript Vanilla** - Interações sem dependências

### ✅ Funcionalidades
- ✨ Design responsivo (mobile, tablet, desktop)
- 🎨 Paleta de cores baseada na logo (tons de verde)
- 📱 Menu mobile com animação hamburger
- 🔄 Scroll suave entre seções
- 📝 Formulário de contato com validação
- 💬 Integração direta com WhatsApp
- 📸 Link para Instagram
- 🎯 Animações de fade-in ao fazer scroll
- ⬆️ Botão "voltar ao topo"
- 📞 Máscara automática para telefone

### ✅ Seções
1. **Header** - Menu fixo com navegação
2. **Hero** - Seção principal com CTAs
3. **Serviços** - 6 cards de serviços
4. **Sobre** - Missão, Valores e Foco
5. **Depoimentos** - 3 depoimentos de clientes
6. **Contato** - Formulário e informações
7. **Footer** - Links e redes sociais

---

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador

1. Extraia todos os arquivos
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Pronto! A landing page estará funcionando

### Opção 2: Usar um Servidor Local (Recomendado)

#### Com Python 3:
```bash
cd ham-landing-page
python3 -m http.server 8000
```
Acesse: http://localhost:8000

#### Com Node.js (npx):
```bash
cd ham-landing-page
npx serve
```

#### Com PHP:
```bash
cd ham-landing-page
php -S localhost:8000
```

---

## ✏️ Como Personalizar

### 1️⃣ Alterar Título da Página

**Arquivo:** `index.html` (linha 9)

```html
<title>HAM Saúde e Segurança</title>
```

### 2️⃣ Alterar Logo

Substitua o arquivo `assets/images/logo.png` pela sua logo.

**Recomendações:**
- Formato: PNG com fundo transparente
- Dimensões: Mínimo 200x200px
- Proporção: Quadrada ou próxima

### 3️⃣ Alterar Cores

**Arquivo:** `assets/css/style.css` (linhas 15-22)

```css
:root {
    --color-primary: #1a5c3a;          /* Verde escuro */
    --color-primary-light: #2d7a52;    /* Verde médio */
    --color-primary-lighter: #40a86f;  /* Verde claro */
    --color-secondary: #f0f9f4;        /* Verde muito claro */
    --color-accent: #d4edda;           /* Verde claro (destaques) */
}
```

### 4️⃣ Alterar WhatsApp

**Arquivos a modificar:**
- `index.html` - Linhas 76, 493, 592
- `assets/js/script.js` - Linha 164

**Formato:** `5582991131930` (código do país + DDD + número)

**Exemplo:**
```html
<a href="https://wa.me/5582991131930?text=..." target="_blank">
```

```javascript
const whatsappNumber = '5582991131930';
```

### 5️⃣ Alterar Instagram

**Arquivos a modificar:**
- `index.html` - Linhas 501, 600

**Exemplo:**
```html
<a href="https://www.instagram.com/ham.saudeeseguranca" target="_blank">
```

### 6️⃣ Alterar Textos

Todos os textos estão no arquivo `index.html`. Procure pelas seções:

- **Hero** - Linhas 70-100
- **Serviços** - Linhas 110-250
- **Sobre** - Linhas 260-350
- **Depoimentos** - Linhas 360-450
- **Contato** - Linhas 460-570
- **Footer** - Linhas 580-640

### 7️⃣ Adicionar/Remover Serviços

**Arquivo:** `index.html` (linhas 120-250)

**Estrutura de um serviço:**
```html
<div class="service-card">
    <div class="service-icon">
        <!-- Ícone SVG aqui -->
    </div>
    <h3 class="service-title">Título do Serviço</h3>
    <p class="service-description">
        Descrição do serviço...
    </p>
</div>
```

**Ícones SVG:** Use ícones de bibliotecas gratuitas como:
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)
- [Lucide](https://lucide.dev/)

### 8️⃣ Adicionar/Remover Depoimentos

**Arquivo:** `index.html` (linhas 370-440)

**Estrutura de um depoimento:**
```html
<div class="testimonial-card">
    <div class="quote-icon">
        <!-- Ícone de aspas -->
    </div>
    <p class="testimonial-text">
        "Texto do depoimento..."
    </p>
    <div class="testimonial-author">
        <p class="author-name">Nome do Cliente</p>
        <p class="author-role">Cargo</p>
        <p class="author-company">Nome da Empresa</p>
    </div>
</div>
```

### 9️⃣ Alterar Horário de Atendimento

**Arquivo:** `index.html` (linhas 555-560)

```html
<p class="hours-text">
    <strong>Horário de atendimento:</strong><br>
    Segunda a Sexta: 8h às 18h<br>
    Sábado: 8h às 12h
</p>
```

---

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Verde Escuro | `#1a5c3a` | Cor principal (botões, header) |
| Verde Médio | `#2d7a52` | Hover e destaques |
| Verde Claro | `#40a86f` | Gradientes |
| Verde Muito Claro | `#f0f9f4` | Fundos de seções |
| Branco | `#ffffff` | Fundos e textos |
| Cinza Escuro | `#333333` | Textos principais |
| Cinza | `#666666` | Textos secundários |

---

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:

| Dispositivo | Largura | Breakpoint |
|-------------|---------|------------|
| Mobile | < 640px | Padrão |
| Tablet | 640px - 1023px | `@media (min-width: 640px)` |
| Desktop | ≥ 1024px | `@media (min-width: 1024px)` |

---

## ✅ Funcionalidades JavaScript

### Scroll Suave
Navegação suave entre seções ao clicar nos links do menu.

### Menu Mobile
Menu responsivo com animação hamburger para dispositivos móveis.

### Validação de Formulário
- Validação em tempo real
- Mensagens de erro personalizadas
- Validação de e-mail e telefone
- Máscara automática para telefone brasileiro

### Integração WhatsApp
O formulário envia os dados diretamente para o WhatsApp com mensagem formatada.

### Animações
- Fade-in ao fazer scroll
- Efeitos hover nos cards
- Transições suaves

### Botão Voltar ao Topo
Aparece automaticamente após rolar 500px.

---

## 🌐 Compatibilidade

### Navegadores Suportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Dispositivos
- ✅ Desktop (Windows, macOS, Linux)
- ✅ Tablets (iPad, Android)
- ✅ Smartphones (iOS, Android)

---

## 📦 Hospedagem

### Opções Gratuitas

#### 1. GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações
4. Acesse via `https://seuusuario.github.io/repositorio`

#### 2. Netlify
1. Arraste a pasta para [netlify.com/drop](https://app.netlify.com/drop)
2. Pronto! Site no ar em segundos
3. URL gratuita: `https://nome-aleatorio.netlify.app`

#### 3. Vercel
1. Instale Vercel CLI: `npm i -g vercel`
2. Execute: `vercel` na pasta do projeto
3. Siga as instruções

#### 4. Cloudflare Pages
1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecte seu repositório GitHub
3. Deploy automático

---

## 🔧 Otimizações

### Performance
- ✅ CSS inline crítico (opcional)
- ✅ Lazy loading de imagens (opcional)
- ✅ Minificação de CSS/JS (opcional)

### SEO
- ✅ Meta tags configuradas
- ✅ Estrutura semântica HTML5
- ✅ Alt text em imagens
- ✅ Títulos hierárquicos (H1-H6)

### Acessibilidade
- ✅ Contraste adequado de cores
- ✅ Labels em formulários
- ✅ Navegação por teclado
- ✅ ARIA labels quando necessário

---

## 📝 Checklist de Personalização

Antes de publicar, verifique:

- [ ] Logo substituída
- [ ] Título da página alterado
- [ ] Cores personalizadas (se necessário)
- [ ] Número do WhatsApp atualizado
- [ ] Instagram atualizado
- [ ] Textos revisados
- [ ] Serviços atualizados
- [ ] Depoimentos reais adicionados
- [ ] Horário de atendimento correto
- [ ] Testado em mobile
- [ ] Testado em diferentes navegadores
- [ ] Favicon adicionado (opcional)

---

## 🐛 Solução de Problemas

### Logo não aparece
- Verifique se o arquivo está em `assets/images/logo.png`
- Confirme o caminho no HTML: `assets/images/logo.png`

### Cores não aplicadas
- Verifique se o arquivo CSS está linkado corretamente
- Limpe o cache do navegador (Ctrl+Shift+R)

### JavaScript não funciona
- Abra o Console do navegador (F12)
- Verifique se há erros
- Confirme que o arquivo JS está linkado no final do HTML

### Formulário não envia
- Verifique o número do WhatsApp no JavaScript
- Teste se o WhatsApp Web está funcionando

---

## 📞 Contatos da HAM

- **WhatsApp:** (82) 99113-1930
- **Instagram:** @ham.saudeeseguranca

---

## 📄 Licença

Este projeto foi desenvolvido para HAM Saúde e Segurança.  
Todos os direitos reservados © 2025

---

## 🎉 Pronto para Usar!

Basta abrir o `index.html` no navegador e sua landing page estará funcionando perfeitamente!

**Desenvolvido com ❤️ em HTML, CSS e JavaScript puro**
