import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Discussion } from './discussionModel';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const myDiscussions = [
      { id: 1, author: 'Mr. Nice', title: 'what am i supposed to do if i cant find my keys?', comments: [{id: 1, author: 'dave', content: 'you might try your pocket LULLLLLLL!', likes: 9}, {id: 2, author: 'greg', content: 'try finding them', likes: 7}, {id: 2, author: 'cowman', content: 'moooooo', likes: 4}]}, 
      { id: 2, author: 'ben137', title: 'How many dogs are allowed ina  aprk at one time?', comments: [{id: 1, author: 'johnCena', content: 'i think it doesnt matter', likes: 3}, {id: 2, author: 'cowman', content: 'moooooo', likes: 2}]}, 
    ];
    return {myDiscussions};
  }
  genId(myDiscussions: Discussion[]): number {
    return myDiscussions.length > 0 ? Math.max(...myDiscussions.map(discussion => discussion.id)) + 1 : 11;
  }
}