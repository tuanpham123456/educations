<form class="form-horizontal" autocomplete="off" method="post">
    @csrf
    <div class="row">
        <div class="col-lg-8">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="required"for="exampleInputEmail1"> Name <span>(*)</span></label>
                        <input type="text" class="form-control keypress-count" data-title-seo=".title-seo" data-slug=".slug"
                              value="{{ old('s_name',$slide->s_name ?? '') }}" id="inputName" name="s_name"  placeholder="">
                        @if($errors->first('s_name'))
                            <span class="text-danger">{{ $errors->first('s_name') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required"for="exampleInputEmail1"> Link <span>(*)</span></label>
                        <input type="text" class="form-control keypress-count" data-title-seo=".title-seo" data-slug=".slug"
                               value="{{ old('s_link',$slide->s_link ?? '') }}" id="inputName" name="s_link"  placeholder="">
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Sort <span>(*)</span></label>
                        <input type="number" class="form-control"  value="{{ old('s_sort',$slide->s_sort ?? '0') }}" name="s_sort"  placeholder="">
                        <span class="d-block text-warning"><a >Thứ tự được sắp xếp từ bé đến lớn</a></span>
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
                        <select name="s_status" class="form-control SlectBox SumoUnder"
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
                        <label for="exampleInputEmail1"> Banner </label>
                        <input type="file" class="filepond" name="avatar">
                        <input type="hidden" name="s_banner" id="avatar_uploads">
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
