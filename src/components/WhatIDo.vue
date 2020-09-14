<template>
    <div class="">
        <div class="flex flex-col w-40 mb-10">
            <p class="text-2xl font-emibold">
                What I Do
            </p>
            <div class="line" />
        </div>
        <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
            <div
                v-for="item of items"
                :key="item.title"
                class="item"
            >
                <div class="item-icon">
                    <i :class="item.icon" />
                </div>
                <div class="item-text">
                    <p>{{ item.title }}</p>
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    icon: 'fab fa-vuejs',
                    title: 'VueJS',
                    text: 'I code vue',
                },
                {
                    icon: 'fab fa-wordpress',
                    title: 'Wordpress',
                    text: 'I Do wordpress stuff',
                },
                {
                    icon: 'fab fa-laravel',
                    title: 'Laravel',
                    text: 'I code vue',
                },
                {
                    icon: 'fab fa-php',
                    title: 'PHP',
                    text: 'I code vue',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.line {
    @apply w-1/4;
    height: 2px;
    background: #34eba1;
}

.item {
    @apply flex items-center;
    & > .item-icon {
        @apply w-2/12 text-5xl;
    }

    & > .item-text {
        @apply w-10/12;

        & > p:first-child {
            @apply text-xl font-medium;
        }

        & > p:last-child {
            @apply text-sm;
        }
    }
}
</style>