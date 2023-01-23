<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.ask" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by

            <router-link class="link-text" v-bind:to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
.news-list {
  margin: 0px;
  padding: 0px;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
