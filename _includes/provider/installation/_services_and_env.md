### 4. Configuration setup

For development purpose, needed configuration is automatically retrieved from your .env if they are written as exactly shown below.
However we reccomand to **manually add an entry to the services configuration file** because after config files are cached for usage in production environment (Laravel command `artisan config:cache`), **values stored in the .env file are not accessible anymore by the application and the provider won't work**.

#### Append provider values to your `.env` file

```php
// other values above
{{ provider_key }}_KEY=yourkeyfortheservice
{{ provider_key }}_SECRET=yoursecretfortheservice
{{ provider_key }}_REDIRECT_URI=https://example.com/login {% if extra_env_lines != empty %} {% for line in extra_env_lines %}
{{ provider_key }}_{{ line.key | upcase }}={{ line.value }} {% endfor %} {% endif %}
```



#### Add to `config/services.php`.

```php
'{{ provider_key | downcase }}' => [
    'client_id' => env('{{ provider_key }}_KEY'),
    'client_secret' => env('{{ provider_key }}_SECRET'),
    'redirect' => env('{{ provider_key }}_REDIRECT_URI'), {% if extra_service_lines != empty %} {% for line in extra_service_lines %}
    '{{ line.key | downcase }}' => env('{{ provider_key }}_{{ line.value | upcase }}'), {% endfor %}
], {% else %}
],
{% endif %}
```

#### Reference

* [Laravel docs on configuration](http://laravel.com/docs/master/configuration)
