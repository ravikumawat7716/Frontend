<template>
  <NavBar />

  <body class="dark:bg-black">
    <!-- hero section -->
    <section class="bg-white dark:bg-black">
      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h1
            class="text-3xl font-semibold text-gray-800 dark:text-[#eab308] lg:text-4xl"
          >
            Welcome to Sundarbans House, IIT Madras!
          </h1>
          <p class="mt-6 text-gray-500 dark:text-gray-300">
            Providing a dynamic, inclusive environment for academic growth! Our
            vibrant community includes diverse clubs, engaging events, and a
            dedicated house council for peer support, driving positive change
            and holistic student development.
          </p>
          <!-- <router-link
            v-if="upcomingEvents && upcomingEvents.length > 0"
            :to="'/event/' + (upcomingEvents[0].slug || '')"
          >
            <button
              class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white dark:text-black capitalize dark:bg-white bg-black rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
            >
              Participate in {{ upcomingEvents[0].title }}
            </button>
          </router-link>
          <button
            v-else
            class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white dark:text-black capitalize dark:bg-white bg-black rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
            @click="$router.push('/user')"
          >
            Find Your Group
          </button>
          <br> -->
          <button
            class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white dark:text-black capitalize dark:bg-white bg-black rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
            @click="$router.push('/user')"
          >
            Join Groups
          </button>
        </div>

        <div class="flex justify-center mt-10">
          <img
            class="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src="../assets/iitmphoto.jpg"
          />
        </div>
      </div>
    </section>

    <!-- events -->
    <section class="bg-white dark:bg-black">
      <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
          <h1
            class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
          >
            Upcoming Events
          </h1>
          <p class="max-w-lg mx-auto mt-4 text-gray-500">
            Coming Soon: Mark Your Calendar!
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div v-for="event in upcomingEvents" :key="event.slug">
            <img
              class="relative z-10 object-cover w-full rounded-md h-96"
              :src="prependBackendLink(event.image)"
              alt="Event Image"
            />
            <div
              class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-black"
            >
              <a
                :href="event.form_url"
                class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                {{ event.title }}
              </a>
              <p
                class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm"
              >
                {{ truncateDescription(event.desc) }}
              </p>
              <p class="mt-3 text-sm text-[#eab308]">
                {{ event.timestamp }}
              </p>
              <p
                class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm"
              >
                Deadline: {{ event.deadline }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- gallery  -->
    <section class="bg-white py-10 dark:bg-black">
      <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
          <h1
            class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
          >
            From Youtube
          </h1>

          <p class="max-w-lg mx-auto mt-4 text-gray-500">
            A curated collection of videos for your enrichment!
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div
            class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
            style="padding-top: 56.25%"
          >
          <YoutubeVid videoId="6N-PfwyjsIQ" />
            
          </div>

          <div
            class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
            style="padding-top: 56.25%"
          >
          <YoutubeVid videoId="RLBxlaK_aU4" />
            
          </div>
        </div>
      </div>

      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/2 lg:w-1/4 w-full">
            <div
              class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
              style="padding-top: 56.25%"
            >
            <YoutubeVid videoId="TvkTrLJonbw" />
              
            </div>
          </div>
          <div class="p-4 md:w-1/2 lg:w-1/4 w-full">
            <div
              class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
              style="padding-top: 56.25%"
            >
            <YoutubeVid videoId="kEsry2TSVKU" />
              
            </div>
          </div>
          <div class="p-4 md:w-1/2 lg:w-1/4 w-full">
            <div
              class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
              style="padding-top: 56.25%"
            >
            <YoutubeVid videoId="QW4T_FQzi2I" />
              
            </div>
          </div>
          <div class="p-4 md:w-1/2 lg:w-1/4 w-full">
            <div
              class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
              style="padding-top: 56.25%"
            >
            <YoutubeVid videoId="rZdih019rz4" />
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- latest events -->
    <section class="bg-white dark:bg-black">
      <div class="container px-6 py-10 mx-auto">
        <h1
          class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"
        >
          Latest Events
        </h1>

        <p class="mt-4 text-center text-gray-500 dark:text-gray-300">
          Explore our most recent events, keeping you in the loop with the
          latest happenings and exciting activities within our community.
        </p>

        <div class="dark:text-white grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="event in latestEvents" :key="event.slug">
            <router-link :to="'/event/' + event.slug" class="block relative">
              <img class="relative z-10 object-cover w-full rounded-md h-96" :src="prependBackendLink(event.image)"
                alt="Event Image">
              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-black">

                {{ event.title }}
                <p class="mt-3 text-sm text-[#eab308]">
                  {{ event.timestamp }}
                </p>
              </div>
            </router-link>
          </div>
      </div>
    </div>
    </section>
  </body>
</template>

<script>
import NavBar from "./NavBar.vue";
import YoutubeVid from "./YoutubeVid.vue";
import axios from 'axios'
const api = axios.create({
  baseURL: "https://backend-sundarbans.iitmbs.org",
});
export default {
  name: "HomePage",
  components: {
    NavBar,
    YoutubeVid,
  },
  data() {
    return {
      admins: [], // Data will be fetched dynamically
      latestEvents: [],
      upcomingEvents: [],
    };
  },
  async mounted() {
    // Fetch admin data and events when the component is mounted
    await Promise.all([this.fetchEvents()]);
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await api.get("/events", {
          mode: "cors",
        });
        if (response.status!=200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = response.data
        console.log("API Response:", data); // Log the entire response
        // Separate events into latest and upcoming
        this.latestEvents = (data.latest_events || []).slice(0, 3);
        this.upcomingEvents = data.upcoming_events || [];
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
    prependBackendLink(url) {
      // Replace with your actual backend link
      //const backendLink = "https://sundarbans.camlio.shop";
      // Check if the URL already starts with 'http' or '/'
      //return url && url.startsWith("/") ? backendLink + url : url;
      return url && url.startsWith('/') ? api.defaults.baseURL + url : url;
    },
    truncateDescription(description) {
      const maxLength = 100;
      return description.length <= maxLength
        ? description
        : description.substring(0, maxLength) + "...";
    },
  },
};
</script>
