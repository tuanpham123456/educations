<style>
    .text-wrap .example .form-group{
        margin-bottom: 1rem;
    }
</style>
<form class="form-horizontal" autocomplete="off" method="post">
    @csrf
    <div class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="text-wrap">
                    <div class="example">
                        <div class="panel panel-primary tabs-style-1">
                            <div class=" tab-menu-heading">
                                <div class="tabs-menu1">
                                    <!-- Tabs -->
                                    <ul class="nav panel-tabs main-nav-line">
                                        <li class="nav-item"><a href="#tab1" class="nav-link active" data-toggle="tab">Thông tin cơ bản</a></li>
                                        <li class="nav-item"><a href="#tab2" class="nav-link" data-toggle="tab">Nội dung khóa học</a></li>
                                        <li class="nav-item"><a href="#tab3" class="nav-link" data-toggle="tab">Giới thiệu</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel-body tabs-menu-body main-content-body-right border-top-0 border">
                                <div class="tab-content">
                                    {{--tag 1 (name,teacher,category,slug,tag,price,sale)--}}
                                    <div class="tab-pane active" id="tab1">
                                        {{--name--}}
                                        <div class="form-group">
                                            <label class="required" for="exampleInputEmail1"> Name <span>(*)</span></label>
                                            <input type="text" class="form-control keypress-count" data-title-seo=".title-seo" data-slug=".slug"
                                                   value="{{ old('c_name',$course->c_name ?? '') }}" id="inputName" name="c_name"  >
                                            @if($errors->first('c_name'))
                                                <span class="text-danger">{{ $errors->first('c_name') }}</span>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            {{--teacher--}}
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label class="required" for="exampleInputEmail1">Teacher<span>(*)</span></label>
                                                    <div class="SumoSelect testselect1 sumo_somename" tabindex="0" role="button" aria-expanded="true">
                                                        <select name="c_teacher_id" class="form-control SlectBox SumoUnder"
                                                                onclick="console.log($(this).val())" onchange="console.log('change is firing')" tabindex="-1">
                                                            <!--placeholder-->
                                                            @foreach($teachers as $item)
                                                                <option title="{{ $item->t_name }}" value="{{ old('t_name',$item->id)}}">{{{ $item->t_name }}}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {{--category--}}
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label class="required" for="exampleInputEmail1">Category<span>(*)</span></label>
                                                    <div class="SumoSelect selectsum1 sumo_somename" tabindex="0" role="button" aria-expanded="true">
                                                        <select name="c_category_id" class="form-control SlectBox SumoUnder"
                                                                onclick="console.log($(this).val())" onchange="console.log('change is firing')" tabindex="-1">
                                                            @foreach($categories as $item)
                                                                <option value="{{ $item->id }}"  title="{{ $item->c_name }}">{{{ $item->c_name }}}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        {{--slug--}}
                                        <div class="form-group">
                                            <label class="required" for="exampleInputEmail1">Slug <span>(*)</span></label>
                                            <input type="text" class="form-control slug"  value="{{ old('c_slug',$course->c_slug ?? '') }}" name="c_slug"  placeholder="">
                                            @if($errors->first('c_slug'))
                                                <span class="text-danger">{{ $errors->first('c_slug') }}</span>
                                            @endif
                                        </div>
                                        {{--tag--}}
                                        <div class="form-group">
                                            <label  for="exampleInputEmail1">Tag</label>
                                            <select name="tags[]" class="form-control js-select2"
                                                    onclick="console.log($(this).val())" onchange="console.log('change is firing')" tabindex="-1" multiple>
                                                <!--placeholder-->
                                                @foreach($tags as $item)
                                                    <option title="{{ $item->t_name }}" {{ in_array($item->id, $tagOld) ? "selected" : "" }} value="{{ old('t_name',$item->id)}}">{{{ $item->t_name }}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        {{--Price,Sale,teacher,category--}}
                                        <div class="row">
                                            {{--price--}}
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="required" for="exampleInputEmail1">Price<span>(*)</span></label>
                                                    <input type="text" class="form-control"  value="{{ old('c_price',$course->c_price ?? '') }}" name="c_price"  placeholder="">
                                                    @if($errors->first('c_price'))
                                                        <span class="text-danger">{{ $errors->first('c_price') }}</span>
                                                    @endif
                                                </div>
                                            </div>
                                            {{--sale--}}
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="required" for="exampleInputEmail1">Sale<span>(*)</span></label>
                                                    <input type="text" class="form-control"  value="{{ old('c_sale',$course->c_sale ?? '') }}" name="c_sale"  placeholder="">
                                                    @if($errors->first('c_sale'))
                                                        <span class="text-danger">{{ $errors->first('c_sale') }}</span>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="required" for="exampleInputEmail1">Total time<span>(*)</span></label>
                                                    <input type="text" class="form-control"  value="{{ old('c_total_time',$course->c_total_time ?? '') }}" name="c_total_time"  placeholder="">
                                                    @if($errors->first('c_total_time'))
                                                        <span class="text-danger">{{ $errors->first('c_total_time') }}</span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{--tag 2--}}
                                    <div class="tab-pane" id="tab2">
                                        <p>dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</p>
                                        <p class="mb-0">placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                    </div>
                                    {{--tag 3--}}
                                    <div class="tab-pane" id="tab3">
                                        <p>praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,</p>
                                        <p class="mb-0">similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{-- seo--}}
            <div class="card  box-shadow-0">
                <div class="card-header">
                   <h4 class="card-title mb-1">SEO
                       <a href="" class="js-action-seo" style="float: right"><i class="la la-edit"></i> Edit</a>
                   </h4>
                    <div class="view-seo">
                        <a href="" class="view-seo-title title-seo">{{ old('c_title_seo',$course->c_title_seo ?? '') }}</a>
                        <p class="view-seo-slug"><span class="slug">121131</span></p>
                        <p class="mb-2 view-seo-description"></p>
                    </div>
                </div>
                <div class="card-body pt-3 box-seo hide" >
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1"> Title Seo <span>(*)</span></label>
                        <input type="text" class="form-control title-seo" value="{{ old('c_title_seo',$course->c_title_seo ?? '') }}" name="c_title_seo"  placeholder="">
                    </div>

                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Description SEO <span>(*)</span></label>
                        <input type="text" class="form-control title-seo"  value="{{ old('c_description_seo',$course->c_description_seo ?? '') }}" name="c_description_seo"  placeholder="">
                    </div>
                </div>
            </div>
        </div>
        {{--action,status,hot,position,avatar--}}
        <div class="col-lg-4">
            {{--action--}}
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
            {{--status--}}
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1"> Status <span>(*)</span></label>
                        <select name="c_status" class="form-control SlectBox SumoUnder"
                                onclick="console.log($(this).val())" onchange="console.log('change is firing')" tabindex="-1">
                            <!--placeholder-->
                            <option title="Public" value="1">Public</option>
                            <option title="Hide" value="0">Hide</option>
                        </select>
                    </div>
                </div>
            </div>
            {{--hot--}}
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="" for="exampleInputEmail1"> Hot
                            <div class="form-group">
                                <label class="box-checkbox"> Nổi bật
                                    <input type="radio" name="c_hot" {{ ($course->c_hot ?? 0) == 1 ? 'checked' : '' }}  value="1">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="form-group">
                                <label class="box-checkbox"> Không nổi bật
                                    <input type="radio" name="c_hot" {{ ($course->c_hot ?? 0) == 0 ? 'checked' : '' }} value="0">
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
                                    <input type="checkbox" name="c_position_1" {{ ($course->c_position_1 ?? 0) == 1 ? 'checked' : '' }} value="1">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </label>
                    </div>

                </div>
            </div>
            {{--avatar--}}
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label for="exampleInputEmail1"> Avatar </label>
                        <input type="file" class="filepond" value="{{ old('c_avatar',$course->c_avatar ?? '') }}" name="avatar">
                        <input type="hidden" name="c_avatar" id="avatar_uploads" value="{{ old('c_avatar',$course->c_avatar ?? '') }}">
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
