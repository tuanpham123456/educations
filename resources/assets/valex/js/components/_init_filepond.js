import * as FilePond from 'filepond';
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
var FilePondUpload = {
    init :function ()
    {
        FilePond.setOptions({
            server: {
                url: URL_UPLOAD,
                process: {
                    method: 'POST',
                    withCredentials: false,
                    headers: {
                        'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
                    },
                    timeout: 7000,
                    onload: (response => {
                        $("#avatar_uploads").val(response)
                    }),
                    onerror: null,
                }
            }
        });

        FilePond.registerPlugin(FilePondPluginImagePreview);
        FilePond.create(document.querySelector('input[type="file"]'))
    }
}
export default FilePondUpload
