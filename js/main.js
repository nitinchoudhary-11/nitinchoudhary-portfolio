/**
 * Main Application Logic for Nitin Choudhary Portfolio
 * Interactive Filter Tabs, REST API Tester, Microservices Visualizer, Modals & Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive components
  initNavigation();
  renderSkills('all');
  renderExperience();
  renderProjects('all');
  initArchitectureVisualizer();
  initApiPlayground();
  initModals();
  initContactForm();
  initResumeDownload();
});

/* -------------------------------------------------------------------------- */
/* 1. NAVIGATION & SCROLL HIGHLIGHTING                                        */
/* -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('open');
      if (mobileToggle) mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  // Active section scroll handler
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 2. RENDER SKILLS MATRIX WITH FILTERING                                     */
/* -------------------------------------------------------------------------- */
function renderSkills(filterCategory = 'all') {
  const grid = document.getElementById('skillsGrid');
  if (!grid || !PORTFOLIO_DATA || !PORTFOLIO_DATA.skills) return;

  grid.innerHTML = '';

  const filteredSkills = filterCategory === 'all'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(s => s.category === filterCategory);

  filteredSkills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-category', skill.category);

    const tagsHtml = skill.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="skill-card-top">
        <div class="skill-icon-wrapper" style="color: ${skill.color}">
          <i class="${skill.icon}"></i>
        </div>
        <div class="skill-meta">
          <span class="skill-level-badge">${skill.level}</span>
          <span class="skill-exp">${skill.experience}</span>
        </div>
      </div>
      <h3 class="skill-title">${skill.name}</h3>
      <p class="skill-description">${skill.description}</p>
      <div class="progress-bar-container" title="Proficiency: ${skill.proficiency}%">
        <div class="progress-bar-fill" style="width: ${skill.proficiency}%"></div>
      </div>
      <div class="skill-tags">
        ${tagsHtml}
      </div>
    `;

    grid.appendChild(card);
  });

  // Setup filter tab click listeners
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      filterTabs.forEach(t => t.classList.remove('active'));
      const targetBtn = e.currentTarget;
      targetBtn.classList.add('active');
      const cat = targetBtn.getAttribute('data-filter');
      renderSkills(cat);
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 3. RENDER WORK EXPERIENCE TIMELINE                                         */
/* -------------------------------------------------------------------------- */
function renderExperience() {
  const timeline = document.getElementById('experienceTimeline');
  if (!timeline || !PORTFOLIO_DATA || !PORTFOLIO_DATA.experiences) return;

  timeline.innerHTML = '';

  PORTFOLIO_DATA.experiences.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    const achievementsHtml = exp.achievements.map(a => `<li>${a}</li>`).join('');
    const techTagsHtml = exp.skills.map(s => `<span class="pill"><i class="fa-solid fa-code"></i> ${s}</span>`).join('');

    item.innerHTML = `
      <div class="timeline-icon">
        <i class="fa-solid fa-briefcase"></i>
      </div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="role-title">${exp.role}</h3>
            <div class="company-name"><i class="fa-solid fa-building"></i> ${exp.company} • ${exp.location}</div>
          </div>
          <span class="timeline-date">${exp.period} (${exp.duration})</span>
        </div>

        <ul class="experience-list">
          ${achievementsHtml}
        </ul>

        <div class="exp-tech-stack">
          ${techTagsHtml}
        </div>
      </div>
    `;

    timeline.appendChild(item);
  });
}

/* -------------------------------------------------------------------------- */
/* 4. RENDER FEATURED PROJECTS WITH MODAL DETAILS                            */
/* -------------------------------------------------------------------------- */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

  grid.innerHTML = '';

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  filteredProjects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const tagsHtml = proj.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');

    let metricsHtml = '';
    if (proj.metrics) {
      metricsHtml = `
        <div class="project-metrics-grid">
          ${Object.entries(proj.metrics).map(([k, v]) => `
            <div>
              <span class="p-metric-val">${v}</span>
              <span class="p-metric-lbl">${k}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="project-card-header">
        ${proj.featured ? '<span class="project-badge"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
        <div class="project-icon"><i class="fa-solid fa-server"></i></div>
        <h3 class="project-title">${proj.title}</h3>
      </div>
      <div class="project-card-body">
        <p class="project-summary">${proj.summary}</p>
        ${metricsHtml}
        <div class="project-tags">
          ${tagsHtml}
        </div>
        <div class="project-actions">
          <button class="btn btn-outline-sm view-proj-btn" data-id="${proj.id}">
            <i class="fa-solid fa-eye"></i> View Architecture & Specs
          </button>
          <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="btn btn-glass btn-outline-sm" title="View Source Code">
            <i class="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Project Click Events for Modal
  document.querySelectorAll('.view-proj-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projId = e.currentTarget.getAttribute('data-id');
      openProjectModal(projId);
    });
  });

  // Filter Buttons
  const projTabs = document.querySelectorAll('.proj-tab');
  projTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      projTabs.forEach(t => t.classList.remove('active'));
      const targetBtn = e.currentTarget;
      targetBtn.classList.add('active');
      const f = targetBtn.getAttribute('data-projfilter');
      renderProjects(f);
    });
  });
}

function openProjectModal(projId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projId);
  if (!proj) return;

  const modal = document.getElementById('projectModal');
  const title = document.getElementById('projModalTitle');
  const body = document.getElementById('projModalBody');

  if (!modal || !title || !body) return;

  title.innerHTML = `<i class="fa-solid fa-diagram-project"></i> ${proj.title}`;

  const highlightsHtml = proj.highlights.map(h => `<li><i class="fa-solid fa-check text-success"></i> ${h}</li>`).join('');
  const tagsHtml = proj.tags.map(t => `<span class="pill"><i class="fa-solid fa-code"></i> ${t}</span>`).join('');

  body.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <h4 style="color:#ffffff; font-size:1.1rem; margin-bottom:0.5rem;">Project Overview</h4>
      <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.6;">${proj.description}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="color:#ffffff; font-size:1.1rem; margin-bottom:0.75rem;">Key Architecture & Technical Highlights</h4>
      <ul style="list-style:none; padding:0;" class="quick-info-list">
        ${highlightsHtml}
      </ul>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="color:#ffffff; font-size:1.1rem; margin-bottom:0.5rem;">Technologies & Tools Used</h4>
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
        ${tagsHtml}
      </div>
    </div>

    <div class="modal-footer-actions">
      <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary">
        <i class="fa-brands fa-github"></i> Inspect Repository on GitHub
      </a>
      <button class="btn btn-glass" onclick="document.getElementById('projectModal').classList.add('hidden')">
        Close Window
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

/* -------------------------------------------------------------------------- */
/* 5. ARCHITECTURE VISUALIZER & SIMULATOR                                     */
/* -------------------------------------------------------------------------- */
function initArchitectureVisualizer() {
  const triggerPulseBtn = document.getElementById('triggerPulseBtn');
  const showArchDiagramTab = document.getElementById('showArchDiagramTab');
  const showApiConsoleTab = document.getElementById('showApiConsoleTab');
  const archDiagramView = document.getElementById('archDiagramView');
  const apiConsoleView = document.getElementById('apiConsoleView');

  if (showArchDiagramTab && showApiConsoleTab) {
    showArchDiagramTab.addEventListener('click', () => {
      showArchDiagramTab.classList.add('active');
      showApiConsoleTab.classList.remove('active');
      archDiagramView.classList.remove('hidden');
      apiConsoleView.classList.add('hidden');
    });

    showApiConsoleTab.addEventListener('click', () => {
      showApiConsoleTab.classList.add('active');
      showArchDiagramTab.classList.remove('active');
      apiConsoleView.classList.remove('hidden');
      archDiagramView.classList.add('hidden');
    });
  }

  if (triggerPulseBtn) {
    triggerPulseBtn.addEventListener('click', () => {
      const nodes = document.querySelectorAll('.arch-node');
      nodes.forEach((node, idx) => {
        setTimeout(() => {
          node.style.borderColor = 'var(--accent-spring)';
          node.style.transform = 'scale(1.08)';
          node.style.boxShadow = '0 0 25px rgba(16, 185, 129, 0.5)';

          setTimeout(() => {
            node.style.borderColor = '';
            node.style.transform = '';
            node.style.boxShadow = '';
          }, 800);
        }, idx * 300);
      });
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 6. INTERACTIVE REST API PLAYGROUND                                         */
/* -------------------------------------------------------------------------- */
function initApiPlayground() {
  const endpointSelect = document.getElementById('apiEndpointSelect');
  const sendBtn = document.getElementById('sendApiRequestBtn');
  const codeBody = document.getElementById('apiResponseBody');
  const metaSpan = document.getElementById('responseMeta');

  if (sendBtn && endpointSelect && codeBody) {
    sendBtn.addEventListener('click', () => {
      const selectedEndpoint = endpointSelect.value;
      const responseObj = PORTFOLIO_DATA.apiMockResponses[selectedEndpoint] || {
        status: 200,
        message: "Request executed successfully"
      };

      const latency = Math.floor(Math.random() * 25) + 15;
      const dbLatency = Math.floor(Math.random() * 8) + 3;

      if (metaSpan) {
        metaSpan.innerHTML = `Status: <strong class="text-success">200 OK</strong> | Total Time: <strong>${latency} ms</strong> | HikariCP DB Query: <strong>${dbLatency} ms</strong>`;
      }

      codeBody.innerHTML = syntaxHighlightJson(JSON.stringify(responseObj, null, 2));
    });
  }

  // Open playground button from hero
  const openApiPlaygroundBtn = document.getElementById('openApiPlaygroundBtn');
  if (openApiPlaygroundBtn) {
    openApiPlaygroundBtn.addEventListener('click', () => {
      const archSection = document.getElementById('architecture');
      if (archSection) archSection.scrollIntoView({ behavior: 'smooth' });
      const consoleTab = document.getElementById('showApiConsoleTab');
      if (consoleTab) consoleTab.click();
    });
  }
}

function syntaxHighlightJson(jsonStr) {
  jsonStr = jsonStr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return jsonStr.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    let cls = 'kwd';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'cls';
      } else {
        cls = 'str';
      }
    } else if (/true|false/.test(match)) {
      cls = 'annotation';
    } else if (/null/.test(match)) {
      cls = 'annotation';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

/* -------------------------------------------------------------------------- */
/* 7. MODALS (RECRUITER SNAPSHOT & PROJECT MODAL)                            */
/* -------------------------------------------------------------------------- */
function initModals() {
  const recruiterModal = document.getElementById('recruiterModal');
  const recruiterBtn = document.getElementById('recruiterSummaryBtn');
  const closeRecruiterModal = document.getElementById('closeRecruiterModal');

  const projectModal = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');

  if (recruiterBtn && recruiterModal) {
    recruiterBtn.addEventListener('click', () => recruiterModal.classList.remove('hidden'));
  }

  if (closeRecruiterModal && recruiterModal) {
    closeRecruiterModal.addEventListener('click', () => recruiterModal.classList.add('hidden'));
  }

  if (closeProjectModal && projectModal) {
    closeProjectModal.addEventListener('click', () => projectModal.classList.add('hidden'));
  }

  // Close modals on overlay backdrop click
  window.addEventListener('click', (e) => {
    if (e.target === recruiterModal) recruiterModal.classList.add('hidden');
    if (e.target === projectModal) projectModal.classList.add('hidden');
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (recruiterModal) recruiterModal.classList.add('hidden');
      if (projectModal) projectModal.classList.add('hidden');
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 8. CONTACT FORM WITH DIRECT MAIL & WHATSAPP ROUTING                        */
/* -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${name}`);
      const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInquiry Type: ${subject}\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:nitinchoudhary7415@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      const waText = encodeURIComponent(`Hi Nitin, I am ${name} (${email}). I want to discuss a ${subject}: ${message}`);
      const waUrl = `https://wa.me/917415416193?text=${waText}`;

      // Open user's default email client
      window.location.href = mailtoUrl;

      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = `
          <div style="margin-bottom: 8px;">
            <i class="fa-solid fa-circle-check"></i> Thank you, <strong>${name}</strong>! Email client opened to send message directly to <strong>nitinchoudhary7415@gmail.com</strong>.
          </div>
          <div style="display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap;">
            <a href="${mailtoUrl}" class="btn btn-primary-sm"><i class="fa-solid fa-envelope"></i> Send via Email Client</a>
            <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-outline-sm" style="background:#25D366; color:#fff; border-color:#25D366;"><i class="fa-brands fa-whatsapp"></i> Chat Direct on WhatsApp</a>
          </div>
        `;
        feedback.classList.remove('hidden');
      }

      form.reset();
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 9. RESUME DOWNLOAD SIMULATION                                              */
/* -------------------------------------------------------------------------- */
function initResumeDownload() {
  const downloadBtns = [
    document.getElementById('downloadResumeBtn'),
    document.getElementById('modalDownloadResumeBtn')
  ];

  downloadBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        generatePrintableResume();
      });
    }
  });
}

