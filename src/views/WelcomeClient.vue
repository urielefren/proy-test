<template>
  <div>
    <h1>Welcome {{ nameCustomer }}</h1>
    <input type="number" v-model="digit1" pattern="[0-9]" @keypress="handleCodes"/>
    <input type="number" v-model="digit2" pattern="[0-9]" @keypress="handleCodes"/>
    <input type="number" v-model="digit3" pattern="[0-9]" @keypress="handleCodes"/>
    <input type="number" v-model="digit4" pattern="[0-9]" @keypress="handleCodes"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  computed: {
    nameCustomer(): string {
      return this.$store.getters.fullName;
    },
  },
  data: () => {
    return {
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
    };
  },
})
export default class WelcomeClient extends Vue {
  public handleCodes(event: any) {
    console.log('event: ', event.target.value);
    if (/^[0-9]+/i.test(event.target.value) && event.target.value.length === 1) {
      console.log('valid ...');
    } else {
      event.target.value = '';
    }
  }
}
</script>
