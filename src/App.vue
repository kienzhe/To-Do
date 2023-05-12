<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

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

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
