/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.onCreateWebpackConfig = ({
    stage,
    getConfig,
    rules,
    loaders,
    actions,
}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '_variables.scss': path.resolve(__dirname, 'src/styles/base/_variables.scss'),
                '_mixins.scss': path.resolve(__dirname, 'src/styles/helpers/_mixins.scss'),
            },
        },
    })
}

const fs = require("fs-extra")
const yaml = require("js-yaml")
const flatten = require("flat")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPreBootstrap = () => {
  console.log("Copying locales")

  const deTranslation = loadTranslationObject("de-ch")
  const enTranslation = loadTranslationObject("en")

  // Create directory structure
  fs.existsSync(path.join(__dirname, "/public/intl")) || fs.mkdirSync(path.join(__dirname, "/public/intl"))

  // Save bundled translation files
  fs.writeFileSync(
    path.join(__dirname, "/public/intl/de-ch.json"),
    JSON.stringify(flatten(deTranslation))
  )
  fs.writeFileSync(
    path.join(__dirname, "/public/intl/en.json"),
    JSON.stringify(flatten(enTranslation))
  )
}

function loadTranslationObject(languageCode) {
  const srcPath = path.join(__dirname, `/src/locales/${languageCode}/`)
  const translationObjects = fs.readdirSync(srcPath).map(file =>
    yaml.load(fs.readFileSync(path.join(srcPath, file)), {
      encoding: "utf-8",
    })
  )
  return Object.assign({}, ...translationObjects)
}