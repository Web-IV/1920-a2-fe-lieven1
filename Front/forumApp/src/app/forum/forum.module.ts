import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { AddForumComponent } from './add-forum/add-forum.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { ForumResolver } from './ForumResolver';
import { AddPostComponent } from './add-post/add-post.component';
import { FollowListComponent } from './follow-list/follow-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  { path: 'forum/list', component: ForumListComponent },
  { path: 'follow/list', component: FollowListComponent },
  /*{ path: 'forum/add', canActivate:[AuthGuard], component: AddForumComponent },*/
  { path: 'forum/detail/:id', component: ForumDetailComponent
    ,resolve: { forum: ForumResolver }
  }
]; 

@NgModule({
  declarations: [PostComponent, ForumListComponent, AddForumComponent, ForumDetailComponent, AddPostComponent, FollowListComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [ForumListComponent, FollowListComponent/*, AddForumComponent*/]
})
export class ForumModule { }
