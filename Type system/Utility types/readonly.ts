interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";

// >> Cannot assign to 'title' because it is a read - only property.
