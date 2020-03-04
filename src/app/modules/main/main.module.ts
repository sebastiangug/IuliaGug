import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../../components/portfolio-item/portfolio-item.component';
import { PortfolioComponent } from '../../pages/portfolio/portfolio.component';
import { SkillsComponent } from '../../pages/skills/skills.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { AboutComponent } from '../../pages/about/about.component';
import { SkillComponent } from '../../components/skill/skill.component';
import { LoginComponent } from '../../pages/login/login.component';
import { WipOverlayComponent } from '../../components/wip-overlay/wip-overlay.component';
import { DevComponent } from '../../components/dev/dev.component';
import { TagComponent } from '../../pages/tag/tag.component';
import { SkillDetailsComponent } from '../../components/skill-details/skill-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PortfolioComponent,
    SkillsComponent,
    ContactComponent,
    AboutComponent,
    SkillComponent,
    PortfolioItemComponent,
    LoginComponent,
    WipOverlayComponent,
    DevComponent,
    TagComponent,
    SkillDetailsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      JSON.parse(localStorage.getItem('firebase')),
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [SkillDetailsComponent],
})
export class MainModule {}
