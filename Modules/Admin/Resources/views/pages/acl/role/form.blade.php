<form class="form-horizontal" autocomplete="off" method="post">
    @csrf
    <div class="row">
        <div class="col-lg-10">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="required"> Name <span>(*)</span></label>
                        <input type="text" class="form-control" name="name" placeholder="" value="{{ old('name',$role->name ?? '') }}">
                        @if($errors->first('name'))
                            <span class="text-danger">{{ $errors->first('name') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label> Guard name</label>
                        <input type="text" class="form-control keypress-count" value="admins" name="guard_name" disabled>
                    </div>
                    <div class="form-group">
                        <label> Description <span>(*)</span></label>
                        <input type="text" class="form-control keypress-count" value="{{ old('description',$role->description ?? '')}}" name="description"  placeholder="">
                    </div>
                </div>
            </div>
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                       @foreach($permissions as $key => $groupPermission)
                        <div class="row" style="margin-bottom: 1rem;border-bottom: 1px solid #dedede">
                            <div class="col-sm-12" >
                                <h5>{{ $groups[$key] }}</h5>
                            </div>
                           @foreach($groupPermission as $permission)
                          <div class="col-sm-3">
                              <label class="box-checkbox">{{ $permission->description }}
                                  <input type="checkbox" name="permission[]" {{ in_array($permission->id,$permissionActive) ? "checked" : ""  }} value="{{ $permission->id }}">
                                  <span class="checkmark"></span>
                              </label>
                          </div>
                           @endforeach
                        </div>
                    @endforeach
                </div>
            </div>

        </div>
        <div class="col-lg-2">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="required" for="exampleInputEmail1">Action <span>(*)</span></label>
                        <div class="">
                            <button class="btn btn-info" name="save" value="save">
                                <i class="la la-save"></i> Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
