<template>
  <div>
    <form @submit.prevent="addNewCustomer">
      <label>First Name:</label>
      <input type="text" v-model="firstName"/><br>
      <label>Last Name:</label>
      <input type="text" v-model="lastName"/><br>
      <label>Phone:</label>
      <input type="text" v-model="phone"/><br>
      <label>Email:</label>
      <input type="text" v-model="email"/>
      <button type="submit">Send Data</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import IContact from '../models/contact.model';

@Component({
  components: {
    HelloWorld,
  },
  data: () => {
    return {
      firstName: 'uriel',
      lastName: 'carballido',
      phone: '4545454323232',
      email: 'ur@ur.com',
    };
  },
})

export default class ContactForm extends Vue {
  public addNewCustomer(): void {
    if (this.validateAboutYouForm()) {
      this.$store.dispatch('setUserData', this.getCustomerData());
      this.$router.push({name: 'welcome'});
    } else {
      alert('Invalid Form...');
    }
  }

  private getCustomerData(): IContact {
    const contact: IContact = {
      firstName: this.$data.firstName,
      lastName: this.$data.lastName,
      email: this.$data.email,
      phone: this.$data.phone,
    };
    return contact;
  }

  private validateAboutYouForm(): boolean {
    if (this.$data.firstName && this.$data.lastName) {
      if (this.$data.email || this.$data.phone) {
        return true;
      }
    }
    return false;
  }
}
</script>
