<template>
    <li
        class="TodoItem d-flex p-2 justify-content-between align-items-center"
        :class="{ 'TodoItem--completed': item.completed }"
    >
        <div class="d-flex">
            <div class="TodoItem__badge">{{ index }}</div>
            <div class="TodoItem__info d-flex flex-column">
                <p class="TodoItem__info__name">{{ item.name }}</p>
                <p class="TodoItem__info__date">{{ item.created_at }}</p>
            </div>
        </div>

        <TheButton v-if="!item.completed" @click="completeTodo" class="primary">
            Complete
        </TheButton>
    </li>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

import TheButton from '@/components/TheButton/index.vue'

export default defineComponent({
    components: { TheButton },
    props: {
        item: {},
        index: {
            type: Number,
            default: 1,
        },
    },
    setup(props) {
        const emitter: any = inject('emitter')

        const completeTodo = () => {
            emitter.emit('complete-todo', props.index - 1)
        }

        return {
            completeTodo,
        }
    },
})
</script>

<style lang="scss" scoped src="./index.scss" />
