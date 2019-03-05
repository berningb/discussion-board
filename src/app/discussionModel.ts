import { DiscussionService } from './services/discussion.service';
import { Comment } from './commentModel';

export class Discussion {
    id: number;
    author: string;
    title: string;
    comments: Comment[]

    constructor(id: number, author: string, title: string, comments: Comment[]){}
}