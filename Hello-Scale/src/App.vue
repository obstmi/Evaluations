<template>
  <scale-app-shell>
    <scale-app-header slot="header" id="header">
      <div slot="menu-sector">
        <scale-nav-segment
          active="true"
          href="#sector-navigation-1"
          @click="clickme = !clickme"
        >
          {{ sectorNavigation1 }}
        </scale-nav-segment>
      </div>
      <div slot="menu-main" v-for="(navItem, index) in navItems" :key="index">
        <scale-nav-main :name="navItem" @click="clickme = !clickme"></scale-nav-main>
      </div>
    </scale-app-header>
    <section>
      <scale-notification-message v-if="clickme" variant="success" opened>
        {{ notificationMessage }}
      </scale-notification-message>

      <img alt="Vue logo" src="@/assets/Hugo.png" />
        <MyFirstComponent msg="You did it!" />
    </section>

    <scale-app-footer
      slot="footer"
      id="footer"
      claim-lang="de"
      :logoHref.prop="telekomHomeUrl"
      :footerNavigation.prop="footerNavigation"
    ></scale-app-footer>

  </scale-app-shell>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyFirstComponent from './components/MyFirstComponent.vue'

// Header
const navItems = [
  'Team Hugo',
  'Gigabit',
  'Miscelleanous'
]

const sectorNavigation1 = 'HappyNewYear'

// Click-Event-Handler
const clickme = ref(false)
const notificationMessage = '*** Happy New Year Team Hugo ***'

// Footer
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
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}

img {
  width: 100%;
  max-width: 500px;
}

</style>
