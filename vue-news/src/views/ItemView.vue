<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">
          {{ fetchedItem.user }}
        </div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ "posted " + fetchedItem.time_ago }} </template>
        <div slot="karma">{{ fetchedItem.karma }}</div>
      </user-profile>
      <!-- 사용자 정보 -->
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-desc">
          <router-link v-bind:to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div> -->
    </section>

    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },

  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", id);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-desc {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
