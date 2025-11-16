document.addEventListener('DOMContentLoaded', function() {
    const glossaryContainer = document.getElementById('glossary-container');

    const glossaryTerms = [
        { term: 'Phishing', definition: 'A fraudulent attempt to obtain sensitive information (like usernames, passwords, or credit card details) by disguising as a trustworthy entity, usually through email.', icon: 'fas fa-envelope-open-text' },
        { term: 'Encryption', definition: 'The process of converting data into an unreadable code (ciphertext) to prevent unauthorized access. Only those with the correct "key" can decrypt it back into readable data.', icon: 'fas fa-key' },
        { term: 'Bug', definition: 'An error, flaw or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.', icon: 'fas fa-bug' },
        { term: 'Cloud Computing', definition: 'The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer.', icon: 'fas fa-cloud' },
        { term: 'LAN (Local Area Network)', definition: 'A network that connects computers within a limited area, such as a home, school, or office building.', icon: 'fas fa-network-wired' },
        { term: 'MFA (Multi-Factor Authentication)', definition: 'A security method that requires a user to provide two or more verification factors (e.g., a password and a code from their phone) to gain access.', icon: 'fas fa-user-shield' },
        { term: 'Database', definition: 'An organized collection of data, generally stored and accessed electronically from a computer system.', icon: 'fas fa-database' },
        { term: 'DNS (Domain Name System)', definition: 'The hierarchical and decentralized naming system used to identify computers, services, and other resources reachable through the Internet or other Internet Protocol (IP) networks.', icon: 'fas fa-network-wired' },
        { term: 'Firewall', definition: 'A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.', icon: 'fas fa-shield-alt' },
        { term: 'Virtualization', definition: 'The process of creating a virtual (rather than actual) version of something, such as an operating system, server, or storage device. This is the core technology that enables cloud computing.', icon: 'fas fa-layer-group' },
        { term: 'DDoS (Distributed Denial-of-Service) Attack', definition: 'An attack that overwhelms a server or network with a flood of internet traffic from many different sources (a "botnet"), making the service unavailable for legitimate users.', icon: 'fas fa-shield-alt' },
        { term: 'MAC Address (Media Access Control Address)', definition: 'A unique, permanent hardware identifier assigned to a device\'s network adapter. It\'s used for identification on a local network.', icon: 'fas fa-fingerprint' },
        { term: 'Patch', definition: 'A software update released by a developer to fix a known bug or security vulnerability. Keeping systems "patched" is a critical security practice.', icon: 'fas fa-wrench' },
        { term: 'Open Source', definition: 'Refers to software for which the original source code is made freely available and may be redistributed and modified by anyone. (e.g., Linux, Firefox, and the LibreOffice).', icon: 'fas fa-code-branch' },
        { term: 'Backup & Recovery', definition: 'The process of making copies of data (backup) and the procedures to restore that data (recovery) in the event of data loss, deletion, or corruption.', icon: 'fas fa-save' },
        { term: 'IP Address (Internet Protocol Address)', definition: 'A numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.', icon: 'fas fa-map-marker-alt' },
        { term: 'Spyware', definition: 'Malware designed to secretly monitor your activity, recording your keystrokes, capturing screenshots, or harvesting login credentials, and sending that data to an attacker.', icon: 'fas fa-user-secret' },
        { term: 'OS (Operating System)', definition: 'System software that manages computer hardware, software resources, and provides common services for computer programs.', icon: 'fab fa-windows' },
        { term: 'Switch', definition: 'A network device that connects multiple devices together on a single local network (LAN) and allows them to communicate with each other efficiently.', icon: 'fas fa-exchange-alt' },
        { term: 'VPN (Virtual Private Network)', definition: 'A service that creates a secure, encrypted tunnel for your internet traffic, hiding your IP address and protecting your data from being intercepted on public networks.', icon: 'fas fa-lock' },
        { term: 'VoIP (Voice over Internet Protocol)', definition: 'A technology that allows you to make voice calls over an internet connection instead of a traditional phone line (e.g., Zoom, Microsoft Teams).', icon: 'fas fa-phone-volume' },
        { term: 'Ethernet', definition: 'The standard technology for connecting devices in a wired Local Area Network (LAN), using a physical cable (like a Cat 6 cable) for a stable, high-speed connection.', icon: 'fas fa-ethernet' }
    ];

    function displayGlossary(filter = '') {
        glossaryContainer.innerHTML = '';
        const filteredTerms = glossaryTerms.filter(item => 
            item.term.toLowerCase().includes(filter.toLowerCase()) || 
            item.definition.toLowerCase().includes(filter.toLowerCase())
        );

        filteredTerms.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4';
            
            const card = document.createElement('div');
            card.className = 'glossary-item d-flex align-items-center p-3 border rounded';
            
            const icon = document.createElement('i');
            icon.className = `${item.icon} icon`;
            
            const content = document.createElement('div');
            const term = document.createElement('h5');
            term.textContent = item.term;
            const definition = document.createElement('p');
            definition.textContent = item.definition;
            
            content.appendChild(term);
            content.appendChild(definition);
            
            card.appendChild(icon);
            card.appendChild(content);
            
            col.appendChild(card);
            glossaryContainer.appendChild(col);
        });
    }

    displayGlossary();

    const glossarySearch = document.getElementById('glossary-search');
    glossarySearch.addEventListener('input', (e) => {
        displayGlossary(e.target.value);
    });

    // Intersection Observer for fade-in sections
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('label[for="theme-toggle"] i');

    function setTheme(isDark) {
        body.classList.toggle('dark-mode', isDark);
        themeToggle.checked = isDark;
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    themeToggle.addEventListener('change', (e) => {
        setTheme(e.target.checked);
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    }
});
