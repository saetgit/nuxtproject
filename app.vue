<template>
  <div>
    <!-- <NuxtLayout :name="layout"> -->
      <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'My Site',
  ogTitle: 'My  Site',
  description: 'This is my site, let me tell you all about it.',
  ogDescription: 'This is my  site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
 const layout='another'
</script>