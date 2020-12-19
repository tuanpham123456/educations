<form class="form-horizontal" autocomplete="off" method="post">
    @csrf
    <div class="row">
        <div class="col-lg-8">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="required"for="exampleInputEmail1"> Name <span>(*)</span></label>
                        <input type="text" class="form-control keypress-count" data-title-seo=".title-seo" data-slug=".slug"
                              value="{{ old('t_name',$tags->t_name ?? '') }}" id="inputName" name="t_name"  placeholder="">
                        @if($errors->first('t_name'))
                            <span class="text-danger">{{ $errors->first('t_name') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Slug <span>(*)</span></label>
                        <input type="text" class="form-control slug"  value="{{ old('t_slug',$tags->t_slug ?? '') }}" name="t_slug"  placeholder="">
                        @if($errors->first('t_slug'))
                            <span class="text-danger">{{ $errors->first('t_slug') }}</span>
                        @endif
                    </div>
                </div>
            </div>
            <div class="card  box-shadow-0">
                <div class="card-header">
                   <h4 class="card-title mb-1">SEO
                       <a href="" class="js-action-seo" style="float: right"><i class="la la-edit"></i> Edit</a>
                   </h4>
                    <div class="view-seo">
                        <a href="" class="view-seo-title ">aaaaaaaaaaaaaaaaaaaaaaaaa</a>
                        <p class="view-seo-slug">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <span class="slug">121131</span></p>
                        <p class="mb-2 view-seo-description">aaaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>
                <div class="card-body pt-3 box-seo hide" >
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1"> Title Seo <span>(*)</span></label>
                        <input type="text" class="form-control title-seo" value="{{ old('t_title_seo',$tags->t_title_seo ?? '') }}" name="t_title_seo"  placeholder="">
                    </div>

                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Description SEO <span>(*)</span></label>
                        <input type="text" class="form-control title-seo"  value="{{ old('t_description_seo',$tags->t_description_seo ?? '') }}" name="t_description_seo"  placeholder="">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Action <span>(*)</span></label>
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
                        <label class="required" for="exampleInputEmail1"> Status <span>(*)</span></label>
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
                        <label class="required" for="exampleInputEmail1"> Hot <span>(*)</span>
                           <div class="form-group">
                                <label class="box-checkbox"> Nổi bật
                                    <input type="radio" name="t_hot" {{ ($tags->t_hot ?? 0) == 1 ? 'checked ="checked"' : '' }} value="1">
                                    <span class="checkmark"></span>
                                </label>
                           </div>
                            <div class="form-group">
                                <label class="box-checkbox"> Mặc định
                                    <input type="radio" {{ ($tags->t_hot ?? 0) == 0 ? 'checked ="checked"' : '' }} name="t_hot" value="0">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </label>
                    </div>

                </div>
            </div>
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label for="exampleInputEmail1"> Avatar </label>
                        <input type="file" class="filepond" name="avatar">
                        <input type="hidden" name="t_avatar" id="avatar_uploads">
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
