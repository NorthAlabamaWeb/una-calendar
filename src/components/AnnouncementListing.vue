<template>
    <div class="listings-container">
      <h2>Form Entries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in entries" :key="index">
            <td>{{ entry.name }}</td>
            <td>{{ entry.email }}</td>
            <td>{{ entry.message }}</td>
          </tr>
          <tr v-if="entries.length === 0">
            <td colspan="3">No entries found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { announcementStore } from '../stores/announcementStore';
  
  // Get the entries from the store
  const entries = computed(() => announcementStore.entries);
  </script>
  
  <style scoped>
  .listings-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f4f4f4;
  }
  </style>