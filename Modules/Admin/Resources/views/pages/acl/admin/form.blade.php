<form class="form-horizontal" autocomplete="off" method="post">
    @csrf
    <div class="row">
        <div class="col-lg-8">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label for="exampleInputEmail1"> Name </label>
                        <input type="text" class="form-control "
                              value="{{ old('name',$admins->name ?? '') }}" id="inputName" name="name"  placeholder="">
                        @if($errors->first('name'))
                            <span class="text-danger">{{ $errors->first('name') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required"for="exampleInputEmail1"> Email <span>(*)</span></label>
                        <input type="email" class="form-control "
                              value="{{ old('email',$admins->email ?? '') }}" id="inputName" name="email"  placeholder="">
                        @if($errors->first('email'))
                            <span class="text-danger">{{ $errors->first('email') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label class="required"for="exampleInputEmail1"> Password <span>(*)</span></label>
                        <input type="password" class="form-control " id="inputName" name="password"  placeholder="">
                        @if($errors->first('password'))
                            <span class="text-danger">{{ $errors->first('password') }}</span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1"> Phone</label>
                        <input type="number" class="form-control "
                              value="{{ old('phone',$admins->phone ?? '') }}" id="inputName" name="phone"  placeholder="">
                    </div>

                </div>
            </div>
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>Danh sách các nhóm quyền</h4>
                        </div>
                        @foreach($roles as $role)
                            <div class="col-sm-3">
                                <label class="box-checkbox">{{ $role->description }}
                                    <input type="checkbox" name="roles[]" {{ in_array($role->id,$rolesActive) ? "checked" : ""  }} value="{{ $role->id }}">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        @endforeach
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
                        <select name="status" class="form-control SlectBox SumoUnder" tabindex="-1">
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
                        <label for="exampleInputEmail1"> Avatar </label>
                        <input type="file" class="filepond" name="avatar">
                        <input type="hidden" name="avatar" id="avatar_uploads">
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
