<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <ul class="text-white flex justify-between  bg-green-500 text-xl gap-5 py-5 px-80 ">
        <li class="cursor-pointer"><RouterLink to="/">Home</RouterLink></li>
        <li class="cursor-pointer"><RouterLink to="/jobs">Jobs</RouterLink></li>
        <li class="cursor-pointer"><RouterLink to="/jobs/add">Add job</RouterLink></li>
        <li class="cursor-pointer"><RouterLink to="/contact">contact us</RouterLink></li>
    </ul>
</template>