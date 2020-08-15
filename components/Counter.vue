<template>
    <div>
        <h2>{{ title }}</h2>
        <p>counter:{{ $store.state.counter.counter }}</p>
        <button v-on:click="$store.commit('counter/countUp')">+1</button>
        <button v-on:click="$store.commit('counter/reset')">reset</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                title: 'Counter'
            }
        }
    }
</script>