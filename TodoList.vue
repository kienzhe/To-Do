<template>
    <div>
      <h1>Todo List</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
          <button @click="remove(todo.id)">Remove</button>
        </li>
      </ul>
      <div>
        <input type="text" v-model="newTodoText" placeholder="Enter a new todo" />
        <button @click="add">Add</button>
      </div>
    </div>
    <div>Total Todos: {{ totalTodos }}</div>

  </template>
  

<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, text: "Learn Vue 3" },
        { id: 2, text: "Build a Todo List" },
        { id: 3, text: "Master Vuex" },
      ],
      newTodoText: "",
    };
  },
  methods: {
    add() {
      if (this.newTodoText.trim() !== "") {
        const newTodo = { id: Date.now(), text: this.newTodoText.trim() };
        this.todos.push(newTodo);
        this.newTodoText = "";
      }
    },
    remove(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  },
    // ...
  },
  computed: {
    totalTodos() {
      return this.todos.length;
    },
  },
  // ...
}

</script>
