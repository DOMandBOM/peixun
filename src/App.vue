<template>
  <div>
    <template v-if="$route.meta.type">
      <!-- <ylTop></ylTop> -->
    <!-- <ylLogo></ylLogo> -->
    <ylNav :homeName="homeName" :submenuArr="submenuArr" :menuArr="menuArr"></ylNav>
    <router-view :key="$route.fullPath"/>

    <!-- <ylBotMenu></ylBotMenu> -->
    <!-- <ylFooter></ylFooter> -->
    <!-- <ylFixation @changeState="changeState1" :flagState="flagState"></ylFixation> -->
    </template>
    <template v-else>
    <router-view :key="$route.fullPath"/>
  </template>
  </div>
</template>

<script>
// import ylTop from '@/components/ylTop.vue'
// import ylLogo from '@/components/ylLogo.vue'
import ylNav from '@/components/ylNav.vue'

// import ylBotMenu from '@/components/ylBotMenu.vue'
// import ylFooter from '@/components/ylFooter.vue'
// import ylFixation from '@/components/ylFixation.vue'

import { getNavList } from '@/api/ylNavList'
export default {
  data () {
    return {
      flag: false,
      homeName: {},
      submenuArr: [],
      menuArr: [],
      flagState: true
    }
  },
  components: {
    // ylTop,
    // ylLogo,
    ylNav
    // ylBotMenu
    // ylFooter
    // ylFixation
  },
  created () {
    this.getNav()
  },
  methods: {
    async getNav () {
      await getNavList()
    },
    changeState1 (val) {
      this.flagState = val
    }
  }
}
</script>
<style>

</style>
