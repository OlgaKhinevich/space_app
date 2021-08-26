export const state = () => ({
   results: [] 
})

export const mutations = ({
    setResults(state, newData) {
        state.results = newData;
    },
    /*changeIsFavourite(state, itemId) {
        state.resulte = state.results.map((el) => {
            if (el.data[0].nasa_id === itemId) { 
                el.isFavourite = !el.isFavourite;  
            }
        }) 
       
    }*/
})
