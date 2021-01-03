<?php

namespace Modules\Admin\Http\Controllers\Acl;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Admin\Http\Controllers\AdminController;
use Modules\Admin\Http\Requests\AdminPermissionRequest;
use Spatie\Permission\Models\Permission;

class AdminPermissionController extends AdminController
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $permission = Permission::orderBy('group_permission','asc')->paginate(20);
        $groups     = $this->getGroupPermission();

        $viewData = [
          'permission'  => $permission,
          'groups'    => $groups,
        ];
        return view('admin::pages.acl.permission.index',$viewData);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        $groups  = $this->getGroupPermission();
        $viewData = [
            'groups' => $groups,
        ];
        return view('admin::pages.acl.permission.create',$viewData);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(AdminPermissionRequest $request)
    {
        $data  = $request->except('_token','save');
        $data['guard_name'] = 'admins';
        Permission::create($data);
        $this->showMessagesSuccess();
        return redirect()->back();
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        $permission     = Permission::findOrFail($id);
        $groups         = $this->getGroupPermission();
        $viewData = [
            'permission'    => $permission,
            'groups'        => $groups,
        ];
        return view('admin::pages.acl.permission.update',$viewData);
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
        Permission::find($id)->update($data);
        $this->showMessagesSuccess('Cập nhật thành công');
        return redirect()->route('get_admin.permission.index');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function delete(Request $request,$id)
    {
        if($request->ajax()){
            $permission = Permission::findOrFail($id)->delete();
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
}
