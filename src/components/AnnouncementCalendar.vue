<template>
    <div>
      <h1>Calendar</h1>
      <vue-cal
        :events="events"
        @event-click="onEventClick"
        :hide-title-bar="false"
        :time="false"
        style="height: 600px"
      />
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue';
  import { announcementStore } from '../stores/announcementStore';
  import VueCal from 'vue-cal';
  import 'vue-cal/dist/vuecal.css';
  
  export default {
    components: { VueCal },
    setup() {
      const events = ref([]);
  
      const transformEntriesToEvents = () => {
        events.value = announcementStore.entries.map(entry => ({
          title: entry.title,
          start: new Date(entry.startDate),
          end: new Date(entry.endDate),
        }));
      };
  
      onMounted(() => {
        transformEntriesToEvents();
      });

      watch(
        () => announcementStore.entries,
        () => {
            transformEntriesToEvents();
        },
        { deep: true }
        );
  
      return {
        events,
        onEventClick(event) {
          alert(`Event: ${event.title}`);
        },
      };
    },
  };
  </script>
  
  <style>

  </style>