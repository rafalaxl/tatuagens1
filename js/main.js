document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const styleInput = document.getElementById('form-style');
      const ideaInput = document.getElementById('form-idea');

      const name = nameInput.value.trim();
      const style = styleInput.value;
      const idea = ideaInput.value.trim();

      // Simple regex sanitization / validation
      if (!name || name.length < 3) {
        showFeedback('Por favor, insira um nome válido (mínimo 3 caracteres).', 'error');
        return;
      }

      if (!idea || idea.length < 10) {
        showFeedback('Por favor, descreva sua ideia com um pouco mais de detalhes (mínimo 10 caracteres).', 'error');
        return;
      }

      showFeedback('Redirecionando para o WhatsApp de Pedro...', 'success');

      const baseText = `Olá Pedro! Quero planejar minha tatuagem.\n\n` +
                       `*Nome:* ${name}\n` +
                       `*Estilo de Preferência:* ${style}\n` +
                       `*Ideia do Projeto:* ${idea}`;

      const waUrl = `https://wa.me/5515996603395?text=${encodeURIComponent(baseText)}`;

      setTimeout(() => {
        window.open(waUrl, '_blank');
        form.reset();
      }, 1000);
    });
  }

  function showFeedback(message, type) {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.className = 'mt-4 text-sm font-semibold transition-all duration-300';
    if (type === 'error') {
      feedback.classList.add('text-red-500');
    } else {
      feedback.classList.add('text-[var(--ds-color-brand-gold-champagne)]');
    }
  }
});
