<template>


  <div class="affichage mt-20">
    <h1 class="uppercase font-bold text-xl">numero : {{numero}}</h1>
  </div>



  <div>

  <div class="clavier">
<div class="clavier__row grid grid-cols-3 gap-3 w-1/3 mx-auto mt-20">

    <button class="clavier__button mb-8" v-for="n in 9" :key="n" @click="addNumber(n)">{{n}}</button>
    <button class="clavier__button mb-8" @click="addNumber(0)">0</button>
    <button class="clavier__button mb-8" @click="addNumber('*')">*</button>
    <button class="clavier__button mb-8" @click="addNumber('#')">#</button>
    <button class="clavier__button mb-8" @click="call('📞')"></button>
    <button class="clavier__button mb-8"></button>
    <button class="clavier__button" @click="supNumber(sup)">🔙</button>

</div>



  </div>





</div>

</template>

<script>




export default {
  name: 'ClavierView',
  data() {
    return {
      number: '',
    }
  },
  methods: {
    addNumber(n) {
      this.number += n
    },

    // eslint-disable-next-line no-unused-vars
    supNumber(n) {
      this.number = this.number.slice(0, -1)
    },

    //recupéré le numero de la page clavier et l'afficher dans journal
    call(n) {
      this.number += n
      this.$store.commit('addJournal', this.number)
      this.number = ''
    }



  },


  computed: {
    numero() {
      return this.number
    },
  }
}


</script>
