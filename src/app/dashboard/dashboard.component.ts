import { Component, OnInit } from '@angular/core';
import { Discussion } from '../discussionModel'
import { DiscussionService } from '../services/discussion.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  discussions: Discussion[];

  constructor(private ds: DiscussionService) { }

  ngOnInit() {
    this.getDiscussions()
  }

  getDiscussions(): void {
    this.ds.getDiscussions()
      .subscribe(discussions => this.discussions = discussions)
  }

  createDiscussion(title: string): void {
    //TODO | hard coded my discussion for testing
    let dis = new Discussion();
    dis.author = 'greg'
    dis.id = 3;
    dis.title = title
    dis.comments = []
    console.log(dis)

    if (!title) { return; }
    this.ds.addDisucssion(dis)
      .subscribe(discussion => {
        this.discussions.push(discussion);
      });
    console.log(this.discussions)
  }

  // deleteDiscussion(discussion: Discussion): void {
  //   this.discussions = this.discussions.filter(d => d !== discussion)
  //   this.ds.deleteDiscussion(discussion).subscribe()
  // }

}
