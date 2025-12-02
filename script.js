/* ========================================
   HAM SAÚDE E SEGURANÇA - LANDING PAGE
   JavaScript Puro - Sem Frameworks
   ======================================== */

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    initCurrentYear();
    initScrollEffects();
    initFormValidation();
});

// ===== ANO ATUAL NO FOOTER =====
function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===== MENU MOBILE =====
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (mobileMenu && menuToggle) {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }
}

// ===== SCROLL SUAVE PARA SEÇÕES =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const sectionPosition = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}

// ===== EFEITOS DE SCROLL =====
function initScrollEffects() {
    const header = document.getElementById('header');
    
    // Adicionar sombra no header ao fazer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Animação de fade-in nos elementos ao fazer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar cards de serviços, depoimentos, etc.
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .value-item');
    animatedElements.forEach(function(element) {
        observer.observe(element);
    });
}

// ===== VALIDAÇÃO E ENVIO DO FORMULÁRIO =====
function initFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        // Adicionar validação em tempo real
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(function(input) {
            input.addEventListener('blur', function() {
                validateField(input);
            });
            
            input.addEventListener('input', function() {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    }
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Remover mensagem de erro anterior
    removeFieldError(field);
    
    // Validação por tipo de campo
    if (field.hasAttribute('required') && value === '') {
        isValid = false;
        errorMessage = 'Este campo é obrigatório';
    } else if (fieldName === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'E-mail inválido';
        }
    } else if (fieldName === 'phone' && value !== '') {
        const phoneRegex = /^[\d\s\(\)\-\+]+$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Telefone inválido';
        }
    }
    
    // Adicionar ou remover classe de erro
    if (!isValid) {
        addFieldError(field, errorMessage);
    } else {
        field.classList.remove('error');
    }
    
    return isValid;
}

function addFieldError(field, message) {
    field.classList.add('error');
    field.style.borderColor = '#dc2626';
    
    // Criar mensagem de erro se não existir
    let errorElement = field.parentElement.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.style.color = '#dc2626';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        field.parentElement.appendChild(errorElement);
    }
    errorElement.textContent = message;
}

function removeFieldError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';
    
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    let isFormValid = true;
    
    // Validar todos os campos
    inputs.forEach(function(input) {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showNotification('Por favor, corrija os erros no formulário', 'error');
        return;
    }
    
    // Coletar dados do formulário
    const formData = {
        name: form.name.value.trim(),
        company: form.company.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim()
    };
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = createWhatsAppMessage(formData);
    const whatsappNumber = '5582991131930';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    form.reset();
    
    // Mostrar mensagem de sucesso
    showNotification('Redirecionando para o WhatsApp...', 'success');
}

function createWhatsAppMessage(data) {
    let message = '🏥 *Solicitação de Orçamento - HAM Saúde e Segurança*\n\n';
    message += `👤 *Nome:* ${data.name}\n`;
    
    if (data.company) {
        message += `🏢 *Empresa:* ${data.company}\n`;
    }
    
    message += `📧 *E-mail:* ${data.email}\n`;
    
    if (data.phone) {
        message += `📱 *Telefone:* ${data.phone}\n`;
    }
    
    message += `\n💬 *Mensagem:*\n${data.message}`;
    
    return message;
}

function showNotification(message, type) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Estilos baseados no tipo
    const styles = {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        color: '#ffffff',
        fontWeight: '600',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
        zIndex: '9999',
        animation: 'slideIn 0.3s ease-out',
        maxWidth: '400px'
    };
    
    Object.assign(notification.style, styles);
    
    if (type === 'success') {
        notification.style.backgroundColor = '#1a5c3a';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc2626';
    } else {
        notification.style.backgroundColor = '#666666';
    }
    
    // Adicionar ao body
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(function() {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(function() {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===== MÁSCARA PARA TELEFONE =====
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            
            if (value.length >= 11) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length >= 7) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length >= 1) {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
        });
    }
});

// ===== ANIMAÇÕES CSS (Adicionar ao head se necessário) =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== BOTÃO SCROLL TO TOP (Opcional) =====
document.addEventListener('DOMContentLoaded', function() {
    // Criar botão
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
    `;
    scrollButton.setAttribute('aria-label', 'Voltar ao topo');
    document.body.appendChild(scrollButton);
    
    // Mostrar/ocultar botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Ação do botão
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ===== PREVENÇÃO DE ENVIO DUPLICADO =====
let isSubmitting = false;

function handleFormSubmit(event) {
    event.preventDefault();
    
    if (isSubmitting) {
        return;
    }
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    let isFormValid = true;
    
    // Validar todos os campos
    inputs.forEach(function(input) {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showNotification('Por favor, corrija os erros no formulário', 'error');
        return;
    }
    
    isSubmitting = true;
    
    // Desabilitar botão de envio
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
            <circle cx="12" cy="12" r="10"></circle>
        </svg>
        Enviando...
    `;
    
    // Adicionar animação de spin
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    
    // Coletar dados do formulário
    const formData = {
        name: form.name.value.trim(),
        company: form.company.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim()
    };
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = createWhatsAppMessage(formData);
    const whatsappNumber = '5582991131930';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Pequeno delay para melhor UX
    setTimeout(function() {
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Limpar formulário
        form.reset();
        
        // Restaurar botão
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
        isSubmitting = false;
        
        // Mostrar mensagem de sucesso
        showNotification('Redirecionando para o WhatsApp...', 'success');
    }, 500);
}

// ===== LOG DE CONSOLE (Remover em produção) =====
console.log('🏥 HAM Saúde e Segurança - Landing Page carregada com sucesso!');
console.log('📱 WhatsApp: (82) 99113-1930');
console.log('📸 Instagram: @ham.saudeeseguranca');
