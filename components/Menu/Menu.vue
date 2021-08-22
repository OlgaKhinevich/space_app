<template>
  <div class="menu">
      <div class="menu__list" v-if="menuMode==''">
        <ul>
          <li @click="changeMenuMode('search')"><a href="#">Space media search</a></li>
          <li><router-link to="/favourites">Favourite media</router-link></li>
          <li><router-link to="/horoscope">Horoscope</router-link></li>
        </ul>
      </div>
      <div class="menu__search" v-if="menuMode=='search'">
        <a class="menu__back_btn" @click="changeMenuMode('')">&#171; Back to main menu</a>
        <input type="text" v-model="spaceTerm">
        <div class="menu__btn" @click="findResults">Search</div>
        <div class="menu__history">
          <h4><i class="fas fa-history"></i>  Search history</h4>
          <div class="menu__history_list">
            <p v-for="(item,index) in history" :key="index" :data-id="index" class="history-item">
              {{item}}
              <i class="fa fa-trash" aria-hidden="true" @click="deleteHistoryItem"></i>
            </p>
          </div>  
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      spaceTerm: [],
      history: [],
      menuMode: ''
    }  
  },
  mounted() {
    if (!localStorage["history"]) {
      localStorage["history"] = "[]";
    } else {
      this.history = JSON.parse(localStorage["history"]);
    }
  },
  methods: {
    changeMenuMode(mode) {
      this.menuMode = mode;
    },
    deleteHistoryItem(e) {
      const deleteItem = e.target.closest(".history-item").dataset.id;
      this.history.splice(deleteItem, 1);
      localStorage["history"] = JSON.stringify(this.history); 
    },
    async findResults() {
      try {
          if(!this.spaceTerm) throw new Error("Empty field!");
          const response = await fetch(`https://images-api.nasa.gov/search?q=${this.spaceTerm}`);
          if(!response.ok) throw new Error(response.statusText);
          const data = await response.json();
          const spaceData = data.collection.items;
          const newData = spaceData.filter((item) => item.data[0].media_type == "image");
          this.$store.commit('results/setResults', newData);
          let mass = JSON.parse(localStorage["history"]);
          mass.push(this.spaceTerm);
          localStorage["history"] = JSON.stringify(mass);
          this.$router.push('/results');
      } catch(err) {
          console.log(err);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    height: 100%;
    width: 20%;
    padding: 30px 0 0 30px;
    i { color: $first-color; }
    .menu__list {
      ul {
        list-style-type: none;
        li { 
          margin-bottom: 15px;
          a {
            text-decoration: none;
            color: $first-color;
            font-family: $first-font;
          }
        }
      }
    } 
    input {
      border-radius: 3px;
      border: none;
      height: 28px;
      padding-left: 5px;
      margin: 20px 0;
      width: 80%;
    }
    .menu__btn {
      height: 28px;
      width: 100px;
      background-color: none;
      border: 2px solid $first-color;
      line-height: 28px;
      text-align: center;
      border-radius: 5px;
      font-family: $first-font;
      font-weight: 500; 
      color: $first-color;
      padding: 2px 0 3px 0;
      cursor: pointer;
    }
    p {
      font-family: $first-font;
      font-weight: 400;
      color: $second-color;
      margin-top: 10px;
    }
    .menu__back_btn {
      font-family: $first-font;
      font-weight: 400;
      color: $second-color;
      text-decoration: none;
    } 
    .menu__history {
      font-family: $second-font; 
      margin-top: 20px;
      overflow: auto;
      h4 {
        color: $first-color;
        font-weight: 400;
        margin: 15px 0; 
      }
      .menu__history_list {
        height: auto;
        max-height: 58vh;
        margin: 0;
        overflow-y: hidden;
        &:hover{
          overflow-y: auto;
          overflow-x: hidden;
          overflow-scrolling: touch;
        }
        ::-webkit-scrollbar {
	        width: 5px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background-color: rgba(0,0,0,0.5);
          box-shadow: 0 0 1px rgba(255,255,255,0.5);
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: white;
        }
      }
    }
  }
</style>