<template>
    <ul class="TodoList">
        <h3>{{ folder.name }} todos ({{ folder.todos.length }})</h3>

        <TodoItem
            v-for="(todo, i) in folder.todos"
            :key="`TodoItem-${i}`"
            :item="todo"
            :index="i + 1"
        />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TodoItem from '@/components/TodoItem/index.vue'

export default defineComponent({
    components: { TodoItem },
    props: {
        folder: {},
    },
})
</script>

<style lang="scss" scoped src="./index.scss" />
