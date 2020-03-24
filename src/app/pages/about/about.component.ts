import { Component, ChangeDetectionStrategy } from '@angular/core';

interface IJob {
  employer: string;
  date: string;
  role: string;
  description: string;
  keyResponsibilities: string[];
  projects: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  public readonly summary =
    'With 8 years of commercial experience across several disciplines';
  public readonly jobs: IJob[] = [
    {
      employer: 'Thames Laboratories',
      date: 'March 2019 - Present',
      role: 'Lead Software Engineer',
      description:
        'Tlabs is an SME developing software for its own business needs with \
        a toe tipped into the SaaS market. \
        It provides asbestos surveying services mostly for residential \
        properties owned by housing associations.',
      keyResponsibilities: [
        '• Managing technical talent in-house as well as remote contractors.',
        '• Continuously improving and simplifying our tech stack.',
        '• Developing software solutions to simplify existing processes.',
        '• Setting up and managing cloud infrastructure.',
        '• Communicating software information to non-technical executives.',
      ],
      projects: [
        'Orders App',
        'Vehicle Tracking App',
        'Vehicle Routing System',
        'Reports App',
        'CRM App',
        'Survey App',
      ],
    },
    {
      employer: 'Ishango - Startup Venture',
      date: 'November 2018 - March 2019',
      role: 'Partner',
      description:
        'Joined three senior contractors in a venture to \
      develop SaaS aimed at contacts within the construction industry.',
      keyResponsibilities: [
        '• Managing cloud infrastructure.',
        '• Researching SaaS products and architecture.',
        '• Architect & build multi-tenant SaaS',
      ],
      projects: [
        'Document Management System',
        'Dashboardified',
        'Timehseet Portal',
      ],
    },
    {
      employer: 'Costain - A14 Highway Construction',
      date: 'February 2017 - January 2019',
      role: 'Full Stack Developer',
      description:
        'Initially hired by Costain on a Digital Media role although shortly after \
        my skills were put to a better use as a floating resource. I would discuss with \
        stakeholders across the project and identify opportunities to build systems \
        that would improve their processes. I would then see them through to delivery \
        and maintenance of said systems mostly single-handedly.',
      keyResponsibilities: [
        '• Managing technical talent in-house as well as remote contractors.',
        '• Continuously improving and simplifying our tech stack.',
        '• Developing software solutions to simplify existing processes.',
        '• Setting up and managing cloud infrastructure.',
        '• Conveying low level software details in high level fashion to management.',
      ],
      projects: [
        'Delivery Tracker',
        'Standalone Intranet',
        'Sharepoint Intranet',
        'Integrated Management System',
        'Material Requisitions System',
        'PowerBI-based Reporting Solutions',
        'Media Library App',
        'Drone Footage GIS System',
        'BIM Visualiser App',
        'Material Marketplace App',
        'Digital Media Library App',
      ],
    },
    {
      employer: 'Essentiads - Freelance',
      date: 'July 2014 - January 2017',
      role: 'Web Developer & Digital Media Designer',
      description:
        'The freelance work has been a ~40-60 split between web and media jobs \
         the web development part being mostly using the LAMP stack.',
      keyResponsibilities: [
        '• Acquiring and managing clients.',
        '• Assessing client needs.',
        '• Seeing projects through from concept to maintenance phases.',
      ],
      projects: [
        'Brambles',
        'Mazaars',
        'KISS Cambridge',
        'FOMO',
        'GECKO UK',
        'Numitas',
        'LQ London',
        'Kera Health France',
        'Roxlor France',
        'Cambridge University',
        'Children In Crisis Charity',
      ],
    },
    {
      employer: 'T Film',
      date: 'July 2012 - July 2014',
      role: 'A/V Partner',
      description:
        'Joined an existing 20 years old business providing audio-visual services\
        for local and occasionally international events',
      keyResponsibilities: [
        '• Managing and Operating A/V equipment',
        '• Managing web presence.',
        '• Processing video footage into a finalized product.',
      ],
      projects: ['Various'],
    },

    {
      employer: 'V Solutions',
      date: '2012 - 2013',
      role: 'Founder',
      description:
        'Joined an acquaintenace to deliver web-presence solutions to local \
        companies mostly using LAMP + Wordpress stack',
      keyResponsibilities: [],
      projects: ['Various'],
    },
  ];
}
