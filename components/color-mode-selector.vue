<template>
    <div class="flex items-center space-x-2 ">
        <button @click="toggleMode" @mouseenter="showNextModelLabel=false" @mouseleave="showNextModelLabel=true" class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500">{{ nextModeIcon }}</button>
        <div class="text-gray-500 text-xs">Change to: {{ nextMode }}</div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
const modes = [
    'system',
    'light',
    'dark'
]
const nextModeIcons = {
    system: '🌓',
    light: '🌕',
    dark: '🌑'
}
const showNextModelLabel=ref(false)
const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(colorMode.preference)
    let nextModeIndex = null
    if (currentModeIndex + 1 === modes.length) {
        nextModeIndex = 0

    } else {
        nextModeIndex = currentModeIndex + 1
    }
    return modes[nextModeIndex]
})
const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => colorMode.preference = nextMode.value
</script>