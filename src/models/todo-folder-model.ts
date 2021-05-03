type FOLDER_NAME = string
type FOLDER_TODOS_COUNT = number
type FOLDER_CREATED_AT = Date

export default interface TodoFolderModel {
    name: FOLDER_NAME
    todos_count: FOLDER_TODOS_COUNT
    created_at: FOLDER_CREATED_AT
}
