import userRepository from './userRepository';
import userRoleRepository from './userRoleRepository';
import taskRepository from './taskRepository';
import taskStatusRepository from './taskStatusRepository';
import projectRepository from './projectRepository';

// Lister toutes les repositorie pour accès facile
var repositories: Record<any, any> = {
    user: userRepository,
    userRole: userRoleRepository,
    task: taskRepository,
    taskStatus: taskStatusRepository,
    project: projectRepository
};

// ReposiotryFactory sera l'instance appelé dans les vues ou component
// et retournera la repository spécifié
export const RepositoryFactory = {
    get: (name: any) => repositories[name]
};