{% for provider in site.data.providers %}
    {% if provider.name == page.title %}
        {% assign name = provider.name %}
        {% assign repo = provider.repo %}
        {% assign maintainer = provider.maintainer %}
        {% assign maintainer_profile = provider.maintainer_profile %}
        {% assign package = provider.package %}
        {% assign listener = provider.listener %}
        {% assign extra_service_lines = provider.extra_service_lines %}
        {% assign extra_env_lines = provider.extra_env_lines %}
    {% endif%}
{% endfor %}

{% include provider/_contents.md %}

## Installation

{% include provider/installation/_composer.md %}

{% include provider/installation/_service_provider.md %}

{% include provider/installation/_event_and_listeners.md %}

{% include provider/installation/_services_and_env.md %}


## Usage

{% include provider/_usage.md %}
