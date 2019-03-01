import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from '../discussionModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DiscussionService } from '../services/discussion.service'

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.css']
})
export class DiscussionDetailComponent implements OnInit {
  @Input() discussion: Discussion;

  constructor(
    private route: ActivatedRoute,
    private ds: DiscussionService,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.getDiscussion()
  }

  getDiscussion(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.ds.getDiscussion(id)
      .subscribe(discussion => this.discussion = discussion)
  }

  goBack(): void {
    this.location.back()
  }

}
