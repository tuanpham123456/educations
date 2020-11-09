<?php

namespace Modules\Admin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminTagRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            't_name'    => 'required',
            't_slug'    => 'required|unique:tags,t_slug',


        ];
    }
    public function messages()
    {
        return [
            't_name.required' => "Dữ liệu không được để trống",
            't_slug.required' => "Dữ liệu không được để trống",
            't_slug.unique'   => "Slug tồn tại"
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
