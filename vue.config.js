const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: "Anota Aí | Controle financeiro",
    themeColor: "#B073AE"
  }
})