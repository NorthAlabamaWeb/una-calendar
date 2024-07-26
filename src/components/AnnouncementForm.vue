<template>
    <div class="form-container">
      <h2>UNA Announcement Submission Form</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
  
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>

        <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="form.date" required />
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
import { announcementStore } from '../stores/announcementStore';

// Define reactive form data
const form = ref({
  name: '',
  email: '',
  message: '',
  date: ''  
});

// Handle form submission
const handleSubmit = () => {
  // Add form data to store
  announcementStore.entries.push({ ...form.value });

  // Optionally, reset form fields
  form.value = {
    name: '',
    email: '',
    message: '',
    date: ''
  };
};
</script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    background-color: #28a745;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>