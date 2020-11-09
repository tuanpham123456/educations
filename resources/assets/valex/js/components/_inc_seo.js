var SEO = {
    init : function ()
    {
        this.keyperssInput()
    },
    keyperssInput: function () {
        $(".keypress-count").keyup(function (event) {
            event.preventDefault()
            let $this = $(this)
            console.log($this)
        })
    }
}
export default SEO
