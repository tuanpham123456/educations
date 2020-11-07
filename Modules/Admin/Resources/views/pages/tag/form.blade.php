<form class="form-horizontal" autocomplete="off">
    <div class="row">
        <div class="col-lg-8">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label for="exampleInputEmail1"> Name <span>(*)</span></label>
                        <input type="text" class="form-control" name="t_name" id="inputName" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Slug <span>(*)</span></label>
                        <input type="email" class="form-control" name="t_slug" id="inputEmail3" placeholder="">
                    </div>
                </div>
            </div>
            <div class="card  box-shadow-0">
                <div class="card-header">
                   <h4 class="card-title mb-1">SEO
                       <a href="" class="js-action-seo" style="float: right"><i class="la la-edit"></i> Edit</a>
                   </h4>
                    <div class="view-seo">
                        <a href="" class="view-seo-title">aaaaaaaaaaaaaaaaaaaaaaaaa</a>
                        <p class="view-seo-slug">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <span>121131</span></p>
                        <p class="mb-2 view-seo-description">aaaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>
                <div class="card-body pt-3 box-seo hide" >
                    <div class="form-group">
                        <label for="exampleInputEmail1"> Title Seo <span>(*)</span></label>
                        <input type="text" class="form-control" name="t_title_seo" id="inputName" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">URL SEO <span>(*)</span></label>
                        <input type="email" class="form-control" name="t_slug" id="inputEmail3" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Description SEO <span>(*)</span></label>
                        <input type="email" class="form-control" name="t_description_seo" id="inputEmail3" placeholder="">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Action <span>(*)</span></label>
                        <div class="">
                            <button class="btn btn-info" name="save" value="save">
                                <i class="la la-save"></i> Save
                            </button>

                            <button class="btn btn-success" name="save" value="edit">
                                <i class="la la-check-circle"></i> Save & Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label for="exampleInputEmail1"> Status <span>(*)</span></label>
                        <select name="t_status" class="form-control SlectBox SumoUnder"
                                onclick="console.log($(this).val())" onchange="console.log('change is firing')" tabindex="-1">
                            <!--placeholder-->
                            <option title="Public" value="1">Public</option>
                            <option title="Hide" value="0">Hide</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label for="exampleInputEmail1"> Avatar <span>(*)</span></label>
                        <input type="file" class="filepond" name="avatar">
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
{{-- ẩn hiện Edit Seo--}}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    $(".js-action-seo").click(function(event){
           event.preventDefault()
           $(".box-seo").toggleClass('hide')
       })
</script>
{{--end--}}
