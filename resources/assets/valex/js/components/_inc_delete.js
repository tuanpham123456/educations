import Toastr from 'toastr';
import Swal from 'sweetalert2'

var Delete = {
    init : function ()
    {
        this.clickDelete()
    },

    clickDelete()
    {
        let _this = this;
        $(".js-delete").click(function (event){
            //preventDefault chặn k cho refesh lại trang
            event.preventDefault()
            let $this   = $(this)
            let URL     = $this.attr('href')
            if (URL)
            {
                Swal.fire({
                    title: 'Xóa dữ liệu!',
                    text: 'Bạn có muốn xóa không ?',
                    confirmButtonText: 'Đồng ý',
                    cancelButtonText: 'Hủy bỏ',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                }).then((result) => {
                    if (result.value) _this.processDelete(URL,$this)
                })
            }
        })
    },
    processDelete(URL,$element)
    {
        $.ajax({
            url: URL,
                beforeSend: function( xhr ) {
                }
            })
            .done(function( results ) {
                console.log(results)
                if(results.status === 200){
                    Toastr.success(results.message)
                    $element.parents('tr').remove()
                }else {
                    Toastr.error(results.message)
            }});
        }
}

export default Delete
