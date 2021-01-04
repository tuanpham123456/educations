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
        $permission = Permission::oderBy('group_permission','asc')->get();

        return view('admin::pages.acl.role.create',compact('permission'));
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(AdminRoleRequest $request)
    {
        $data  = $request->except('_token','save');
        $data['guard_name'] = 'admins';
        Role::create($data);
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
        $permission = Permission::oderBy('group_permission','asc')->get();

        $viewData = [
            'role'        => $role,
            'permission'  => $permission,
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
        Role::find($id)->update($data);
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
}
