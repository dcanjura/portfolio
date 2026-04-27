import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import 'zone.js';

type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
};

type Project = {
  name: string;
  stack: string;
  highlights: string[];
};

type SkillGroup = {
  label: string;
  items: string[];
};

type WebProject = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  status: string;
  liveUrl?: string;
  repoUrl?: string;
};

const experiences: Experience[] = [
  {
    period: 'Aug. 2022 - Mar. 2026',
    role: 'Java Backend Developer',
    company: 'Applaudo Studios',
    location: 'San Salvador, El Salvador',
    highlights: [
      'Developed applications to optimize client data verification and validation processes.',
      'Worked on large-scale systems using Java EE, Spring Boot, Gradle, Groovy, Jenkins, JBoss EAP, Maven, and Git.',
      'Designed and implemented validation processes for customer eligibility.',
      'Collaborated on client platforms for Duke Energy, The Home Depot, Comcast, and Verizon.',
      'Reviewed pull requests with a focus on code quality, maintainability, and best practices.'
    ]
  }
];

const projects: Project[] = [
  {
    name: 'Submission Management Portal',
    stack: 'Java 17, Spring Boot, Angular 19, AWS, PostgreSQL',
    highlights: [
      'Designed and developed a client-specific portal to manage submission states and validation workflows.',
      'Built an interactive dashboard to visualize submission progress and detailed status.',
      'Implemented RESTful APIs and a relational database schema for audit traceability.',
      'Developed responsive SPA components and deployed services in an AWS environment.'
    ]
  },
  {
    name: 'Multi-Client Promotional Platform',
    stack: 'AngularJS 1.8, Groovy, REST Services',
    highlights: [
      'Extended a shared promotional platform with client-specific functionality.',
      'Developed backend validation rules based on business conditions.',
      'Designed dynamic front-end behaviors and preserved multi-tenant compatibility.',
      'Optimized validation flows to prevent invalid submissions.'
    ]
  },
  {
    name: 'Pre-validation Process for Rewards Eligibility',
    stack: 'Groovy, Java EE, Maven, Oracle Database',
    highlights: [
      'Built a solution for The Home Depot to pre-validate customer eligibility.',
      'Consolidated multiple validation stages into a single workflow.',
      'Implemented duplicate detection and validation logic.',
      'Reduced system load and improved performance.'
    ]
  }
];

const skills: SkillGroup[] = [
  {
    label: 'Backend',
    items: ['Java 17', 'Spring Boot', 'Java EE', 'REST APIs', 'Microservices', 'Business Rules']
  },
  {
    label: 'Frontend',
    items: ['Angular', 'AngularJS', 'TypeScript', 'SPA Development', 'Dynamic Forms']
  },
  {
    label: 'Data & Cloud',
    items: ['PostgreSQL', 'Oracle', 'MySQL', 'AWS', 'Docker', 'Jenkins']
  },
  {
    label: 'Tools',
    items: ['Git', 'Maven', 'Gradle', 'JBoss EAP', 'Postman', 'SonarLint']
  }
];

