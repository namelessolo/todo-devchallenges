import { createContext, PropsWithChildren, useState, useContext, useEffect } from "react";

type Todos = {
  title: string;
  done: boolean;
  id: string;
};

type Context = {
  todos: Todos[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  setDone: (id: string) => void;
  deleteComplete: () => void;
};

const TodosContext = createContext<Context>({
  todos: [],
  addTodo: (title: string) => {},
  removeTodo: (id: string) => {},
  setDone: (id: string) => {},
  deleteComplete: () => {},
});

export const useTodoContext = () => useContext(TodosContext);

const TodoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodo = (title: string) => {
    setTodos([...todos, { title, done: false, id: new Date().toISOString() }]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setDone = (id: string) => {
    const todosCopy = [...todos];
    const todo = todosCopy.find((todo) => todo.id === id);
    if (!todo) return;
    todo.done = !todo.done;
    setTodos(todosCopy);
  };

  const deleteComplete = () => {
    const filteredCompleted = todos.filter((todo) => todo.done !== true);
    setTodos(filteredCompleted);
    console.log("elo");
  };

  useEffect(() => {
    const localTodos = localStorage.getItem("todos") || null;
    if (localTodos) setTodos(JSON.parse(localTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={{ addTodo, removeTodo, todos, setDone, deleteComplete }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodoProvider;
