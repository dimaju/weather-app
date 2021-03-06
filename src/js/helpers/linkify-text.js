const linkifyIt = require('linkify-it')()

const linkifyText = text => {
  let linkifiedText = text
  if (linkifyIt.test(text)) {
    linkifyIt.match(text).forEach(({ url }) => {
      linkifiedText = text.replace(
        url,
        `<a href="${url}" target="_blank">${url}</a>`
      )
    })
  }
  return linkifiedText
}

export default linkifyText
