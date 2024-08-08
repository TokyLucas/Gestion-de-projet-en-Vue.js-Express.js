<script setup>
    import { ref, reactive, onMounted} from 'vue';
    import KanbanColumn from './KanbanColumn.vue';
    import { RepositoryFactory } from '../../repository/RepositoryFactory'
    
    const taskRepository = RepositoryFactory.get("task");
    const taskStatusRepository = RepositoryFactory.get("taskStatus");

    import { userStore } from '../../stores/userStore'

    var userData = userStore()

    const cards = ref([
        { id: 1, title: 'Task 1', status: 1 },
    ]);

    var state = reactive({
        columnStatuses: [],
        tasks: [],
        isSaving: false,
        savingMessage: "",
        savingError: ""
    });

    const moveCard = (cardId, newStatus) => {
        const card = state.tasks.find(card => card.id === cardId);
        if (card) {
            state.isSaving = true;
            state.savingMessage = "";
            state.savingError = "";
            card.TaskStatusId = newStatus;

            var tsRequest = taskRepository.update(card, card.id);
            tsRequest
                .then(result => {
                    // state.columnStatuses = result.data.data;
                    state.savingMessage = "Tache mise a jour";
                })
                .catch(error => state.savingError = error.response.data.message)
                .finally ( () => {
                    state.isSaving = false;
                });
        }
    };

    onMounted(() => {
        var tsRequest = taskStatusRepository.findAll();
        tsRequest
            .then(result => {
                state.columnStatuses = result.data.data;
            })
            .catch(error => console.error('(2) Inside error:', error));
        var taskRequest = taskRepository.findByUserId(userData.user.id);
        taskRequest
            .then(result => {
                state.tasks = result.data.data;
            })
            .catch(error => console.error('(2) Inside error:', error));
    })
</script>

<template>
    <div style="width: 100%">
        <div class="p-4 mb-4 text-sm text-white-800 rounded-lg bg-yellow-50 dark:bg-yellow-800 dark:text-white-400" role="alert">
            Déplacer les taches pour mettre leurs status
        </div>
        <div v-if="state.isSaving" class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-blue-800 dark:text-blue-400" role="alert">
            Mis a jour en cours ...
        </div>
        <div v-if="state.savingMessage" class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-green-800 dark:text-green-400" role="alert">
            {{ state.savingMessage }}
        </div>
        <div v-if="state.savingError" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-800 dark:text-red-400" role="alert">
            {{ state.savingError }}
        </div>
        <div class="kanban-board flex justify-around p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-screen" >
            <KanbanColumn
                v-for="status in state.columnStatuses"
                :key="status.id"
                :statusId="`${status.id}`"
                :statusName="status.name"
                :cards="state.tasks.filter(task => task.TaskStatusId == status.id)"
                @moveCard="moveCard"
            ></KanbanColumn>
        </div>
    </div>
</template>

<style>
    .kanban-board{
        width: 100%
    }
</style>