<script setup>
    const props = defineProps({
        card: Object,
        saving: String,
        saved: String
    });
    const dragStart = (event, card) => {
        event.dataTransfer.setData('text/plain', card.id);
    };
</script>

<template>
    <div
        class="kanban-card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 mb-2 cursor-pointer"
        draggable="true"
        @dragstart="dragStart($event, card)"
    >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ card.name }}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">{{ card.description }}</p>

    </div>
</template>