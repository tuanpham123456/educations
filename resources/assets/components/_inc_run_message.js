import Toastr from 'toastr';
var Message = {
    init : function ()
    {
        this.runToastr()
    },
    runToastr()
    {
        if(typeof TYPE_MESSAGES !== "undefined")
        {
            switch (TYPE_MESSAGES){
                case 'success':
                    Toastr.success(MESSAGE)
                    break;
                case 'error':
                    Toastr.error(MESSAGE)
                    break;
            }
        }
    }
}
export default Message
