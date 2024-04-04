import HomePage from './components/HomePage.vue'
import ClubPage from './components/ClubPage.vue'
import VideoGallery from './components/VideoGallery.vue'
import EventsPage from './components/EventsPage.vue'
import CouncilPage from './components/CouncilPage.vue'
import UserPage from './components/UserPage.vue'
import PhotoCompetition from './components/PhotoCompetition.vue'
import EventSlug from './components/EventSlug.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'







import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'ClubPage',
        component: ClubPage,
        path: '/clubs'
    },
    {
        name: 'VideoGallery',
        component: VideoGallery,
        path: '/gallery'
    },
    {
        name: 'EventsPage',
        component: EventsPage,
        path: '/events'
    },
    {
        name: 'CouncilPage',
        component: CouncilPage,
        path: '/council'
    },
    {
        name: 'UserPage',
        component: UserPage,
        path: '/user'
    },
    {
        name: 'PhotoCompetition',
        component: PhotoCompetition,
        path: '/iitmbs_friends_photo_competition'
    },
    {
        name: 'EventSlug',
        component: EventSlug,
        path: '/event/:slug'
    },
    {
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
        path: '/privacy-policy'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router