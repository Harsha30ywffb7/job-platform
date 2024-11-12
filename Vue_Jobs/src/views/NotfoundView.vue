<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="m-auto">
        <p class="text-green-800 text-4xl font-bold">
        page Not found Error
        </p>
        <p class="text-green-800 text-3xl font-bold">404 Error</p>
        <RouterLink to="/">
            <button>Back to Home</button>
        </RouterLink>
        
    </div>
</template>