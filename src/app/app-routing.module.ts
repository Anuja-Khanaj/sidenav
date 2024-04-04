import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { PostsComponent } from './posts/posts.component';
import { PagesComponent } from './pages/pages.component';
import { CommentsComponent } from './comments/comments.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { PluginsComponent } from './plugins/plugins.component';
import { SettingsComponent } from './settings/settings.component';
import { ToolsComponent } from './tools/tools.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Dashboard',component:HomeComponent},
  {path:'Media',component:MediaComponent},
  {path:'Posts',component:PostsComponent},
  {path:'Pages',component:PagesComponent},
  {path:'Comments',component:CommentsComponent},
  {path:'Appearance',component:AppearanceComponent},
  {path:'Plugins',component:PluginsComponent},
  {path:'Users',component:UsersComponent},
  {path:'Settings',component:SettingsComponent},
  {path:'Tools',component:ToolsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
