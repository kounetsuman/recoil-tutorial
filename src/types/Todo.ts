export type Todo = {
    id: number;
    text: string;
    isComplete: boolean;
};

export type TodoListFilter = 'Show All' | 'Show Completed' | 'Show Uncompleted';
export const isTodoListFilter = (value: any): value is TodoListFilter => {
    return value === 'Show All' || value === 'Show Completed' || value === 'Show Uncompleted';
}