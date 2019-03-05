import { Comment } from './../commentModel';
import { HttpClient } from '@angular/common/http';
import { Discussion } from './../discussionModel';
import { DiscussionService } from './discussion.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
discussions: Discussion[]
newComment: Comment[]


  constructor(public ds: DiscussionService, public http: HttpClient) { }

  createComment(comment: Comment,  discussion: Discussion) {
    discussion.comments.push(comment)
  }
}
