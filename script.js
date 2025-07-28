// Variáveis globais
let currentPage = 1;
const totalPages = 6;

// Função para navegar para a próxima página
function nextPage() {
    if (currentPage < totalPages) {
        // Esconde a página atual
        const currentPageElement = document.getElementById(`page-${currentPage}`);
        currentPageElement.classList.remove('active');
        currentPageElement.classList.add('prev');
        
        // Avança para a próxima página
        currentPage++;
        
        // Mostra a nova página
        const nextPageElement = document.getElementById(`page-${currentPage}`);
        nextPageElement.classList.remove('prev');
        nextPageElement.classList.add('active');
        
        // Se chegou na última página, o botão volta ao início
        if (currentPage === totalPages) {
            const nextBtn = nextPageElement.querySelector('.next-btn');
            nextBtn.innerHTML = '<i class="fas fa-home"></i> Voltar ao Início';
            nextBtn.setAttribute('data-action', 'home');
        }
        
        // Adiciona efeito de scroll suave para o topo
        nextPageElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Função para navegar para a página anterior
function prevPage() {
    if (currentPage > 1) {
        // Esconde a página atual
        const currentPageElement = document.getElementById(`page-${currentPage}`);
        currentPageElement.classList.remove('active');
        
        // Volta para a página anterior
        currentPage--;
        
        // Mostra a página anterior
        const prevPageElement = document.getElementById(`page-${currentPage}`);
        prevPageElement.classList.remove('prev');
        prevPageElement.classList.add('active');
        
        // Adiciona efeito de scroll suave para o topo
        prevPageElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Função para ir para uma página específica
function goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
        // Esconde todas as páginas
        for (let i = 1; i <= totalPages; i++) {
            const pageElement = document.getElementById(`page-${i}`);
            pageElement.classList.remove('active', 'prev');
        }
        
        // Define a página atual
        currentPage = pageNumber;
        
        // Mostra a página desejada
        const targetPageElement = document.getElementById(`page-${pageNumber}`);
        targetPageElement.classList.add('active');
        
        // Adiciona efeito de scroll suave para o topo
        targetPageElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
}



// Função para abrir projetos do portfólio
function openProject(projectId) {
    // Aqui você pode adicionar os links dos projetos
    const projectLinks = {
        'projeto1': '#',
        'projeto2': '#',
        'projeto3': '#',
        'projeto4': '#',
        'projeto5': '#',
        'projeto6': '#'
    };
    
    const link = projectLinks[projectId];
    if (link && link !== '#') {
        window.open(link, '_blank');
    } else {
        alert('Link do projeto será adicionado em breve!');
    }
}

// Função para adicionar efeitos de animação aos elementos
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                // Remove apenas a transformação inicial, mantendo o hover CSS
                entry.target.style.removeProperty('transform');
            }
        });
    }, observerOptions);
    
    // Observa elementos que devem ser animados
    const animatedElements = document.querySelectorAll('.tech-card, .service-card, .contact-method, .portfolio-card, .story-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Função para adicionar efeitos de hover aos cards de tecnologia
function addTechCardEffects() {
    // Mapeamento das tecnologias para URLs da Wikipedia
    const techWikiLinks = {
        'html5': 'https://pt.wikipedia.org/wiki/HTML5',
        'css3': 'https://pt.wikipedia.org/wiki/CSS3',
        'javascript': 'https://pt.wikipedia.org/wiki/JavaScript',
        'bootstrap': 'https://pt.wikipedia.org/wiki/Bootstrap_(framework)',
        'wordpress': 'https://pt.wikipedia.org/wiki/WordPress',
        'react': 'https://pt.wikipedia.org/wiki/React_(JavaScript)'
    };
    
    // Adiciona event listeners aos tech cards
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
        card.addEventListener('click', function() {
            const techType = this.getAttribute('data-tech');
            const wikiUrl = techWikiLinks[techType];
            
            if (wikiUrl) {
                // Abre a página da Wikipedia em uma nova aba
                window.open(wikiUrl, '_blank');
            }
        });
    });
}

// Função para adicionar efeitos de hover aos cards de serviço
function addServiceCardEffects() {
    // Os efeitos hover já estão sendo aplicados pelo CSS
    // Esta função pode ser usada para efeitos adicionais se necessário
}

// Função para adicionar efeitos aos cards do portfólio
function addPortfolioCardEffects() {
    // Os efeitos hover já estão sendo aplicados pelo CSS
    // Esta função pode ser usada para efeitos adicionais se necessário
}

// Função para adicionar efeitos aos cards da história
function addStoryCardEffects() {
    // Os efeitos hover já estão sendo aplicados pelo CSS
    // Esta função pode ser usada para efeitos adicionais se necessário
    const storyCards = document.querySelectorAll('.story-card');
    
    storyCards.forEach(card => {
        // Adiciona classe para indicar que o card está carregado
        card.classList.add('story-card-loaded');
    });
}

