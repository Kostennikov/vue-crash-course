<template>
    <div id="layout">
        <Header/>
        <router-view></router-view>
    </div>

</template>
<script>
import Header from '@/components/Header'

export default {
  name: 'Layout',
  components: {
    Header,
  
  }
}
</script>