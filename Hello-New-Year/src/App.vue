<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div>
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <scale-app-footer claim-lang="de" :logoHref="telekomHomeUrl" :footerNavigation="footerNavigation"></scale-app-footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const telekomHomeUrl = 'https://www.telekom.de/start'
const footerNavigation = [
  {
    name: 'Kontaktformular',
    id: 'Contact',
    href: 'https://www.telekom.de/hilfe'
  },
  {
    name: 'Nutzungsbedingungen',
    id: 'Terms and conditions',
    href: 'https://www.telekom.de/is-bin/INTERSHOP.enfinity/WFS/EKI-PK-Site/-/-/-/ViewAGB-TextQuery?SearchText=&wt_mc=alias_1156_agb'
  },
  {
    name: 'Impressum',
    id: 'Impressum',
    href: 'https://www.telekom.de/start/impressum'
  },
  {
    name: 'Datensschutz',
    id: 'Data privacy',
    href: 'https://www.telekom.de/datenschutz-ganz-einfach',
    icon: 'alert-imprint-dataprivacy'
  }
]
</script>

<style scoped>
</style>