// Função para adicionar navegação por teclado
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowRight':
            case ' ':
                event.preventDefault();
                nextPage();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                prevPage();
                break;
            case 'Home':
                event.preventDefault();
                goToPage(1);
                break;
            case 'End':
                event.preventDefault();
                goToPage(totalPages);
                break;
        }
    });
}

// Função para adicionar navegação por swipe (para dispositivos móveis)
function addSwipeNavigation() {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    document.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(event) {
        endX = event.changedTouches[0].clientX;
        endY = event.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Verifica se o movimento foi horizontal e significativo
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swipe para a esquerda - próxima página
                nextPage();
            } else {
                // Swipe para a direita - página anterior
                prevPage();
            }
        }
    });
}

// Função para adicionar indicadores de progresso
function addProgressIndicator() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-indicator';
    progressContainer.innerHTML = `
        <div class="progress-dots">
            ${Array.from({length: totalPages}, (_, i) => 
                `<div class="progress-dot ${i === 0 ? 'active' : ''}" data-page="${i + 1}"></div>`
            ).join('')}
        </div>
    `;
    
    document.body.appendChild(progressContainer);
    
    // Adiciona estilos para o indicador de progresso
    const style = document.createElement('style');
    style.textContent = `
        .progress-indicator {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            pointer-events: auto;
        }
        
        .progress-dots {
            display: flex;
            gap: 10px;
        }
        
        .progress-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .progress-dot.active {
            background: white;
            transform: scale(1.2);
        }
        
        .progress-dot:hover {
            background: rgba(255, 255, 255, 0.7);
        }
        
        @media (max-width: 768px) {
            .progress-indicator {
                top: 10px;
                right: 10px;
            }
            
            .progress-dots {
                gap: 8px;
            }
            
            .progress-dot {
                width: 10px;
                height: 10px;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Adiciona event listeners aos dots
    const dots = progressContainer.querySelectorAll('.progress-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const pageNumber = parseInt(this.getAttribute('data-page'));
            goToPage(pageNumber);
        });
    });
}

// Função para atualizar o indicador de progresso
function updateProgressIndicator() {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPage - 1);
    });
}

// Função para verificar se o SVG carregou e usar fallback se necessário
function checkSVGSupport() {
    const svgElement = document.querySelector('.logo-svg svg');
    const cssLogo = document.querySelector('.logo-css');
    
    if (svgElement) {
        // Verifica se o SVG está renderizado
        const svgRect = svgElement.getBoundingClientRect();
        if (svgRect.width === 0 || svgRect.height === 0) {
            // SVG não carregou, usa CSS fallback
            document.querySelector('.logo-svg').style.display = 'none';
            cssLogo.style.display = 'block';
        }
    }
}

// Função para verificar e corrigir ícones do Font Awesome
function checkFontAwesomeIcons() {
    // Verifica se os ícones estão visíveis
    const nextButtons = document.querySelectorAll('.next-btn i.fas.fa-arrow-right');
    
    let needsFallback = false;
    
    // Verifica se algum ícone não está visível
    nextButtons.forEach(icon => {
        const rect = icon.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
            needsFallback = true;
        }
    });
    
    // Se precisa de fallback, aplica os ícones CSS
    if (needsFallback) {
        const style = document.createElement('style');
        style.textContent = `
            .fas.fa-arrow-left::before { content: "←"; }
            .fas.fa-arrow-right::before { content: "→"; }
            .fas.fa-home::before { content: "🏠"; }
            .fas.fa-paper-plane::before { content: "✉"; }
            .fas.fa-external-link-alt::before { content: "🔗"; }
            .fas.fa-image::before { content: "🖼"; }
            .fab.fa-html5::before { content: "HTML5"; }
            .fab.fa-css3-alt::before { content: "CSS3"; }
            .fab.fa-js-square::before { content: "JS"; }
            .fab.fa-bootstrap::before { content: "Bootstrap"; }
            .fab.fa-wordpress::before { content: "WP"; }
            .fab.fa-react::before { content: "React"; }
            .fab.fa-node-js::before { content: "Node.js"; }
            .fab.fa-php::before { content: "PHP"; }
            .fas.fa-laptop-code::before { content: "💻"; }
            .fas.fa-mobile-alt::before { content: "📱"; }
            .fas.fa-shopping-cart::before { content: "🛒"; }
            .fas.fa-search::before { content: "🔍"; }
            .fas.fa-tools::before { content: "🔧"; }
            .fas.fa-palette::before { content: "🎨"; }
            .fas.fa-envelope::before { content: "📧"; }
            .fas.fa-phone::before { content: "📞"; }
            .fab.fa-whatsapp::before { content: "WhatsApp"; }
            .fas.fa-map-marker-alt::before { content: "📍"; }
        `;
        document.head.appendChild(style);
    }
}

// Função para adicionar loading inicial
function addInitialLoading() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">
                <img src="logo.png" alt="Nexa Logo" style="width: 80px; height: 80px; object-fit: contain;">
            </div>
            <div class="loading-spinner"></div>
        </div>
    `;
    
    document.body.appendChild(loadingScreen);
    
    // Adiciona estilos para a tela de loading
    const style = document.createElement('style');
    style.textContent = `
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #000000 0%, #333333 25%, #666666 50%, #999999 75%, #ffffff 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .loading-content {
            text-align: center;
            color: white;
        }
        
        .loading-logo {
            margin-bottom: 2rem;
        }
        
        .loading-logo .logo-svg {
            margin-bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .loading-logo .logo-svg svg {
            filter: drop-shadow(0 4px 8px rgba(0, 255, 255, 0.3));
        }
        
        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Remove a tela de loading após 2 segundos
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 2000);
}

// Função para adicionar event listeners aos botões
function addButtonEventListeners() {
    // Event listeners para botões de navegação
    document.addEventListener('click', function(event) {
        const target = event.target.closest('[data-action]');
        if (!target) return;
        
        const action = target.getAttribute('data-action');
        
        switch(action) {
            case 'next':
                nextPage();
                break;
            case 'prev':
                prevPage();
                break;
            case 'home':
                goToPage(1);
                break;
        }
    });
    
    // Event listeners para botões de projeto
    document.addEventListener('click', function(event) {
        const target = event.target.closest('[data-project]');
        if (!target) return;
        
        const projectId = target.getAttribute('data-project');
        openProject(projectId);
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona loading inicial
    addInitialLoading();
    
    // Verifica suporte ao SVG
    setTimeout(checkSVGSupport, 1000);
    
    // Verifica ícones do Font Awesome
    setTimeout(checkFontAwesomeIcons, 1500);
    
    // Adiciona indicador de progresso
    addProgressIndicator();
    
    // Adiciona event listeners aos botões
    addButtonEventListeners();
    
    // Adiciona navegação por teclado
    addKeyboardNavigation();
    
    // Adiciona navegação por swipe
    addSwipeNavigation();
    
    // Adiciona efeitos de animação
    setTimeout(addScrollAnimations, 500);
    
    // Adiciona efeitos de hover
    addTechCardEffects();
    addServiceCardEffects();
    addPortfolioCardEffects();
    addStoryCardEffects();
    

    
    // Atualiza o indicador de progresso quando a página muda
    const originalNextPage = nextPage;
    const originalPrevPage = prevPage;
    const originalGoToPage = goToPage;
    
    nextPage = function() {
        originalNextPage();
        updateProgressIndicator();
    };
    
    prevPage = function() {
        originalPrevPage();
        updateProgressIndicator();
    };
    
    goToPage = function(pageNumber) {
        originalGoToPage(pageNumber);
        updateProgressIndicator();
    };
});

// Função para adicionar efeitos de parallax (opcional)
function addParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Função para adicionar modo escuro (opcional)
function addDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.title = 'Alternar modo escuro';
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
    
    document.body.appendChild(darkModeToggle);
    
    // Adiciona estilos para o botão de modo escuro
    const style = document.createElement('style');
    style.textContent = `
        .dark-mode-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            pointer-events: auto;
        }
        
        .dark-mode-toggle:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }
        
        .dark-mode .page {
            background: #1a1a1a;
            color: #fff;
        }
        
        .dark-mode .tech-card,
        .dark-mode .service-card,
        .dark-mode .contact-method,
        .dark-mode .contact-form,
        .dark-mode .portfolio-card {
            background: #2a2a2a;
            color: #fff;
        }
        
        .dark-mode .page-header h2,
        .dark-mode .story-text h3,
        .dark-mode .tech-card h3,
        .dark-mode .service-card h3,
        .dark-mode .contact-info h3,
        .dark-mode .contact-form h3,
        .dark-mode .portfolio-info h3 {
            color: #fff;
        }
        
        .dark-mode .story-text p,
        .dark-mode .story-text li,
        .dark-mode .tech-card p,
        .dark-mode .service-card p,
        .dark-mode .contact-info p,
        .dark-mode .contact-method p,
        .dark-mode .portfolio-info p {
            color: #ccc;
        }
        
        @media (max-width: 768px) {
            .dark-mode-toggle {
                top: 10px;
                left: 10px;
                width: 40px;
                height: 40px;
                font-size: 1rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// Adiciona modo escuro (descomente se quiser usar)
// addDarkMode(); 