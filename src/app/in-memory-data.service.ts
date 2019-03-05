import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const myDiscussions = [
      {  id: 1, 
         author: 'Mr. Nice', 
         title: 'what am i supposed to do if i cant find my keys?', 
         comments: [
           {  id: 1, 
            author: 'dave', 
            content: 'you might try your pocket LULLLLLLL!', 
            likes: 9
          }, 
          { id: 2, 
            author: 'greg', 
            content: 'try finding them', 
            likes: 7
          }, 
          { id: 2, 
            author: 'cowman', 
            content: 'moooooo', 
            likes: 4
          }
        ]
      }, 
      {  id: 1, author: 'james', 
         title: 'what is the meaning of life?', 
         comments: [
           {  id: 1, 
            author: 'george', 
            content: '42', 
            likes: 9
          }
        ]
      }, 
      {  id: 1, author: 'ted', 
         title: 'are carrots bad for you?', 
         comments: [
          { id: 2, 
            author: 'cowman', 
            content: 'moooooo', 
            likes: 4
          }
        ]
      }, 
    ];
    return {myDiscussions};
  }
}