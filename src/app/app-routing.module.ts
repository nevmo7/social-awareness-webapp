import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IssueCardGroupComponent } from './issue-card-group/issue-card-group.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ApprovePostsComponent } from './approve-posts/approve-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'post/:id', component: SinglePostComponent},
  {path: 'approve-posts', component: ApprovePostsComponent},
  {path: '**', pathMatch: 'full', component: IssueCardGroupComponent },
  {path: '', component: IssueCardGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
