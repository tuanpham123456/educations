<form class="form-horizontal" autocomplete="off" method="post">
    @csrf
    <div class="row">
        <div class="col-lg-8">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1"> Name <span>(*)</span></label>
                        <input type="text" class="form-control keypress-count" data-title-seo=".title-seo" data-slug=".slug"
                               value="{{ old('c_name',$category->c_name ?? '') }}" id="inputName" name="c_name"  >
                        @if($errors->first('c_name'))
                            <span class="text-danger">{{ $errors->first('c_name') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Slug <span>(*)</span></label>
                        <input type="text" class="form-control slug"  value="{{ old('c_slug',$category->c_slug ?? '') }}" name="c_slug"  placeholder="">
                        @if($errors->first('c_slug'))
                            <span class="text-danger">{{ $errors->first('c_slug') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Icon <span>(*)</span></label>
                        <input type="text" class="form-control"  value="{{ old('c_icon',$category->c_icon ?? '') }}" name="c_icon"  placeholder="">
                        <span class="d-block"><a href="https://fontawesome.com/v4.7.0/icons/" target="_blank">Click xem mẫu</a></span>
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Sort <span>(*)</span></label>
                        <input type="number" class="form-control"  value="{{ old('c_sort',$category->c_sort ?? '0') }}" name="c_sort"  placeholder="">
                        <span class="d-block text-warning"><a >Thứ tự được sắp xếp từ bé đến lớn</a></span>
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1"> Parent <span>(*)</span></label>
                        <select name="c_parent_id" class="form-control SlectBox SumoUnder" tabindex="-1">
                            <!--placeholder-->
                            <option title="ROOT" value="0">__ROOT__</option>
                            @foreach($categories as $item)
                                <option value="{{ $item->id }}" {{ ($category->c_parent_id ?? 0) == $item->id ? "selected" : ""  }}>{{ $item->c_name }}</option>
                            @endforeach
                        </select>
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
                        <input type="text" class="form-control title-seo" value="{{ old('c_title_seo',$category->c_title_seo ?? '') }}" name="c_title_seo"  placeholder="">
                    </div>

                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Description SEO <span>(*)</span></label>
                        <input type="text" class="form-control title-seo"  value="{{ old('c_description_seo',$category->c_description_seo ?? '') }}" name="c_description_seo"  placeholder="">
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
                        <select name="c_status" class="form-control SlectBox SumoUnder" tabindex="-1">
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
                        <label class="" for="exampleInputEmail1"> Hot
                            <div class="form-group">
                                <label class="box-checkbox"> Nổi bật
                                    <input type="radio" name="c_hot" {{ ($category->c_hot ?? 0) == 1 ? 'checked' : '' }}  value="1">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="form-group">
                                <label class="box-checkbox"> Không nổi bật
                                    <input type="radio" name="c_hot" {{ ($category->c_hot ?? 0) == 0 ? 'checked' : '' }} value="0">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            {{--position--}}
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="" for="exampleInputEmail1"> Position
                            <div class="form-group">
                                <label class="box-checkbox"> Nổi bật trang chủ
                                    <input type="checkbox" name="c_position_1" {{ ($category->c_position_1 ?? 0) == 1 ? 'checked' : '' }} value="1">
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
                        <input type="hidden" name="c_avatar" id="avatar_uploads">
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
