<template>
    <div>
        <h4 :class="$store.getters.mainColor+'-text'" class="darken-4"><b>{{ title }}</b></h4>
        <div class="text-secondary">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item-Component",
    props: {
        title: {
            type: String,
            default: "Title"
        },
    }
}
</script>

<style scoped>

</style>