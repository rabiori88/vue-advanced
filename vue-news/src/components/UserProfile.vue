<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-desc">
      <slot name="username"> </slot>

      <div class="time">
        <slot name="time"></slot>
      </div>
      <div>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  //   computed: {
  //     userInfo() {
  //       return this.$store.state.user;
  //     },
  //   },
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
