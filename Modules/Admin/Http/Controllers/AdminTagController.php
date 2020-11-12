<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Education\Tag;
use Carbon\Carbon;
use Illuminate\Contracts\Support\Renderable;

use Modules\Admin\Http\Requests\AdminTagRequest;

class AdminTagController extends AdminController
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('admin::pages.tag.index');
    }
    public function create(){

        return view('admin::pages.tag.create');
    }
    public function store(AdminTagRequest $request){
        $data                   = $request->except(['avatar','_token','save']);
        $data['created_at']     = Carbon::now();
        if(!$request->t_title_seo) $data['t_title_seo'] = $request->t_name;
        if(!$request->t_description_seo) $data['t_description_seo'] = $request->t_name;
        $tagId = Tag::insertGetId($data);
        if($tagId){
//      thêm thành công show toast
            $this->showMessagesSuccess();
            return redirect()->route('get_admin.tag.index');
        }
//        Xử lý thất bại show toast
        $this->showMessagesError();
        return redirect()->back();
    }


}
