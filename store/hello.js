export const state = () => ({
    message: 'Hello Vuex!'
})

export const mutations = {
    updateMassege: function(state, payload){
        state.message = payload
    }
}

export const actions = {
    updateMassegeAction(context,payload){
        context.commit('updateMassege',payload)
    }
}