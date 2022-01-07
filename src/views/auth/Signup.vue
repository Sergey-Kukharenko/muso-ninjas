<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <input type="text" placeholder="Display name" v-model="displayName" autocomplete>
    <input type="email" placeholder="Email" v-model="email" autocomplete>
    <input type="password" placeholder="Password" v-model="password" autocomplete>
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import {ref} from "vue";
import useSignup from "@/composables/useSignUp";
import {useRouter} from "vue-router";

export default {
  name: "SignUp",
  setup()
  {
    const {error, signup, isPending} = useSignup()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const displayName = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if(!error.value) {
        await router.push({name: 'UserPlaylists'})
      }
    }

    return {email, password, displayName, isPending, error, handleSubmit}
  }

}
</script>

<style scoped>

</style>
