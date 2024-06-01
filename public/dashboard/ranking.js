function nextSection() {
    const sections = document.querySelectorAll('.section');
    const currentSection = Array.from(sections).findIndex(section => section.style.display !== 'none');
    if (currentSection < sections.length - 1) {
      sections[currentSection].style.display = 'none';
      sections[currentSection + 1].style.display = 'flex';
    }
  }
  
  function prevSection() {
    const sections = document.querySelectorAll('.section');
    const currentSection = Array.from(sections).findIndex(section => section.style.display !== 'none');
    if (currentSection > 0) {
      sections[currentSection].style.display = 'none';
      sections[currentSection - 1].style.display = 'flex';
    }
  }