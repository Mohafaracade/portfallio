document.addEventListener('DOMContentLoaded', function() {
    // Navigation Links
    const aboutLink = document.getElementById('about-link');
    const ResumeLink = document.getElementById('Resume-link');
    const homeLink = document.getElementById('home-link');
    const servicesLink = document.getElementById('services-link');
    const skillsLink = document.getElementById('skills-link');
    const projectsLink = document.getElementById('projects');
    const blogLink = document.getElementById('blog-link');
    const contactLink = document.getElementById('contact-link');  
    const dynamicContent = document.getElementById('dynamic-content');

    // Loading Indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading-indicator');
    loadingIndicator.innerText = 'Loading...';
    dynamicContent.appendChild(loadingIndicator);
    loadingIndicator.style.display = 'none';

    // Function to Load Content Dynamically
    function loadContent(url, activeLink) {
        loadingIndicator.style.display = 'block';  // Show loading indicator
        dynamicContent.classList.add('fade-out');  // Fade out old content

        fetch(url)
            .then(response => response.text())
            .then(data => {
                setTimeout(() => {
                    dynamicContent.innerHTML = data;
                    setActiveLink(activeLink);
                    dynamicContent.classList.remove('fade-out');
                    dynamicContent.classList.add('fade-in');
                    loadingIndicator.style.display = 'none';  // Hide loading indicator
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
                }, 500); // Delay to allow fade-out animation
            })
            .catch(error => {
                console.error('Error loading content:', error);
                dynamicContent.innerHTML = '<p>Failed to load content. Please try again later.</p>';
                loadingIndicator.style.display = 'none';
            });
    }

    // Manage Active Class for Navigation Links
    function setActiveLink(activeLink) {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        activeLink.classList.add('active');
    }

    // Event Listeners for Navigation
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('about.html', aboutLink);
    });

    ResumeLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('Resume.html' , ResumeLink);
    });

    servicesLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('services.html', servicesLink);
    });

    skillsLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('skills.html', skillsLink);
    });

    projectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('projects.html', projectsLink);
    });

    blogLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('blog.html', blogLink);
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('contact.html', contactLink);
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        dynamicContent.innerHTML = ''; // Clear dynamic content
        setActiveLink(homeLink);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    });
});
