document.addEventListener('DOMContentLoaded', () => {
    // --- Loading Screen ---
    const loadingScreen = document.getElementById('loading-screen');

    if (loadingScreen) {
        // Wait 2200ms then start fading out
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');

            // Wait 800ms for transition then remove and start content animations
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                startHeroAnimation();
                document.body.classList.add('loaded'); // Optional hook for other CSS
            }, 800);
        }, 2200);
    } else {
        startHeroAnimation();
    }

    // --- Navbar Scroll ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Check initial position
        handleScroll();
    }

    // --- Mobile Menu ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuClose = document.getElementById('mobile-menu-close');
    const menuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function openMenu() {
        if (mobileMenu) mobileMenu.classList.add('mobile-menu-open');
        if (menuOverlay) {
            menuOverlay.classList.add('open');
            // Ensure overlay logic matches CSS (often display block or opacity)
            menuOverlay.style.display = 'block'; // Force display if CSS relies on specific classes only
            setTimeout(() => menuOverlay.classList.add('open'), 10); // Transition
        }
    }

    function closeMenu() {
        if (mobileMenu) mobileMenu.classList.remove('mobile-menu-open');
        if (menuOverlay) {
            menuOverlay.classList.remove('open');
            setTimeout(() => {
                if (!menuOverlay.classList.contains('open')) {
                    menuOverlay.style.display = 'none';
                }
            }, 300); // Wait for transition
        }
    }

    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
});

function startHeroAnimation() {
    const codeElement = document.getElementById('typed-code');
    if (!codeElement) return;

    const codeSnippet = `const service = {
  name: 'nu3ons',
  status: 'ready',
  speed: '100% Optimized'
};`;

    let index = 0;
    codeElement.textContent = ''; // Clear initial content

    const typeInterval = setInterval(() => {
        if (index < codeSnippet.length) {
            codeElement.textContent = codeSnippet.substring(0, index + 1);
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 50);
}
