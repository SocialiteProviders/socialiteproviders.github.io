const providers = require('./providers')

let sidebarItems = []
Object.values(providers).forEach((provider) => sidebarItems.push([
    `/providers/${provider.name}`, provider.name
]))

module.exports = {
  title: 'Socialite Providers',
  description: 'A Collection of Providers for Laravel Socialite',
  themeConfig: { sidebar: sidebarItems.sort() }
}
