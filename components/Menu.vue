<template>
    <nav class="font-mono">
        <ul class="flex space-x-2">
            <li>
                <NuxtLink to="/" class="link">index</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="link">about</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects" class="link">Project</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog" class="link">Blog</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
.link {
    @apply p-1 hover:bg-gray-200
}
</style>