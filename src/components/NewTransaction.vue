<template>
  <div class="wrapper">
    <button v-on:click="open">Add Transaction</button>
    <div class="popup" v-bind:class="{open: isOpen}">
      <i @click="close" class="fas fa-window-close"></i>
      <h2>New Transaction</h2>
      <div class="selector">
        <p>Date</p>
        <input type="date" id="date" v-model="date" />
      </div>
      <div class="selector">
        <p>Amount</p>
        <input type="number" id="amount" step="0.01" v-model="amount" />
      </div>
      <div class="selector">
      <p>Description</p>
        <input id="desc" v-model="desc" />
      </div>
      <div class="selector">
      <p>Category</p>
        <select v-model="category" id="categories">
          <option v-for="opt in categories" 
            v-bind:value="opt.id" v-bind:key="opt.id">{{opt.name}}</option>
        </select>
      </div>
      <button v-on:click="addTransaction">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewTransaction',
  props: {
    categories: Array
  },
  data() {
    return {
      date: new Date(),
      amount: 0.00,
      desc: '',
      category: 0,
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    addTransaction() {
      let transact = {
        id: 0,
        date: this.getDate(),
        amount: this.amount,
        desc: this.desc,
        category: this.category,
        user: 'jones324'
      }
      this.$root.$data.transactions.push(transact)
      this.isOpen = false;
      this.date = new Date()
      this.amount = 0.00
      this.desc = ''
      this.category = 0
    },
    getDate() {
      let d = new Date(this.date)
      d.setDate(d.getDate() + 1)
      let dateString = d.getMonth()+1+'/'+ d.getDate()+'/'+d.getFullYear()
      console.log(d, dateString)
      return dateString
    },
    close() {
      this.isOpen = false;
    }
  }
}
</script>

<style scoped>
.popup {
  display: none;
  width: 18rem;
  height: 22rem;
  background-color: white;
  flex-direction: column;
  padding: 10px 50px;
  border: 5px black solid;
  border-radius: 16px;
  left: calc(50% - 9rem);
  top: calc(50% - 11rem);
}

.open {
  display: flex;
  position: fixed;
}

h2 {
  margin-bottom: 3rem;
}

i {
  position: absolute;
  right: 11px;
  font-size: 28px;
}

.selector {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  justify-content: space-between;
}

.selector p {
  margin: 0 1rem 0 0;
  font-weight: bold;
}
</style>