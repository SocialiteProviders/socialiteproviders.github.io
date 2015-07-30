{% comment %} Assign variables for current provider {% endcomment %}

{% for provider in site.data.providers %}
    {% if provider.name == page.title %}
        {% assign name = provider.name %}
        {% assign repo = provider.repo %}
        {% assign maintainer = provider.maintainer %}
        {% assign maintainer_profile = provider.maintainer_profile %}
        {% assign package = provider.package %}
        {% assign listener = provider.listener %}

        {% if provider.socialite_name %}
            {% assign socialite_name = provider.socialite_name %}
            {% assign provider_key = provider.socialite_name | upcase %}
        {% else %}
            {% assign provider_key = name %}
        {% endif %}

        {% assign extra_service_lines = provider.extra_service_lines %}
        {% assign extra_env_lines = provider.extra_env_lines %}
    {% endif%}
{% endfor %}

{% comment %} Create the provider key by removing any special chars from the name and upcasing {% endcomment %}

{% assign remove = '. +' | split: ' ' %}

{% for char in remove %}
   {% assign provider_key = provider_key | remove: char %}
{% endfor %}

{% assign provider_key = provider_key | upcase %}


{% comment %}
Include the templates.  They use the above variables.
{% endcomment %}

{% include provider/_contents.md %}

## Installation

{% include provider/installation/_composer.md %}

{% include provider/installation/_service_provider.md %}

{% include provider/installation/_event_and_listeners.md %}

{% include provider/installation/_services_and_env.md %}


## Usage

{% include provider/_usage.md %}
