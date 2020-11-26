@extends('admin::layouts.master')
@section('content')
        <div class="container-fluid">
            <!-- breadcrumb -->
            <div class="breadcrumb-header justify-content-between">
                <div class="my-auto">
                    <div class="d-flex">
                        <h4 class="content-title mb-0 my-auto">Course</h4>
                        <span class="text-muted mt-1 tx-13 ml-2 mb-0">/ Empty</span>
                    </div>
                </div>
                <div class="d-flex my-xl-auto right-content">
                    <div class="pr-1 mb-3 mb-xl-0">
                        <a href="{{ route('get_admin.course.create') }}"class="btn btn-info  mr-2">Thêm mới <i class="la la-plus-circle"></i></a>
                    </div>
                </div>
            </div>

            <!-- breadcrumb -->
            <!-- row -->
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped mg-b-0 text-md-nowrap">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>SEO</th>
                                        <th>Status</th>
                                        <th>Time</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    @forelse($courses as $item)
                                    <tbody>
                                    <tr>
                                        <th scope="row">{{$item->id}}</th>
                                        <td>{{ $item->c_name }}</td>
                                        <td>
                                            <div class="existed-seo-meta">
                                                <span class="page-title-seo title-seo">{{ $item->c_title_seo }}</span>
                                                <div class="page-url-seo ws nm">
                                                    <p><span class="slug">http://tuanpham/{{ $item->c_slug }}.com</span></p>
                                                </div>
                                                <div class="ws-nm">
                                                    <span style="color:#70757a">{{ $item->created_at }} -</span>
                                                    <span class="page-description-seo description_seo">{{ $item->c_description_seo }}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="badge badge-info">{{ $item->c_sort }}</span>
                                        </td>
{{--                                        <td>--}}
{{--                                            <span class="badge {{ $item->getStatus($item->c_status)['class'] }}">{{ $item->getStatus($item->c_status)['name'] }}</span>--}}
{{--                                        </td>--}}
                                        <td>{{ $item->created_at }}</td>
                                        <td>
                                            <a href="{{ route('get_admin.course.edit',$item->id) }}" class="btn btn-xs btn-info"><i class="la la-edit"></i></a>
                                            <a href="{{ route('get_admin.course.delete',$item->id) }}" class="btn btn-xs js-delete btn-danger "><i class="la la-trash"></i></a>
                                        </td>
                                    </tr>
                                    @empty
                                        <p>Dữ liệu chưa được cập nhật</p>
                                      @endforelse
                                    </tbody>
                                </table>
                            </div>
                            <!-- bd -->
                        </div>
                        <!-- bd -->
                    </div>
                    <!-- bd -->
                </div>
            </div>

            <!-- row closed -->
        </div>
@stop
