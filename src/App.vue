<template>
    <div
        id="app-layout"
        class="d-flex align-items-center justify-content-center"
    >
        <div class="TodoContainer px-3 py-2">
            <TodoFoldersList />
            <TodoFolderItemsList v-show="false" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'

import TodoFoldersList from '@/components/TodoFoldersList/index.vue'
import TodoFolderItemsList from '@/components/TodoFolderItemsList/index.vue'

import { getFolders, TodoFoldersListType } from '@/api/todo-folders'

export default defineComponent({
    components: { TodoFoldersList, TodoFolderItemsList },
    setup() {
        const componentState = reactive({
            folders: [] as TodoFoldersListType,
        })

        const getData = async () => {
            componentState.folders = await getFolders()
        }

        onMounted(getData)
    },
})
</script>

<style lang="scss">
@font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
        url('./fonts/OpenSans/OpenSans-Regular.ttf') format('truetype');
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 14px;
    font-family: 'OpenSans';
}

#app-layout {
    width: 100vw;
    min-height: 100vh;
}

.TodoContainer {
    width: 100%;
    max-width: 800px;

    background: rgb(235, 235, 235);
    border-radius: 5px;
}
</style>
