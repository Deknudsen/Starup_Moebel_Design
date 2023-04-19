<template>
<HeaderComponent/>
<router-view/>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    HeaderComponent
  },
}
</script>

