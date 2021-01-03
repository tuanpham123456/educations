@extends('admin::layouts.master')
@section('content')
        <div class="container-fluid">
            <!-- breadcrumb -->
            <div class="breadcrumb-header justify-content-between">
                <div class="my-auto">
                    <div class="d-flex">
                        <h4 class="content-title mb-0 my-auto">Permission</h4>
                        <span class="text-muted mt-1 tx-13 ml-2 mb-0">/ Empty</span>
                    </div>
                </div>
                <div class="d-flex my-xl-auto right-content">
                    <div class="pr-1 mb-3 mb-xl-0">
                        <a href="{{ route('get_admin.permission.create') }}"class="btn btn-info  mr-2">Thêm mới <i class="la la-plus-circle"></i></a>
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
                                        <th>Guard name</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    @forelse($permission as $item)
                                    <tbody>
                                    <tr>
                                        <th scope="row">{{$item->id}}</th>
                                        <td>{{ $item->name }}</td>
                                        <td>{{ $item->guard_name }}</td>
                                        <td>{{ $item->description }}</td>

                                        <td>{{ $item->created_at }}</td>
                                        <td>
                                            <a href="{{ route('get_admin.permission.edit',$item->id) }}" class="btn btn-xs btn-info"><i class="la la-edit"></i></a>
                                            <a href="{{ route('get_admin.permission.delete',$item->id) }}" class="btn btn-xs js-delete btn-danger "><i class="la la-trash"></i></a>
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
