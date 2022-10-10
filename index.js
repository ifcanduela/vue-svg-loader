module.exports = function (src) {
    const name = `InlineSvg:${this.resourcePath.split("/").pop()}`

    return `
        <template>
            ${src}
        </template>

        <script>
            export default {
                name: "${name}"
            }
        </script>
    `
}
