import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes,RouterModule} from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemTextPipe } from './blog-item-text.pipe';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {DataServiceService} from './services/data-service.service';




const appRoutes: Routes = [
  {
	path: 'home-component',
	component: HomeComponentComponent
  },
  {
	path: 'blog',
	component: BlogComponent,
},
{
	path: 'quiz',
	component: QuizComponent ,
},
{
	path: 'contact',
	component: ContactComponent,
}

];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponentComponent,
    NavbarComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemTextPipe,
    BlogItemImageComponent,
    FilterPipe,
    BlogHomeComponent,
    SearchBarComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,

  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]

})
export class AppModule {
}



