document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // Theme Switcher Logic (Dark / Light Mode)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlElement = document.documentElement;

  // Function to set theme
  const setTheme = (theme) => {
    if (theme === 'light') {
      htmlElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
    setTheme('light');
  } else {
    setTheme('dark'); // Default
  }

  // Handle toggle click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyLight = htmlElement.classList.contains('light-theme');
      setTheme(isCurrentlyLight ? 'dark' : 'light');
    });
  }

  // ==========================================================================
  // Mobile Navigation Menu Toggle
  // ==========================================================================
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside or on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});
