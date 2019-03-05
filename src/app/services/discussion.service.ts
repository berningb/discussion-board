import { Comment } from './../commentModel';
import { Discussion } from './../discussionModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DiscussionService {
  private discussionsUrl = 'api/myDiscussions';
  constructor(
    private http: HttpClient) { }

  getDiscussions(): Observable<Discussion[]> {
    return this.http.get<Discussion[]>(this.discussionsUrl)
  }

  addCommentToDiscussion (discussion: Discussion, comment: Comment): Observable<Discussion> {
    const url = `${this.discussionsUrl}/${discussion.id}`;
    discussion.comments.push(comment)
    console.log(discussion, 'what')
    return this.http.put<Discussion>(url, discussion)
  }
 
  /** GET discussion by id */
  getDiscussion(id: number): Observable<Discussion> {
    const url = `${this.discussionsUrl}/${id}`;
    return this.http.get<Discussion>(url)
  }
 
  /** POST add a new discussion*/
  addDisucssion (newDiscussion: Discussion): Observable<Discussion> {
    return this.http.post<Discussion>(this.discussionsUrl, newDiscussion, httpOptions)
  }
 
  /** DELETE delete the discussion from the server by id or by discussion */
  deleteDiscussion (discussion: Discussion | number): Observable<Discussion> {
    const id = typeof discussion === 'number' ? discussion : discussion.id;
    const url = `${this.discussionsUrl}/${id}`;
    return this.http.delete<Discussion>(url, httpOptions)
  }
 
}
