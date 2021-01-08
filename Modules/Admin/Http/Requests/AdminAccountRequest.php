<?php

namespace Modules\Admin\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminAccountRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'     => 'required|unique:admins,email,'.$this->id,
            'password'  => 'required',
            'name'      => 'required',
        ];
    }

    public function messages()
    {
        return [
            'email.required'    => 'Dữ liệu không được để trống',
            'email.unique'      => 'Dữ liệu đã tồn tại',
            'password'          => 'Dữ liệu không được để trống',
            'name'              => 'Dữ liệu không được để trống',
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
