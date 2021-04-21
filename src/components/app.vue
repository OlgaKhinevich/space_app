<template>
    <div class="app">
        <Menu @searchResults="searchResults" @openFavorite="openFavorite"/>
        <template v-if="mode === 'results'">
            <Results :results="results"/>
    <!-- Люблю тебя, солнышко) -->
        </template>
        <template v-if="mode === 'favourites'">
            <Favourites />
        </template>  
        <template v-if="mode === 'picture'">
            <Picture />
        </template>
        
        
    </div>
</template>

<script>
import Menu from './Menu/Menu.vue';
import Picture from './Picture/Picture.vue';
import Results from './Results/Results.vue';
import Favourites from './Favourites/Favourites.vue';
export default {
    data() {
      return {
          results: [],
          mode: 'picture'
      }  
    },
    components: {
        Menu,
        Picture,
        Results,
        Favourites
    },
    methods: {
        searchResults(newData) {
            this.results = newData;
            this.mode = "results";
        },
        openFavorite() {
            this.mode = 'favourites';
        }
    }
}

</script>

<style lang="scss" scoped>
       .app {
           display: flex;
           flex-direction: row;
           height: 100%;
           width: 100%;
           background-color: #242424;
       }
    
</style>
