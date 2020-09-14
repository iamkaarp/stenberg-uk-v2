<template>
    <div>
        Fun Facts
    </div>
</template>

<script>
export default {
    mounted() {
        const dateOneObj = new Date('2007-06-05');
        const dateTwoObj = new Date();
        const milliseconds = Math.abs(dateTwoObj - dateOneObj);
        const hours = milliseconds / 36e5;

        console.log(Math.floor(hours / 8));
    },
};
</script>

<style>

</style>