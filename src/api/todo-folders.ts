import TodoFolderModel from '@/models/todo-folder-model'

export type TodoFoldersListType = TodoFolderModel[]

const TestFolders: TodoFoldersListType = [
    {
        name: 'Work todos',
        todos_count: 2,
        created_at: new Date(2021, 4, 15),
    },
    {
        name: 'Home todos',
        todos_count: 4,
        created_at: new Date(2021, 4, 7),
    },
    {
        name: 'Street todos',
        todos_count: 2,
        created_at: new Date(2021, 4, 1),
    },
    {
        name: 'Dayli todos',
        todos_count: 1,
        created_at: new Date(2021, 4, 2),
    },
]

// Fake request
export function getFolders(): Promise<TodoFoldersListType> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(TestFolders)
        }, 4000)
    })
}
