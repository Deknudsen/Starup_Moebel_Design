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

<style lang="scss" scoped>
  
//Header
.header {
  font-family: $TitleFont;
  font-size: 24px;
  color: $Black;
}

</style>