import type { ITodoItem } from '../../types/todo';
import TodoItem from './TodoItem';

interface ITodoList {
  todos: ITodoItem[];
}
export default function TodoList({ todos }: ITodoList) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} />
      ))}
    </div>
  );
}
