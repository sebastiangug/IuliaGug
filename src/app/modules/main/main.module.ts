import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../../components/portfolio-item/portfolio-item.component';
import { PortfolioComponent } from '../../pages/portfolio/portfolio.component';
import { SkillsComponent } from '../../pages/skills/skills.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { AboutComponent } from '../../pages/about/about.component';
import { SkillComponent } from '../../components/skill/skill.component';
import { LoginComponent } from '../../pages/login/login.component';
import { DevComponent } from '../../components/dev/dev.component';
import { TagComponent } from '../../pages/tag/tag.component';
import { SkillDetailsComponent } from '../../components/skill-details/skill-details.component';
import { SharedModule } from '../shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule, Route } from '@angular/router';
import { ResumeComponent } from '../../pages/resume/resume.component';
import { HomeComponent } from '../../pages/home/home.component';
import { AuthService } from '../../services/auth.service';
import { AdminGuard } from '../../guards/admin.guard';
import { MiniSkillComponent } from '../../components/mini-skill/mini-skill.component';
import { FullImageComponent } from '../../components/full-image/full-image.component';
import { ImageComponent } from '../../components/image/image.component';

const routes: Route[] = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../../modules/admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard],
  },
  {
    path: 'skills',
    component: SkillsComponent,
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'resume',
    component: ResumeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    PortfolioComponent,
    MiniSkillComponent,
    SkillsComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SkillComponent,
    PortfolioItemComponent,
    LoginComponent,
    DevComponent,
    TagComponent,
    SkillDetailsComponent,
    ResumeComponent,
    FullImageComponent,
    ImageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    AngularFireModule.initializeApp(
      JSON.parse(localStorage.getItem('firebase-config')),
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AdminGuard],
  entryComponents: [SkillDetailsComponent],
})
export class MainModule {}
