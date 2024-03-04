<template>
  <div>
    <div class="container mx-auto max-w-2xl">
        <header class="flex justify-between items-center mt-5 ">
          <div class="flex items-center space-x-12">
            <div>
                <NuxtLink to="/" class=" p-2 text-xl font-semibold hover:bg-gray-200"> Sara etemadian</NuxtLink>
            </div>
            <Menu/>
          </div>
          <div>
            <ColorModeSelector/>
          </div>
        </header>
    </div>
    <main class="p-2 mt-5">
              <slot />
    </main>
  </div>
   
</template>
<script setup>
// const colorMode=useColorMode()
// console.log(colorMode.preference);
// colorMode.preference='light'
useHead({
  titleTemplate: '%s-My App',
  meta: [
    { name: 'description', content: 'My  site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>
<style>
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>