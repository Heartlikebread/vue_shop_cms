<template>
  <div class="card card-danger card-outline mb-0">
    <div class="card-body pb-0">
      <h3 class="error-message-title">{{ $t('ERROR_MESSAGE_TITLE') }}</h3>
      <figure class="highlight">
        <pre>{{ response.data.message }}</pre>
      </figure>
    </div>
    <div class="card-footer">
      <button
        type="button"
        id="btn-copy"
        class="btn btn-info"
        v-clipboard:copy="response.data.message"
        @click="showCopied = true"
      >
        <i class="far fa-copy"></i>
        {{ $t('COPY_MESSAGE') }}
      </button>
      <button
        type="button"
        class="btn btn-default float-right"
        @click="$emit('close')"
      >{{ $t('CLOSE') }}</button>
      <b-tooltip :disabled="true" :show="showCopied" target="btn-copy" placement="top">Copied!</b-tooltip>
    </div>
  </div>
</template>

<style scoped>
.error-message-title {
  color: #dc3545;
}

.highlight {
  background-color: #f8f9fa;
}

pre {
  max-height: 300px;
  white-space: pre-wrap;
}
</style>

<script>
export default {
  name: "apiErrorHandler",
  props: {
    response: Object
  },
  data() {
    return {
      showCopied: false
    };
  }
};
</script>
