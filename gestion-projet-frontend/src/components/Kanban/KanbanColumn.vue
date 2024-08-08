<script setup>
    import KanbanCard from './KanbanCard.vue';
    const props = defineProps({
        statusId: String,
        statusName: String,
        cards: Array,
    });
    const emit = defineEmits(['moveCard']);
    const drop = event => {
        const cardId = event.dataTransfer.getData('text/plain');
        emit('moveCard', parseInt(cardId, 10), props.statusId);
    };
</script>

<template>
    <div
        class="kanban-column text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4 flex-1 mx-2"
        @dragover.prevent
        @drop="drop($event)"
    >
    <h2 class="font-bold mb-2">{{ statusName }}</h2>
        <KanbanCard
            v-for="card in cards"
            :key="card.id"
            :card="card"
        ></KanbanCard>
    </div>
</template>