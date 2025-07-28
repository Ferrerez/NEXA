# 🚀 NEXA - Desenvolvimento de Sites

Site institucional moderno e responsivo para a empresa NEXA, especializada em desenvolvimento web e criação de experiências digitais.

## ✨ Características

- **Design Moderno**: Interface elegante com gradientes e animações suaves
- **Totalmente Responsivo**: Adaptável a todos os dispositivos
- **Animações Interativas**: Efeitos de entrada e hover em todos os elementos
- **Navegação Intuitiva**: Sistema de navegação por páginas com indicadores
- **Performance Otimizada**: Carregamento rápido e eficiente

## 🎨 Páginas

1. **Capa**: Apresentação da empresa com logo pulsante
2. **Nossa História**: Cards informativos sobre a empresa
3. **Tecnologias**: Grid de tecnologias utilizadas
4. **Serviços**: Portfólio de serviços oferecidos
5. **Trabalhos**: Galeria de projetos realizados
6. **Contato**: Formulário e informações de contato

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript**: Interatividade e animações
- **Google Fonts**: Tipografia elegante (Orbitron, Quicksand, Dancing Script)
- **Font Awesome**: Ícones profissionais

## 🚀 Como Executar

### Opção 1: Servidor Local
```bash
# Clone o repositório
git clone https://github.com/Ferrerez/NEXA.git
cd NEXA

# Inicie o servidor Python
python3 -m http.server 8000

# Abra no navegador
http://localhost:8000
```

### Opção 2: Abrir Diretamente
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Monitores grandes

## 🎯 Funcionalidades

### Navegação
- **Botões de navegação** com animações de tremor
- **Indicador de progresso** no canto superior direito
- **Navegação por teclado** (setas, espaço, Home, End)
- **Swipe** em dispositivos móveis

### Animações
- **Logo pulsante** na página inicial
- **Cards com hover** em todas as seções
- **Animações de entrada** para cada elemento
- **Transições suaves** entre páginas

### Interatividade
- **Formulário de contato** funcional
- **Cards de portfólio** clicáveis
- **Efeitos hover** em todos os elementos interativos

## 🎨 Design System

### Cores
- **Primária**: `#667eea` (Azul/Roxo)
- **Secundária**: `#764ba2` (Roxo escuro)
- **Acento**: `#00ffff` (Ciano)
- **Texto**: `#333333` (Cinza escuro)

### Tipografia
- **Títulos**: Orbitron (Monospace)
- **Corpo**: Quicksand (Sans-serif)
- **Destaque**: Dancing Script (Cursiva)

## 📁 Estrutura do Projeto

```
NEXA/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── logo.png           # Logo da empresa
├── favicon.png        # Favicon
└── README.md          # Documentação
```

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no arquivo `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #00ffff;
}
```

### Adicionar Projetos
Edite a seção de portfólio no `index.html`:
```html
<div class="portfolio-card">
    <div class="portfolio-image">
        <i class="fas fa-laptop-code"></i>
        <div class="portfolio-overlay">
            <button class="view-project-btn" data-project="novo-projeto">Ver Projeto</button>
        </div>
    </div>
    <div class="portfolio-info">
        <h3>Nome do Projeto</h3>
        <p>Descrição do projeto</p>
        <div class="portfolio-tags">
            <span class="tag">HTML5</span>
            <span class="tag">CSS3</span>
        </div>
    </div>
</div>
```

## 🌐 Deploy

### GitHub Pages
1. Faça push do código para o repositório
2. Vá em Settings > Pages
3. Selecione a branch `main`
4. O site estará disponível em `https://ferrerez.github.io/NEXA/`

### Netlify
1. Conecte o repositório GitHub
2. Configure o build (não necessário para site estático)
3. Deploy automático a cada push

### Vercel
1. Importe o repositório
2. Deploy automático configurado
3. URL personalizada disponível

## 📞 Contato

- **Email**: contato@nexa.com.br
- **Telefone**: (11) 99999-9999
- **WhatsApp**: (11) 99999-9999
- **Endereço**: São Paulo, SP - Brasil

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ pela NEXA** 