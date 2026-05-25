<script setup lang="ts">
defineProps<{
  modelValue?: string
  placeholder?: string
  rows?: number
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <textarea
    class="stro-input stro-textarea"
    :rows="rows ?? 4"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="
      $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
    "
  />
</template>
