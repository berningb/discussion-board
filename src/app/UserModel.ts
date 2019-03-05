
export class User {
    id: number;
    name: string;
    commentIds: number[]



    constructor(id:number, name: string, commentIds: number[]) {
        this.id = id
        this.name = name
        this.commentIds = commentIds
    }

    getId(user: User) {
        return user.id
    }

}
