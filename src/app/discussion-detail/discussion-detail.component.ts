import { Comment } from './../commentModel';
import { CommentService } from './../services/comment.service';
import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from '../discussionModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DiscussionService } from '../services/discussion.service'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.css']
})
export class DiscussionDetailComponent implements OnInit {
  @Input() discussion: Discussion;
  public comments: Comment[]
  public Editor = ClassicEditor;
  public input: string;


  constructor(
    private route: ActivatedRoute,
    private ds: DiscussionService,
    private location: Location,
    private cs: CommentService
    ) {}

  ngOnInit(): void {
    this.getDiscussion()
  }

  getDiscussion(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.ds.getDiscussion(id)
      .subscribe(discussion => this.discussion = discussion)
  }

  // not sure why this doesnt work
  createComment(): void {
    let comment = new Comment('billy', this.input, 0);

    this.ds.addCommentToDiscussion(this.discussion, comment)
    .subscribe(discussion => this.discussion = discussion)
  }

  goBack(): void {
    this.location.back()
  }

}
