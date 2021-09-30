export default {
    state: () => ({
        name: 'John'
    }),
    getters: {},
    mutation: {
        SET_NAME(state, payload) {
            state.name = payload
        }
    },
    actions: {
        setName({ commit }, data) {
            commit('SET_NAME', data)
        }
    }
}