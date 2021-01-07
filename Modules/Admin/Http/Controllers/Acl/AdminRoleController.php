<?php

namespace Modules\Admin\Http\Controllers\Acl;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Admin\Http\Controllers\AdminController;
use Modules\Admin\Http\Requests\AdminRoleRequest;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AdminRoleController extends AdminController
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $roles  = Role::all();

        return view('admin::pages.acl.role.index',compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        $permissions = Permission::orderBy('group_permission','asc')->get();
        $permissions = $this->arrayGroupPermission($permissions);
        $groups         = $this->getGroupPermission();
        // tạo mảng trống để khỏi check
        $permissionActive = [];
        $viewData   = [
            'permissions' => $permissions,
            'groups'      => $groups,
            'permissionActive' => $permissionActive

        ];
        return view('admin::pages.acl.role.create',$viewData);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(AdminRoleRequest $request)
    {
        $data  = $request->except('_token','save','permission');
        $data['guard_name'] = 'admins';
        $role  = Role::create($data);

        // check nếu chưa lưu permission vào role
        if ($permissions = $request->permission){
            foreach ($permissions as $permission)
                // dùng hàm có sẵn của package
                $role->givePermissionTo($permission);
        }
        $this->showMessagesSuccess();
        return redirect()->back();
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        $role          = Role::findOrFail($id);
        $permissions    = Permission::orderBy('group_permission','asc')->get();
        $permissions = $this->arrayGroupPermission($permissions);
        $groups         = $this->getGroupPermission();

        // show permission để selected
        $permissionActive   = $role->permissions()->pluck('id')->toArray();

        $viewData = [
            'role'        => $role,
            'permissions'  => $permissions,
            'groups'      => $groups,
            'permissionActive'  => $permissionActive,
        ];
        return view('admin::pages.acl.role.update',$viewData);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        $data  = $request->except('_token','save');
        $data['guard_name'] = 'admins';
        $role   = Role::find($id);
        $role->fill($data)->update();

        // nếu xóa revokePermissionTo hàm của package
        $allPermission  = Permission::all();
        foreach ($allPermission as $permission)
            $role->revokePermissionTo($permission);

        // check nếu chưa lưu permission vào role
        if ($permissions = $request->permission){
            foreach ($permissions as $permission)
                // dùng hàm có sẵn của package
                $role->givePermissionTo($permission);
        }

        $this->showMessagesSuccess('Cập nhật thành công');
        return redirect()->route('get_admin.role.index');

    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function delete(Request $request,$id)
    {
        if($request->ajax()){
            $roles = Role::findOrFail($id)->delete();
            return response()->json([
                'status'      => 200,
                'message'   => 'Xóa dữ liệu thành công'
            ]);
        }
    }

    public function getGroupPermission(){
        // gọi từ package permission trong config tạo mảng data group
        return config('permission.group');
    }

    protected function arrayGroupPermission($permissions){
        // 1 group_permission có nhiều permission chia theo nhóm group

        $data = [];

        foreach ($permissions as $permission){
            $data[$permission->group_permission][] = $permission ;
        }
        return $data;

    }
}
