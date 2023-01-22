<template>
  <!-- crée un modal avec un formulaire pour ajoutée un contact -->
  <div class="modal hidden" id="modal">
    <div class="modal__content">
      <h2 class="uppercase text-xl font-bold">Ajouter un contact</h2>
      <button class="modal__close" @click="closeModal">x</button>
      <form class="modal__form" @submit.prevent="addContact">
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" v-model="name" required>
        <label for="number">Numéro</label>
        <input type="number" id="number" name="number"  v-model="number" required>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  </div>

  <!-- crée un tableau avec les contacts -->
  <div class="contact">
    <button class="contact__add uppercase text-xl font-bold mt-20" @click="openModal">Ajouter un contact</button>
    <table class="contact__table w-11/12 mx-auto mt-8">
      <thead class="flex flex-row">
        <tr>
          <th>Nom</th>
          <th class="pl-32">Numéro</th>
          <th class="pl-20">Actions</th>
        </tr>
      </thead>
      <tbody class="mt-8 flex flex-col">
        <tr class="flex flex-row justify-between w-1/4" v-for="(contact, index) in contacts" :key="index">
          <td>{{contact.name}}</td>
          <td>{{contact.number}}</td>
          <td>
            <button @click="deleteContact(index)">x</button>
            <button @click="editContact(index)">✎</button>
            <button @click="callContact(index)">📞</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>




</template>

<script>
export default {
  name: "ContactView",


  computed: {
     contacts() {
        return this.$store.state.contacts_enregistre
      }
    },

  methods: {
    openModal() {
      document.getElementById('modal').style.display = 'block'
    },
    closeModal() {
      document.getElementById('modal').style.display = 'none'
    },


    addContact() {
      this.contacts.push({
        name: this.name,
        number: this.number,
      })
      this.closeModal()
      this.name = ''
      this.number = ''
      this.closeModal()
    },

    deleteContact(index) {
      this.contacts.splice(index, 1)
    },
    editContact(index) {
      this.name = this.contacts[index].name
      this.number = this.contacts[index].number
      this.contacts.splice(index, 1)
      this.openModal()
    },
    // appel le numéro du contact sélectionné et l'afficher dans journal
    callContact(index) {
      this.$store.commit('addNumber', this.contacts[index].number)
      this.$router.push('/')
    }


  },
}


</script>

<style scoped>

</style>