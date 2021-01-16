var Course = {
    init: function (){
        this.saveCourseContent()
    },

    saveCourseContent(){
        $(".js-course-content").click( function (event){
            event.preventDefault()
            console.log('1')
        })
    }

}
export default Course
