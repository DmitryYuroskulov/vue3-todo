<template>
    <ul class="TodoFoldersList">
        <h3>Your folders ({{ folders.length }})</h3>

        <TodoFolder
            v-for="(folder, i) in folders"
            :key="`TodoFolder-${i}`"
            :folder="folder"
            :class="{ 'TodoFolder--active': activeFolderIndex === i }"
            @click="$emit('select-folder', i)"
        />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TodoFolder from '@/components/TodoFolder/index.vue'

export default defineComponent({
    components: { TodoFolder },
    props: {
        activeFolderIndex: {
            type: Number,
            default: 0,
        },
        folders: {},
    },
})
</script>

<style lang="scss" scoped src="./index.scss" />
