import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '@/views/homePage/homePage.vue'
import LandingPage from '@/views/landingPage/landingPage.vue'
import NewNote from '@/views/newNote/newNote.vue';
import NoteItems from '@/views/noteItems/noteItems.vue';
import MyNotes from '@/views/myNotes/myNotes.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },

  {
    path: '/about',
    name: 'about',
    component: LandingPage
  },

  {
    path: '/new-note',
    name: 'newNote',
    component: NewNote
  },

  {
    path: '/note-items',
    name: 'noteItems',
    component: NoteItems
  },

  {
    path: '/my-notes',
    name: 'myNotes',
    component: MyNotes
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;