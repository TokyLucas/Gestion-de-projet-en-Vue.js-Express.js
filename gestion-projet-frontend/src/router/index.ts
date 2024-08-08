import { createRouter, createWebHistory } from 'vue-router'

import AccueilView from './../views/AccueilView.vue'
import ProjectView from './../views/ProjectView.vue'
import TaskView from './../views/TaskView.vue'
import UserView from './../views/UserView.vue'
import LoginView from './../views/LoginView.vue'

import { userStore } from '../stores/userStore';
import { getCookie } from 'typescript-cookie'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/connexion',
            name: 'connexion',
            component: LoginView,
        },
        {
            path: '/',
            name: 'accueil',
            component: AccueilView,
            children: [
                {
                    path: 'admin/project',
                    name: 'adminProject',
                    component: ProjectView
                },
                {
                    path: 'admin/project/:projectId/tasks',
                    name: 'adminTask',
                    component: TaskView
                },
                {
                    path: 'admin/user',
                    name: 'adminUser',
                    component: UserView
                },
            ]
        },
    ]
})

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/connexion'];
    const authRequired = !publicPages.includes(to.path);
    const auth = userStore();

    if (authRequired && ( !auth.user || !getCookie("token"))) {
        return '/connexion';
    }
});

export default router
