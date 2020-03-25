import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IMiniSkill } from '../../components/mini-skill/mini-skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  public readonly coreSkills: IMiniSkill[] = [
    { image: 'typescript.png', name: 'TypeScript' },
    { image: 'js.png', name: 'JavaScript' },
    { image: 'angular.png', name: 'Angular' },
    { image: 'pwa.png', name: 'Web Apps' },
    { image: 'nestjs.png', name: 'Nestjs' },
    { image: 'github.png', name: 'GitHub' },
    { image: 'azure.png', name: 'Azure' },
    { image: 'd3.png', name: 'D3.js' },
    { image: 'sql.png', name: 'SQL' },
    { image: 'mongodb.png', name: 'Mongo DB' },
    { image: 'rxjs.png', name: 'Rxjs' },
    { image: 'github.png', name: 'GitHub' },
    { image: 'scss.png', name: 'Sassy CSS' },
    { image: 'gis.png', name: 'GIS' },
    { image: 'firebase.png', name: 'Firebase' },
    { image: 'azure-pipelines.png', name: 'Pipelines' },
    { image: 'socket-io.png', name: 'Socket.io' },
    { image: 'azure-functions.png', name: 'Serverless' },
    { image: 'azure-active-directory.png', name: 'AAD' },
    { image: 'keyvault.png', name: 'Keyvault' },
    { image: 'o365.png', name: 'O365' },
    { image: 'oauth.png', name: 'OAUTH' },
  ];

  public readonly growingSkills: IMiniSkill[] = [
    { image: 'rust.png', name: 'Rust' },
    { image: 'wasm.png', name: 'WebAssembly' },
    { image: 'powerbi.png', name: 'PowerBI' },
    { image: 'react.png', name: 'React' },
    { image: 'neo4j.png', name: 'neo4j' },
    { image: 'postgis.png', name: 'PostGIS' },
    { image: 'csharp.png', name: 'C#' },
    { image: 'unity.png', name: 'Unity' },
    { image: 'tensorflow.png', name: 'Tensorflow' },
    { image: 'java.png', name: 'Java' },
    { image: 'python.png', name: 'Python' },
    { image: 'gremlin.png', name: 'Gremlin' },
  ];

  public readonly pausedSkills: IMiniSkill[] = [
    { image: 'php.png', name: 'php' },
    { image: 'aws-lambda.png', name: 'lambda' },
    { image: 'aws.png', name: 'AWS' },
    { image: 'gcp.png', name: 'GCP' },
    { image: 'css.png', name: 'CSS' },
    { image: 'firestore.png', name: 'Firestore' },
    { image: 'wordpress.png', name: 'WordPress' },
    { image: 'magento.png', name: 'Magento' },
    { image: 'mysql.png', name: 'MySQL' },
  ];
}
