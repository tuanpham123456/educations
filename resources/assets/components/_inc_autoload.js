import Auth from "./_inc_auth";
import Message from "./_inc_run_message";
var AutoloadJs = {
    init:function (){
        Auth.init()
        Message.init()
    }
}
export default AutoloadJs
