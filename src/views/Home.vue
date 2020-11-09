<template>
  <div class="home">
    <div class="selector">
      <p>Select a Month:</p>
      <select v-model="month" id="month">
        <option v-for="opt in months" 
          v-bind:value="opt.id" v-bind:key="opt.id">{{opt.name}}</option>
      </select>
    </div>
    <div class="info">
      <div class="amounts">
      </div>
      <h2>Amount Spent: ${{totalSpent}}</h2>
      <h2>Amount Earned: ${{totalEarned}}</h2>
      <h2>Amount Saved: {{difference}}</h2>
      <NewTransaction :categories="categories" />
    </div>
    <div class="container">
      <div class="transactions">
        <h2>Spendings</h2>
        <Transactions :transactions="spent" :categories="categories"/>
      </div>
      <div class="transactions">
        <h2>Earnings</h2>
        <Transactions :transactions="earned" :categories="categories"/>
      </div>  
    </div>
  </div>
</template>

<script>
import Transactions from "../components/Transactions.vue"
import NewTransaction from "../components/NewTransaction.vue"

export default {
  name: 'Home',
  components: {
    Transactions,
    NewTransaction
  },
  data() {
    return {
      month: this.getCurrentMonth(),
      transactions: this.$root.$data.transactions
        .sort((a, b) => {
          return new Date(a.date) - new Date(b.date)
        })
    }
  },
  computed: {
    spent() {
      return this.transactions.filter(
        t => new Date(t.date).getMonth() === this.month-1 
        && !this.isIncomeTransaction(t));
    },
    earned() {
      return this.transactions.filter(
        t=> new Date(t.date).getMonth() === this.month-1 && this.isIncomeTransaction(t));
    },
    categories() {
      return this.$root.$data.categories;
    },
    months() {
      return this.$root.$data.months
    },
    totalSpent() {
      return Math.round(this.spent.reduce((a, b) => a+b.amount, 0))
    },
    totalEarned() {
      return Math.round(this.earned.reduce((a,b) => a+b.amount, 0))
    },
    difference() {
      return this.totalEarned - this.totalSpent
    }
  },
  methods: {
    getCurrentMonth() {
      let d = new Date
      return d.getMonth()+1
    },
    isIncomeTransaction(t) {
      let c = this.categories.filter(c => c.id === t.category)[0] 
      if (c.isIncome)
        return true
      return false
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* margin-top: 2rem; */
  }
  .transactions {
    width: 45%;
    min-width: 500px;
    margin-bottom: 2rem;
  }
  .selector {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .selector p {
    padding: 0;
    margin: 0;
  }
  .amounts {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>