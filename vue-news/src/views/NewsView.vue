<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post">
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
    <!-- <p v-for="item in newsInfo">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by

        <router-link v-bind:to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p> -->
  </div>
</template>

<script>
export default {
  computed: {
    newsInfo() {
      return this.$store.state.news;
    },
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
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
