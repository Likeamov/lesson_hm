<template>
  <div>
    <p>{{ $t('home.title') }}</p>
    <p>{{$t('message.greeting')}}</p>
    <button @click="changeLocale('zh')">{{$t('message.chinese') }}
      {{$t('message.chinese')}} </button>
    <button @click="changeLocale('en')">{{$t('message.english') }}
    {{ $t('message.english') }} </button>
    <button @click="changeLocale('jp')">{{$t('message.japanese') }}
    {{ $t('message.japanese') }} </button>
  </div>
</template>

<script >
export default {
  name: 'App',
  methods: {
    changeLocal(local) {
      this.$i18n.locale = local
    }
  }
}
</script>

<style scoped>

</style>