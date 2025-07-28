#!/bin/bash

# Script de Deploy para NEXA Website
# Este script facilita o processo de deploy no GitHub

echo "🚀 Iniciando deploy do site NEXA..."

# Verificar se o git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git não está instalado. Por favor, instale o Git primeiro."
    exit 1
fi

# Verificar se estamos no diretório correto
if [ ! -f "index.html" ]; then
    echo "❌ Arquivo index.html não encontrado. Execute este script no diretório do projeto."
    exit 1
fi

# Inicializar git se não estiver inicializado
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositório Git..."
    git init
fi

# Adicionar todos os arquivos
echo "📝 Adicionando arquivos ao Git..."
git add .

# Fazer commit
echo "💾 Fazendo commit das alterações..."
git commit -m "🚀 Deploy inicial do site NEXA

- Site institucional completo
- Design responsivo e moderno
- Animações interativas
- 6 páginas com conteúdo
- Formulário de contato
- Portfólio de projetos"

# Adicionar remote se não existir
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Adicionando remote do GitHub..."
    git remote add origin https://github.com/Ferrerez/NEXA.git
fi

# Fazer push
echo "⬆️ Fazendo push para o GitHub..."
git push -u origin main

echo "✅ Deploy concluído!"
echo ""
echo "🌐 Para ativar o GitHub Pages:"
echo "1. Vá para https://github.com/Ferrerez/NEXA"
echo "2. Clique em 'Settings'"
echo "3. Role até 'Pages' no menu lateral"
echo "4. Em 'Source', selecione 'Deploy from a branch'"
echo "5. Selecione a branch 'main'"
echo "6. Clique em 'Save'"
echo ""
echo "🎉 Seu site estará disponível em: https://ferrerez.github.io/NEXA/" 