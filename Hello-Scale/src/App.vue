<template>
  <scale-app-shell>
    <scale-app-header slot="header" id="header">
      <div slot="menu-main">
        <scale-nav-main name="Custom Item #1"></scale-nav-main>
        <scale-nav-main name="Custom Item #2"></scale-nav-main>
        <scale-nav-main name="Custom Item #3"></scale-nav-main>
        <scale-nav-main name="Custom Item #4"></scale-nav-main>
      </div>
    </scale-app-header>
    <div>
      <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />
      <HelloWorld msg="You did it!" />
    </div>
    <scale-app-footer slot="footer" id="footer" claim-lang="de" :logoHref.prop="telekomHomeUrl" :footerNavigation.prop="footerNavigation"></scale-app-footer>

  </scale-app-shell>
</template>

<script setup lang="ts">
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
