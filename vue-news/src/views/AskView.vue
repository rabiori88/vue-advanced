<template>
  <div>
    <P v-for="item in fetchedAsk">
      <a :href="item.url">
        {{ item.title }}
      </a>

      <small>
        {{ item.time_age }} by
        <router-link v-bind:to="`/item/${item.id}`">
          {{ item.id }}
        </router-link>
      </small>
    </P>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    //#1
    // ask() {
    //   return this.$store.state.ask;
    // },
    //#2
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
    //#3
    ...mapGetters(["fetchedAsk"]),
  },

  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
