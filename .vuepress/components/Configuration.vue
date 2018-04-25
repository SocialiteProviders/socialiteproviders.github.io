<template>
    <div>
        ### 4. Configuration setup

        You will need to add an entry to the services configuration file so that after config files are cached for usage in production environment (Laravel command `artisan config:cache`) all config is still available.

        #### Add to `config/services.php`.

        ```php
        '{{ providerKey.toLowerCase() }}' => [
            'client_id' => env('{{ providerKey }}_KEY'),
            'client_secret' => env('{{ providerKey }}_SECRET'),
            'redirect' => env('{{ providerKey }}_REDIRECT_URI')
        ],
        ```

        #### Reference

        * [Laravel docs on configuration](http://laravel.com/docs/master/configuration)
    </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
    providerKey () {
      return this.data.title
    }
  }
}
</script>

