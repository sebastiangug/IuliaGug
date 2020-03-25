import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IMiniSkill } from '../../components/mini-skill/mini-skill.component';

interface IPortfolioItem {
  name: string;
  description: string;
  skills: IMiniSkill[];
  images: string[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  public readonly portfolioItems: IPortfolioItem[] = [
    {
      name: '@tlabs/reports',
      description:
        'SPA/PWA statically served with a single serverless backend \
         function booting up a nestjs app on firebase. \
         At some point deployed with SSR on lambda as an experiment \
         but reverted to firebase for LTS. It does contain a mild implementation \
         of multitenancy at query level intended to limit the results regionally \
         based on who is running the query. Query results are also cached and restored \
         locally via redux.',
      skills: [
        { image: 'typescript.png', name: 'TypeScript' },
        { image: 'angular.png', name: 'Angular' },
        { image: 'pwa.png', name: 'PWA' },
        { image: 'd3.png', name: 'D3' },
        { image: 'node.png', name: 'Node' },
        { image: 'redux.png', name: 'Redux' },
        { image: 'mapbox.png', name: 'Mapbox' },
        { image: 'nestjs.png', name: 'Nestjs' },
        { image: 'mongodb.png', name: 'Mongo DB' },
        { image: 'firebase.png', name: 'Firebase' },
        { image: 'firestore.png', name: 'Firestore' },
      ],
      images: [
        'portfolio/reports/1.png',
        'portfolio/reports/2.png',
        'portfolio/reports/3.png',
        'portfolio/reports/4.png',
        'portfolio/reports/5.png',
        'portfolio/reports/6.png',
        'portfolio/reports/7.png',
      ],
    },
    {
      name: '@tlabs/orders',
      description:
        'Multitenant PWA intended for clients staff to be able to place orders \
      for asbestos surveys on the properties that they manage. It allows them to also keep track of \
      existing orders and their status. It has been designed to give the ability to provide \
      residents with survey information based on unique ref code so that they can track the engineers \
      location in real time although that feature has not yet reach the production stage.',
      skills: [
        { image: 'typescript.png', name: 'TypeScript' },
        { image: 'angular.png', name: 'Angular' },
        { image: 'pwa.png', name: 'PWA' },
        { image: 'd3.png', name: 'D3' },
        { image: 'node.png', name: 'Node' },
        { image: 'mapbox.png', name: 'Mapbox' },
        { image: 'nestjs.png', name: 'Nestjs' },
        { image: 'mongodb.png', name: 'Mongo DB' },
        { image: 'azure.png', name: 'Azure' },
        { image: 'ssr.png', name: 'SSR' },
      ],
      images: [
        'portfolio/orders/1.png',
        'portfolio/orders/2.png',
        'portfolio/orders/3.png',
        'portfolio/orders/4.png',
        'portfolio/orders/5.png',
        'portfolio/orders/6.png',
      ],
    },
    {
      name: '@tlabs/AGRS',
      description:
        'Advanced Geographic Routing System meant to navigate the data on our vehicles \
      in order to report on the routes that were taken and the locations they traveled to. \
       A routing module is in the works which would enable using machine learning via an \
       Azure serverless function with python runtime to plan in advance who goes where.\
       A phd student is currently doing research work on this in-house.',
      skills: [
        { image: 'typescript.png', name: 'TypeScript' },
        { image: 'angular.png', name: 'Angular' },
        { image: 'pwa.png', name: 'PWA' },
        { image: 'd3.png', name: 'D3' },
        { image: 'node.png', name: 'Node' },
        { image: 'mapbox.png', name: 'Mapbox' },
        { image: 'nestjs.png', name: 'Nestjs' },
        { image: 'mongodb.png', name: 'Mongo DB' },
        { image: 'python.png', name: 'Python' },
        { image: 'wasm.png', name: 'WebAssembly' },
        { image: 'rust.png', name: 'Rust' },
        { image: 'tensorflow.png', name: 'Tensorflow' },
        { image: 'azure.png', name: 'Azure' },
        { image: 'azure-functions.png', name: 'Serverless' },
      ],
      images: [
        'portfolio/agrs/1.png',
        'portfolio/agrs/2.png',
        'portfolio/agrs/3.png',
      ],
    },
    {
      name: '@tlabs/DFMS',
      description:
        'The Document flow management system is a multitenant SaaS I have architected \
      with tlabs in mind as its first client, rather than the other way around. It is meant to be \
      delivered either through expanding the in-house team or through an outsourced development team \
      abroad. I would be happy to go through the work that has been done during an interview.',
      skills: [],
      images: [],
    },
    {
      name: '@tlabs/Theo',
      description:
        'Theo is the name of the legacy CRM that was created by an outside contractor \
      It has been built with React, Mongodb and Meteor as a realtime application. On top of minor support \
      I have mostly been involved in untangling the spaghetti methods and data models as any future systems \
      will have to be built on top of the dataset. It has been the only reason to go with MongoDB on the other \
      applications.',
      skills: [],
      images: [],
    },
  ];
}
