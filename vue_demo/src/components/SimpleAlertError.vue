<template>
  <div class="card card-danger card-outline mb-0">
    <div class="card-body pb-0">
      <h3 class="error-message-title">{{ $t("ERROR_MESSAGE_TITLE") }}</h3>
      <figure class="highlight">
        <pre>{{ message }}</pre>
      </figure>
    </div>
    <div class="card-footer">
      <button
        type="button"
        id="btn-copy"
        class="btn btn-info"
        v-clipboard:copy="message"
        @click="showCopied = true"
      >
        <i class="far fa-copy"></i>
        {{ $t("COPY_MESSAGE") }}
      </button>
      <button
        type="button"
        class="btn btn-default float-right"
        @click="$emit('close')"
      >
        {{ $t("CLOSE") }}
      </button>
    
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
  max-height: 400px;
  white-space: pre-wrap;
}
</style>

<script>
export default {
  props: {
    message: { type: String, required: true }
  },
  data() {
    return {
     
    };
  }
};
</script>
