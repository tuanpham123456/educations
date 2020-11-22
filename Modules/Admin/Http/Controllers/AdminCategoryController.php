<?php

namespace Modules\Admin\Http\Controllers;
use App\Models\Category;
use App\Models\Education\Tag;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Modules\Admin\Http\Requests\AdminCategoryRequest;

class AdminCategoryController extends AdminController
{
    public function index(){
        $categories   = Category::orderByDesc('c_sort')->paginate(10);
        $viewData   = [
          'categories'    => $categories,
        ];
        return view ('admin::pages.category.index',$viewData);
    }

    public function create(){
        return view ('admin::pages.category.create');
    }

    public function store(AdminCategoryRequest $request){
        $data                   = $request->except(['avatar','_token','save']);
        $data['created_at']     = Carbon::now();
        if(!$request->c_title_seo) $data['c_title_seo'] = $request->c_name;
        if(!$request->c_description_seo) $data['c_description_seo'] = $request->c_name;

        $categoryId = Category::insertGetId($data);
        if($categoryId){
//      thêm thành công show toast
            $this->showMessagesSuccess();
            return redirect()->route('get_admin.category.index');
        }
//        Xử lý thất bại show toast
        $this->showMessagesError();
        return redirect()->back();
    }

    public function edit($id){
        $category       = Category::findOrFail($id);
        $viewData   =[
            'category'  => $category
        ];
        return view ('admin::pages.category.update',$viewData);
    }

    public function update(AdminCategoryRequest $request,$id){
        $category               = Category::findOrFail($id);
        $data                   = $request->except(['avatar','_token','save']);
        $data['updated_at']     = Carbon::now();

        if(!$request->c_title_seo) $data['c_title_seo'] = $request->c_name;
        if(!$request->c_description_seo) $data['c_description_seo'] = $request->c_name;
        $category->fill($data)->save();
        $this->showMessagesSuccess("Cập nhật thành công");
        return redirect()->route('get_admin.category.index');
    }

    public function delete(Request $request,$id){
        if($request->ajax()){
            $category = Category::find($id);
            if($category) $category->delete();

            return response()->json([
                'status'      => 200,
                'message'   => 'Xóa dữ liệu thành công'
            ]);
        }
        return redirect()->to('/');
    }
}
