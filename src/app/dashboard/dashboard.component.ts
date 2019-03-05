import { Discussion } from './../discussionModel';
import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../services/discussion.service'
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  discussions: Discussion[];
  myControl = new FormControl();
  filteredOptions: Observable<Discussion[]>;

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
    let dis = new Discussion(3, 'greg', title, null);

    if (!title) { return; }
    this.ds.addDisucssion(dis)
      .subscribe(discussion => {
        this.discussions.push(discussion);
      });
    console.log(this.discussions)
  }

}
