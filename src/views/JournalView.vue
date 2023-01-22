<template>

  <div class="w-11/12 mx-auto mt-20">

    <table class="contact__table flex flex-col justify-start">
      <thead>
      <tr class="flex flex-row">
        <th>Nom</th>
        <th class="ml-20">Numéro</th>
      <th class="ml-28">Date</th>
      </tr>
      </thead>
    <!-- afficher les numero appeler dnas contact -->
      <tbody class="grid grid-cols-3 gap-4 w-full grid-flow-row mt-20">
      <tr class="flex flex-row justify-between" v-for="(contact, index) in contacts" :key="index">
        <td>{{contact.name}}</td>
        <td>{{contact.number}}</td>
        <td>{{contact.date}}</td>

      </tr>
      </tbody>
    </table>

  </div>



</template>

<script>


export default {
  name: "JoualView",

  computed: {
  // afficher les numero appeler dnas contact
    contacts() {
      return this.$store.state.contacts_enregistre
    }
  },

}











</script>

<style scoped>

</style>