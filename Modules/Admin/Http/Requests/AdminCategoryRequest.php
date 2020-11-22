<?php

namespace Modules\Admin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminCategoryRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'c_name'    => 'required',
            'c_slug'    => 'required|unique:categories,c_slug,'.$this->id,
            'c_icon'    => 'required',
        ];
    }
    public function messages()
    {
        return [
            'c_name.required' => "Dữ liệu không được để trống",
            'c_slug.required' => "Dữ liệu không được để trống",
            'c_slug.unique'   => "Slug tồn tại",
            'c_icon.required' => "Dữ liệu không được để trống",
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