const webProjects: WebProject[] = [
  {
    name: 'Portfolio Website',
    type: 'Personal brand',
    description: 'A professional portfolio focused on backend engineering experience, selected projects, and recruiter-friendly contact paths.',
    stack: ['Angular 19', 'TypeScript', 'CSS'],
    status: 'In progress'
  },
  {
    name: 'Project placeholder',
    type: 'Web application',
    description: 'Replace this card with one of your deployed websites, dashboards, landing pages, or full-stack applications.',
    stack: ['Angular', 'Java', 'Spring Boot'],
    status: 'Add link'
  },
  {
    name: 'Project placeholder',
    type: 'Client or practice project',
    description: 'Use this space to show the problem solved, your role, the technologies used, and a link to the live page or repository.',
    stack: ['Frontend', 'Backend', 'Database'],
    status: 'Add details'
  }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Diego Arguera home">
      <span>DA</span>
      <strong>Diego Arguera</strong>
    </a>
    <nav aria-label="Main navigation">
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#websites">Websites</a>
      <a href="#skills">Skills</a>
    </nav>
    <a class="header-action" href="/CV.html" download="Diego-Arguera-CV.html">Download CV</a>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Java Backend Developer / Angular Engineer</p>
          <h1>Building reliable backend systems for enterprise workflows.</h1>
          <p class="hero-text">
            I'm Diego Arguera, a Software Engineer focused on Java, Spring Boot, REST APIs,
            validation workflows, and Angular applications for business-critical platforms.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="mailto:diegoac053@gmail.com">Let's talk</a>
            <a class="button secondary" href="/CV.html" download="Diego-Arguera-CV.html">Download CV</a>
          </div>
        </div>

        <aside class="hero-card">
          <div class="availability">
            <span></span>
            Open to backend and full-stack roles
          </div>
          <div class="profile-mark">DA</div>
          <h2>Software Engineer</h2>
          <p>Java / Spring Boot / Angular / AWS / PostgreSQL</p>
          <dl>
            <div><dt>Experience</dt><dd>3+ years</dd></div>
            <div><dt>Location</dt><dd>El Salvador</dd></div>
            <div><dt>English</dt><dd>Advanced</dd></div>
          </dl>
        </aside>
      </div>
    </section>

    <section class="metrics-band">
      <article><strong>3+</strong><span>years building enterprise backend systems</span></article>
      <article><strong>4</strong><span>industries supported across client platforms</span></article>
      <article><strong>Java 17</strong><span>Spring Boot APIs with Angular frontends</span></article>
    </section>

    <section class="section intro-section">
      <p class="section-kicker">Profile</p>
      <div>
        <h2>Clean services, practical architecture, and business logic that holds up in production.</h2>
        <p>
          I translate business requirements into maintainable backend services, with focus on
          validation-heavy workflows, API design, and scalable delivery.
        </p>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="section two-column" id="experience">
      <div>
        <p class="section-kicker">Experience</p>
        <h2>Reliable backend systems for real business workflows.</h2>
      </div>

      <div class="timeline">
        <article class="timeline-item" *ngFor="let item of experiences; trackBy: trackByCompany">
          <div class="timeline-heading">
            <div>
              <h3>{{ item.role }}</h3>
              <p>{{ item.company }} / {{ item.location }}</p>
            </div>
            <span>{{ item.period }}</span>
          </div>

          <ul>
            <li *ngFor="let highlight of item.highlights">{{ highlight }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="section" id="projects">
      <div class="section-heading">
        <p class="section-kicker">Projects</p>
        <h2>Selected work with measurable engineering depth.</h2>
      </div>

      <div class="project-grid">
        <article class="project-card" *ngFor="let project of projects; trackBy: trackByProject">
          <p>{{ project.stack }}</p>
          <h3>{{ project.name }}</h3>
          <ul>
            <li *ngFor="let highlight of project.highlights">{{ highlight }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- WEBSITES -->
    <section class="section web-showcase" id="websites">
      <div class="section-heading">
        <p class="section-kicker">Web portfolio</p>
        <h2>Other pages and applications I have built.</h2>
      </div>

      <div class="website-grid">
        <article class="website-card" *ngFor="let site of webProjects; trackBy: trackByWeb">
          
          <div class="website-card-top">
            <span>{{ site.type }}</span>
            <strong>{{ site.status }}</strong>
          </div>

          <h3>{{ site.name }}</h3>
          <p>{{ site.description }}</p>

          <div class="website-stack">
            <span *ngFor="let tech of site.stack">{{ tech }}</span>
          </div>

          <div class="website-actions">
            <a *ngIf="site.liveUrl; else noLive" [href]="site.liveUrl" target="_blank">Live site</a>
            <ng-template #noLive>
              <span>Live site pending</span>
            </ng-template>

            <a *ngIf="site.repoUrl" [href]="site.repoUrl" target="_blank">Repository</a>
          </div>

        </article>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section two-column" id="skills">
      <div>
        <p class="section-kicker">Skills</p>
        <h2>Technologies I use to design, build, and ship.</h2>
      </div>

      <div class="skills-grid">
        <article *ngFor="let group of skills; trackBy: trackBySkill">
          <h3>{{ group.label }}</h3>
          <div class="skill-list">
            <span *ngFor="let skill of group.items">{{ skill }}</span>
          </div>
        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div>
        <p class="section-kicker">Recruiters</p>
        <h2>Need a backend engineer who can own complex validation and API work?</h2>
      </div>
      <div class="cta-actions">
        <a class="button primary" href="mailto:diegoac053@gmail.com">Email me</a>
        <a class="button secondary" href="https://www.linkedin.com/in/diego-canjura/" target="_blank">LinkedIn</a>
      </div>
    </section>
  </main>
  `
})
export class AppComponent {
  protected readonly experiences = experiences;
  protected readonly projects = projects;
  protected readonly skills = skills;
  protected readonly webProjects = webProjects;

  trackByCompany(index: number, item: any) {
    return item.company;
  }

  trackByProject(index: number, item: any) {
    return item.name;
  }

  trackByWeb(index: number, item: any) {
    return item.name;
  }

  trackBySkill(index: number, item: any) {
    return item.label;
  }
}

bootstrapApplication(AppComponent)
  .then(() => console.log('ANGULAR OK'))
  .catch(err => console.error('ERROR:', err));
