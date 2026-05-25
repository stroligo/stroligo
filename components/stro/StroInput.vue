<script setup lang="ts">
defineProps<{
  modelValue?: string
  placeholder?: string
  type?: string
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <input
    class="stro-input"
    :type="type ?? 'text'"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  >
</template>
