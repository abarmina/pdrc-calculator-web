<template>
  <div>
    <h1>{{ $t('classes') }}</h1>

    <table class="classes-table table">
      <tr class="fz-1">
        <th>{{ $t('class') }}</th>
        <th>{{ $t('length') }}</th>
        <th>{{ $t('width') }}</th>
      </tr>
      <tr v-for="(clss, index) of classes" :key="index">
        <td>{{ clss.title }}</td>
        <td>{{ clss.length | range }} {{$t('meter')}}</td>
        <td>{{ clss.width | range}} {{$t('meter')}}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.classes-table th,
.classes-table td {
  padding: 15px;
  text-align: center;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      classes: ({ params }) => (params ? params.classes : [])
    })
  },

  filters: {
    range: function({ from, till }) {
      if (till === "Infinite") return `> ${from}`;
      return `${from} ~ ${till}`;
    }
  }
};
</script>