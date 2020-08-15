<template lang="pug">
    transition(name="drawer")
        div.drawer
            header
                h1.-title タイトル
                //- button(@close)
            slot(name="contents")
            slot(name="footer")
                double-button
</template>

<script>
import Counter from '~/components/atom/DoubleButton.vue';
export default {
    components: {
        DoubleButton
    }
</script>
<style lang="sass" scoped>
.drawer
    &-enter
        opacity: 0
    &-enter-active
        transition: opacity 1s
    &-enter-to
        opacity: 1
    &-leave
        opacity: 1
    &-leave-action
        transition: opacity 1s
    &-leave-to
        opacity: 0
</style>