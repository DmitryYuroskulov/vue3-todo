<template>
    <div
        id="app-layout"
        class="d-flex align-items-center justify-content-center"
    >
        <div id="app-container" class="py-3 px-4">
            <div class="row">
                <div class="col-12 col-md-4">
                    <TodoFoldersList
                        :folders="appState.folders"
                        :active-folder-index="appState.activeFolderIndex"
                        @select-folder="selectFolder"
                    />
                </div>

                <div class="col-12 col-md-7">{{ appState.folders }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import TodoFoldersList from '@/components/TodoFoldersList/index.vue'

export default defineComponent({
    components: { TodoFoldersList },
    setup() {
        const appState = reactive({
            activeFolderIndex: 0,
            folders: [
                {
                    name: 'Folder Name',
                    todos: [],
                },
                {
                    name: 'Work',
                    todos: [],
                },
                {
                    name: 'Street',
                    todos: [],
                },
                {
                    name: 'Street',
                    todos: [],
                },
            ],
        })

        const selectFolder = (folder_index: number) => {
            appState.activeFolderIndex = folder_index
        }

        return { appState, selectFolder }
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

body {
    background-color: #f3f9fd;
}

#app-layout {
    width: 100vw;
    min-height: 100vh;
}

#app-container {
    width: 100%;
    max-width: 1200px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
        0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
