<template>
    <section class="not-prose font-mono">
        <div class="column text-gray-400 text-sm">
            <div>data</div>
            <div>title</div>
        </div>
        <ul>
            <li v-for="post in posts" :key="post._path">
                <NuxtLink :to="post._path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div :class="{ 'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear }">
                        {{ post.year }}</div>
                    <div>{{ post.title }}</div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
const { data: fetchedData } = await useAsyncData(
    'blog-list', () => queryContent('/')
        .only(['_path', 'title', 'publishedAt'])
        .sort({ publishedAt: -1 })
        .where({ _path: { $ne: '/blog' } })
        .find()
)

const posts = computed(() => {
    if (!fetchedData.value) {
        return []
    }

    const result = []
    let lastYear = null

    for (const post of fetchedData.value) {
        const year = new Date(post.publishedAt).getFullYear()
        const displayYear = year !== lastYear
        post.displayYear = displayYear
        post.year = year
        result.push(post)
        lastYear = year
    }

    return result
})
</script>

<style scoped>
.column {
    @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>