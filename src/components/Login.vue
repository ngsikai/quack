<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
    };
  },
};

</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  font-size: 130%;
  border-radius: 5px;
  background-color: #4267b2;
  color: #fff;
  cursor: pointer;
}
</style>