export class Urls {
    static readonly SLASH = '/';
    static readonly PATH_DASHBOARD = 'dashboard-page';
    static readonly PATH_TODO_LIST ='todo-list';
    static readonly PATH_TODO_DAD = 'todo-dad';
}

export interface PageUrlPair{
    page: string,
    url: string
}
export const PAGEURLS: PageUrlPair[]= [
 { page: "ダッシュボード", url:"dashboard-page"},
 { page: "ToDoリスト", url: "todo-list"},
 { page: "カンバン型ToDoリスト", url: "todo-dad"},
]