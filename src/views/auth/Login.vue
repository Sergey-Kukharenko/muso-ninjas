<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" autocomplete>
    <input type="password" placeholder="Password" v-model="password" autocomplete>
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import {ref} from "vue";
import useLogin from "@/composables/useLogin";
import {useRouter} from "vue-router";

export default {
  name: "Login",
  setup()
  {
    const {error, login, isPending} = useLogin()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        await router.push({name: 'UserPlaylists'})
      }
    }

    return {email, password, handleSubmit, error, isPending, router}
  }

}
</script>

<style scoped>

</style>
