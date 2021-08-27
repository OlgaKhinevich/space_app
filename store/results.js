export const state = () => ({
   results: [] 
})

export const mutations = ({
    setResults(state, newData) {
        state.results = newData;
    }
})
