import { Tag } from './tag';

export interface Taskint {
    id: number,
    img?: string,
    tags: Array<Tag>,
    title: string,
    description?: string,
    notes?: string,
    due: number,
    status: string
}

export class Task implements Taskint {
    id: number;
    img?: string;
    tags: Array<Tag> = [];
    title: string;
    description?: string;
    notes?: string;
    due = Date.now();
    status = 'incomplete';
}
