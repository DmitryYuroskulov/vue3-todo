<template>
    <li class="TodoFolder d-flex align-items-center py-2 px-1">
        <div class="TodoFolder__badge">{{ folder.name[0] }}</div>
        <div class="TodoFolder__info d-flex flex-column">
            <p>{{ folder.name }}</p>
            <p class="TodoFolder__info__count">
                todos: {{ folder.todos.length }}
            </p>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        folder: {},
    },
})
</script>

<style lang="scss" scoped src="./index.scss" />
