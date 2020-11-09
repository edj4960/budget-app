<template>
<div>
  <div class="selectors">
    <input v-model="name" placeholder="Input Name" />
    <div>
      Is Income
      <input type="checkbox" v-model="isIncome"/>
    </div>
  </div>
  <button @click="addCategory">Add Category</button>
  <div class="categories">
  <div class="container">
    <h2>Spending Categories</h2>
    <div class="cat" v-for="cat in spendingCats" v-bind:key="cat.id">
      <p>{{cat.name}}</p>
      <p><i @click="deleteCat(cat.id)" class="fas fa-trash-alt"></i></p>
    </div>
  </div>

  <div class="container">
    <h2>Earning Categories</h2>
    <div class="cat" v-for="cat in incomeCats" v-bind:key="cat.id">
      <p>{{cat.name}}</p>
      <p><i @click="deleteCat(cat.id)" class="fas fa-trash-alt"></i></p>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      categories: this.$root.$data.categories,
      name: '',
      isIncome: false
    }
  },
  methods: {
    addCategory() {
      let new_id = 0
      this.$root.$data.categories.forEach(c => {
        if (c.id > new_id)
          new_id = c.id
      })
      new_id += 1
      let cat = {id: new_id, name: this.name, isIncome: this.isIncome, user: "jones243"}
      this.$root.$data.categories.push(cat)
      this.name = ""
      this.isIncome = false
    },
    deleteCat(id) {
      console.log(id)
      this.categories = this.categories
        .filter(c => {return c.id != id})
    }
  },
  computed: {
    spendingCats() {
      return this.categories.filter((c) => c.isIncome === false)
    },
    incomeCats() {
      return this.categories.filter((c) => c.isIncome === true)
    } 
  }
}
</script>

<style scoped>
.categories {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.cats{
  display: flex;
  flex-direction: column;
}
.cat {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  margin: 0 auto;
  /* background-color: antiquewhite; */
}
.container {
  /* background-color: #42b983; */
  width: 400px;
}
.fa-edit, .fa-trash-alt {
  transition-duration: .25s;
}
.fa-edit:hover, .fa-trash-alt:hover {
  font-size: 20px;
  transition-duration: .25s;
}
.selectors {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 420px;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>