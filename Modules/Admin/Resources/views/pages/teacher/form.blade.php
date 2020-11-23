<form class="form-horizontal" autocomplete="off" method="post">
    @csrf
    <div class="row">
        <div class="col-lg-8">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="required"for="exampleInputEmail1"> Name <span>(*)</span></label>
                        <input type="text" class="form-control keypress-count" data-title-seo=".title-seo" data-slug=".slug"
                              value="{{ old('t_name',$teacher->t_name ?? '') }}" id="inputName" name="t_name"  placeholder="">
                        @if($errors->first('t_name'))
                            <span class="text-danger">{{ $errors->first('t_name') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Slug <span>(*)</span></label>
                        <input type="text" class="form-control slug"  value="{{ old('t_slug',$teacher->t_slug ?? '') }}" name="t_slug"  placeholder="">
                        @if($errors->first('t_slug'))
                            <span class="text-danger">{{ $errors->first('t_slug') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Job <span>(*)</span></label>
                        <input type="text" class="form-control"  value="{{ old('t_job',$teacher->t_job ?? '') }}" name="t_job"  placeholder="">
                        @if($errors->first('t_job'))
                            <span class="text-danger">{{ $errors->first('t_job') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Phone <span>(*)</span></label>
                        <input type="text" class="form-control"  value="{{ old('t_phone',$teacher->t_phone ?? '') }}" name="t_phone"  placeholder="">
                        @if($errors->first('t_phone'))
                            <span class="text-danger">{{ $errors->first('t_phone') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Email <span>(*)</span></label>
                        <input type="text" class="form-control"  value="{{ old('t_email',$teacher->t_email ?? '') }}" name="t_email"  placeholder="">
                        @if($errors->first('t_email'))
                            <span class="text-danger">{{ $errors->first('t_email') }}</span>
                        @endif
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
                        <label for="exampleInputEmail1"> Avatar </label>
                        <input type="file" class="filepond" name="avatar">
                        <input type="hidden" name="t_avatar" id="avatar_uploads">
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
