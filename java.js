// Example: Add a scroll animation for the hero section
document.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const scrollPosition = window.scrollY;
    hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });
  
  // Example: Add hover effects to skills
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
      skill.style.backgroundColor = '#ffd700';
      skill.style.color = '#1a1a1a';
    });
    skill.addEventListener('mouseout', () => {
      skill.style.backgroundColor = '#333';
      skill.style.color = '#fff';
    });
  });
  gsap.from('.hero-content', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('.cta-button', { opacity: 0, y: 20, duration: 1, delay: 1 });