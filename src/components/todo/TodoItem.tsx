import type { ITodoItem } from "../../@types/todo";

export default function TodoItem({ id, title, content }: ITodoItem) {
  return (
    <div className="todo-item">
      <div className="todo-title">{title}</div>
      <div className="todo-content">{content}</div>
    </div>
  );
}
