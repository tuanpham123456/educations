<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Category;
use App\Models\Education\Teacher;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Admin\Http\Requests\AdminTeacherRequest;

class AdminTeacherController extends AdminController
{
    public function index(){
        $teachers    = Teacher::orderByDesc('id')->paginate(10);
        $viewData   = [
          'teachers' => $teachers,
        ];
        return view ('admin::pages.teacher.index',$viewData);
    }
    public function create(){
        return view ('admin::pages.teacher.create');
    }
    public function store(AdminTeacherRequest $request){
        $data                   = $request->except(['avatar','_token','save']);
        $data['created_at']     = Carbon::now();


        $teacherId = Teacher::insertGetId($data);
        if($teacherId){
//      thêm thành công show toast
            $this->showMessagesSuccess();
            return redirect()->route('get_admin.teacher.index');
        }
//        Xử lý thất bại show toast
        $this->showMessagesError();
        return redirect()->back();
    }

    public function edit($id){
        $teacher    = Teacher::find($id);
        return view ('admin::pages.teacher.update',compact('teacher'));
    }

    public function update(AdminTeacherRequest $request,$id){
        $teacher                = Teacher::findOrFail($id);
        $data                   = $request->except(['avatar','_token','save']);
        $data['updated_at']     = Carbon::now();

        $teacher->fill($data)->save();
        $this->showMessagesSuccess("Cập nhật thành công");
        return redirect()->route('get_admin.teacher.index');

    }

    public function delete(Request $request,$id){
        if($request->ajax()){
            $teacher   = Teacher::find($id);
            if($teacher) $teacher->delete();

            return response()->json([
                'status'      => 200,
                'message'   => 'Xóa dữ liệu thành công'
            ]);
        }
        return redirect()->to('/');
    }
}
