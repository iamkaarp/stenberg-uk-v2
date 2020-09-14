<template>
    <div class="container mx-auto">
        <face />
        <what-i-do />
        <fun-facts />
    </div>
</template>

<script>
import Face from '@/components/Face.vue';
import WhatIDo from '@/components/WhatIDo.vue';
import FunFacts from '@/components/FunFacts.vue';

export default {
    components: {
        Face,
        WhatIDo,
        FunFacts,
    },
};
</script>