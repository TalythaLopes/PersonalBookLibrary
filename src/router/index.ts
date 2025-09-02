import InicialView from '@/views/init/InicialView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import CitationView from '@/views/init/CitationView.vue';
import TimelineView from '@/views/bottomNavBar/TimelineView.vue';
import SearchView from '@/views/bottomNavBar/SearchView.vue';
import ProfileView from '@/views/profile/ProfileView.vue';
import LibraryView from '@/views/profile/LibraryView.vue';
import MenuView from '@/views/bottomNavBar/MenuView.vue';
import BookDetailView from '@/views/book/BookDetailView.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
   { path: '/', name: 'Inicial', component: InicialView },
   { path: '/login', name: 'Login', component: LoginView },
   { path: '/register', name: 'Register', component: RegisterView },
   { path: '/quote', name: 'Quote', component: CitationView },
   { path: '/timeline', name: 'Timeline', component: TimelineView },
   { path: '/search', name: 'Search', component: SearchView },
   { path: '/profile', name: 'Profile', component: ProfileView },
   { path: '/library', name: 'Library', component: LibraryView},
   { path: '/menu', name: 'Menu', component: MenuView},
   { path: '/book/:id', name: 'BookDetail', component: BookDetailView }
 ];

const router = createRouter({
  history: createWebHistory(),
  routes
});

 export default router;
