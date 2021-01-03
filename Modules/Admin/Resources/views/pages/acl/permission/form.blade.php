<form class="form-horizontal" autocomplete="off" method="post">
    @csrf
    <div class="row">
        <div class="col-lg-8">
            <div class="card  box-shadow-0">
                <div class="card-body pt-3">
                    <div class="form-group">
                        <label class="required"> Name <span>(*)</span></label>
                        <input type="text" class="form-control" name="name" placeholder="" value="{{ old('name',$permission->name ?? '') }}">
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
                        <input type="text" class="form-control keypress-count" value="{{ old('description',$permission->description ?? '')}}" name="description"  placeholder="">
                    </div>
                    <div class="form-group">
                        <label class="required" > Group <span>(*)</span></label>
                        <select name="group_permission" class="form-control SlectBox SumoUnder" tabindex="-1">
                            @foreach($groups as $key => $group)
                            <option value="{{ $key }}" {{  (($permission->group_permission ?? 0) == $key ? 'selected' : '') }}>{{ $group }}</option>
                            @endforeach
                        </select>
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
        </div>
    </div>
</form>
