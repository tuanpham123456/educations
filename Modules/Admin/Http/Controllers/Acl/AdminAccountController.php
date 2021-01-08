<?php

namespace Modules\Admin\Http\Controllers\Acl;

use App\Models\System\Admin;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Admin\Http\Requests\AdminAccountRequest;
use Spatie\Permission\Models\Role;

class AdminAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $admins = Admin::all();
        $viewData = [
            'admins'    => $admins
        ];
        return view('admin::pages.acl.admin.index',$viewData);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        // show role
        $roles  = Role::all();
        $viewData = [
            'roles' => $roles,
        ];
        return view('admin::pages.acl.admin.create',$viewData);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(AdminAccountRequest $request)
    {
        $data   = $request->except('_token','roles');
        $data['password']   = bcrypt($request->password);
        $admins   = Admin::create($data);

        // kiểm tra nếu chưa thêm roles vào bảng thì lưu (dùng hàm của package)
        if($roles = $request->roles)
        {
            foreach ($roles as $item)
                $admins->syncRoles($roles);
        }
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
        $roles  = Role::all();
        $admins  = Admin::find($id);
        $rolesActive   = $admins->roles()->pluck('id')->toArray();
        $viewData = [
            'roles'          => $roles,
            'admins'          => $admins,
            'rolesActive'    => $rolesActive,
        ];

        return view('admin::pages.acl.admin.update',$viewData ?? []);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        $data   = $request->except('_token','roles','password');
        if ($request->password) $data['password']  = bcrypt($request->password);
        $admins = Admin::find($id);

        $roles  = $request->roles;
        if ($roles){
            $admins->roles()->sync($roles);
        }else{
            $admins->roles()->detach();
        }
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
