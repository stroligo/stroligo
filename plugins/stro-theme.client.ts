export default defineNuxtPlugin(() => {
  const { initTheme } = useStroTheme()
  initTheme()
})
