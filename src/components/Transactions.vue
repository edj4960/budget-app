<template>
  <div class="wrapper">
    <table class="transactions">
      <tr>
        <th>Date</th>
        <th>Amount</th>
        <th>Description</th>
        <th>Category</th>
      </tr>
      <tr class="transaction" v-for="transact in transactions" :key="transact.id">
        <td class="date">{{transact.date}}</td>
        <td class="amount">${{transact.amount}}</td>
        <td class="desc">{{transact.desc}}</td>
        <td class="category">{{getCategory(transact.category)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'Transactions',
  props: {
    transactions: Array,
    categories: Array,
  },
  methods: {
    getCategory(num) {
      // debugger
      return this.categories.filter(c => c.id === num)[0].name
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  /* border-collapse:separate;
  border-spacing: 1rem; */
  text-align: left;

}

table, td, th {
  border: 2px solid grey;
}

td, th {
  padding: 3px;
}

td {
  background-color: #FBFAFA;
}

th {
  background-color: #42b983;
}

/* .transaction {
  display: flex;
  flex-direction: row;
}

.transaction > div {
  margin-right: 1rem;
} */

</style>