function generatePrintableResume() {
  const resumeWindow = window.open('', '_blank');
  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>NITIN CHOUDHARY - Software Engineer | Java Backend Developer Resume</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.5; color: #111; padding: 40px; max-width: 800px; margin: 0 auto; }
        h1 { margin-bottom: 5px; color: #0f172a; text-transform: uppercase; font-size: 24px; letter-spacing: 1px; }
        .role-title { font-weight: bold; font-size: 16px; color: #334155; margin-bottom: 5px; }
        .contact-info { font-size: 13px; color: #475569; margin-bottom: 20px; border-bottom: 2px solid #0f172a; padding-bottom: 10px; }
        .contact-info a { color: #0284c7; text-decoration: none; }
        h2 { font-size: 15px; text-transform: uppercase; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 18px; margin-bottom: 8px; letter-spacing: 0.5px; }
        ul { padding-left: 20px; margin-top: 5px; margin-bottom: 10px; }
        li { margin-bottom: 4px; font-size: 13.5px; }
        .exp-item { margin-bottom: 12px; }
        .exp-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 14px; }
        .sub-text { font-size: 13px; color: #475569; margin-bottom: 5px; }
      </style>
    </head>
    <body>
      <h1>NITIN CHOUDHARY</h1>
      <div class="role-title">Software Engineer | Java Backend Developer</div>
      <div class="contact-info">
        Indore, Madhya Pradesh | Phone: 7415416193 | Email: <a href="mailto:nitinchoudhary7415@gmail.com">nitinchoudhary7415@gmail.com</a><br>
        LinkedIn: <a href="https://linkedin.com/in/nitin-c-80a97a249">linkedin.com/in/nitin-c-80a97a249</a> | GitHub: <a href="https://github.com/nitinchoudhary-11">github.com/nitinchoudhary-11</a>
      </div>

      <h2>PROFESSIONAL SUMMARY</h2>
      <p style="font-size:13.5px; margin: 0;">Java Backend Developer with internship experience building Java 17 and Spring Boot backend applications. Hands-on experience developing RESTful services, Spring Security, JWT authentication, RBAC, Spring Data JPA, MySQL and Git-based development. Strong foundation in Object-Oriented Design, API Design, Data Structures & Algorithms, SQL, Collections Framework, Exception Handling and backend development.</p>

      <h2>EXPERIENCE</h2>
      <div class="exp-item">
        <div class="exp-header">
          <span>Java Developer Intern | Dollop Infotech, Indore</span>
          <span>Mar 2026 – Present</span>
        </div>
        <ul>
          <li>Developing Java 17 backend modules and REST APIs using Spring Boot, Spring Data JPA, Hibernate and MySQL.</li>
          <li>Implementing Authentication, Authorization, JWT, Refresh Token, BCrypt password encryption and RBAC for secure backend services.</li>
          <li>Contributing to Smart Education Platform by developing Authentication, Gamification, Assessment and RBAC modules while collaborating through Git workflow, debugging and code reviews.</li>
          <li>Working with layered MVC architecture, Dependency Injection, IoC, input validation, exception handling, Postman and Maven.</li>
        </ul>
      </div>

      <h2>PROJECT</h2>
      <div class="exp-item">
        <div class="exp-header">
          <span>Sales Tracking & Management System</span>
          <span>Java 17 | Spring Boot | Spring Security | MySQL</span>
        </div>
        <ul>
          <li>Built an enterprise-style backend for Lead → Deal → Sale lifecycle using layered Controller–Service–Repository architecture.</li>
          <li>Developed RESTful CRUD APIs with Spring Data JPA, Hibernate and MySQL following clean Object-Oriented Design principles.</li>
          <li>Implemented JWT Authentication, Refresh Token, BCrypt encryption and Role-Based Access Control (RBAC).</li>
          <li>Applied pagination, filtering, input validation, exception handling and normalized relational database design for maintainable backend services.</li>
        </ul>
      </div>

      <h2>TECHNICAL SKILLS</h2>
      <ul style="list-style-type: none; padding-left: 0;">
        <li><strong>Languages:</strong> Java 17, SQL</li>
        <li><strong>Frameworks:</strong> Spring Boot, Spring Security, Spring Data JPA, Hibernate</li>
        <li><strong>Backend:</strong> REST APIs, RESTful Services, API Design, JWT, RBAC, CRUD, MVC, Dependency Injection, IoC</li>
        <li><strong>Database:</strong> MySQL, SQL Optimization, Database Normalization</li>
        <li><strong>Core Java:</strong> OOP, Collections Framework, Multithreading, Exception Handling, Data Structures, Algorithms, Time Complexity</li>
        <li><strong>Tools:</strong> Git, GitHub, Maven, Postman, JUnit</li>
      </ul>

      <h2>PROBLEM SOLVING</h2>
      <p style="font-size:13.5px; margin: 0 0 10px 0;">Solved 100+ LeetCode problems in Java focusing on Data Structures, Algorithms, Collections Framework and Time Complexity optimization.</p>

      <h2>EDUCATION</h2>
      <div class="exp-item">
        <div class="exp-header">
          <span>B.Tech (Information Technology) | Sushila Devi Bansal College of Technology, Indore</span>
          <span>Aug 2022 – Jun 2026</span>
        </div>
        <div class="sub-text">CGPA: 6.5</div>
      </div>
      <div class="exp-item">
        <div class="exp-header">
          <span>Class XII | Govt. B.H.S. School, Bhourasa (Dewas)</span>
          <span>2022 | 73%</span>
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-header">
          <span>Class X | Govt. B.H.S. School, Bhourasa (Dewas)</span>
          <span>2020 | 88%</span>
        </div>
      </div>

      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
    </html>
  `;

  resumeWindow.document.write(content);
  resumeWindow.document.close();
}
