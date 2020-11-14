import * as FilePond from 'filepond';
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
var FilePondUpload = {
    init :function ()
    {
        FilePond.registerPlugin(FilePondPluginImagePreview);
        FilePond.create(document.querySelector('input[type="file"]'))
    }
}
export default FilePondUpload
