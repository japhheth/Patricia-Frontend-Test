<template>
  <v-app>
    <!-- Credit Card component -->
    <credit-card />
  </v-app>
</template>

<script>
import CreditCard from "./components/credit-card.vue";
export default {
  name: "App",
  metaInfo() {
    return {
      title: "Card - Patricia Frontend Test",
    };
  },
  components: {
    CreditCard,
  },
};
</script>

<style>
html,
body {
  font: 16px/1.2 BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  padding: 10px;
}
</style>
