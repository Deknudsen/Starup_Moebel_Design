<template>
<HeaderComponent/>
<router-view/>
<FooterComponent/>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
/* import firebase from './firebase';
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      router.replace('/login');
    } else if (route.path == "/login") {
      router.replace('/');
    }
  })
}) */

let auth
const isLoggedin = ref(false)

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user) {
      isLoggedin.value = true
    }
    else {
      isLoggedin.value = false
    }
  })
})


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    HeaderComponent,
    FooterComponent
},
}
</script>

<style lang="scss" scoped>
  * {
    background-color: $White;
  }
//Header
.header {
  font-family: $TitleFont;
  font-size: 24px;
  color: $Black;
}



</style>