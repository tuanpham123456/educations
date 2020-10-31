@extends('admin::layouts.master')
@section('content')
    <div class="container-fluid">
        <!-- breadcrumb -->
        <div class="breadcrumb-header justify-content-between">
            <div class="my-auto">
                <div class="d-flex">
                    <h4 class="content-title mb-0 my-auto">Tag</h4>
                    <span class="text-muted mt-1 tx-13 ml-2 mb-0">/ Empty</span>
                </div>
            </div>
            <div class="d-flex my-xl-auto right-content">
                <div class="pr-1 mb-3 mb-xl-0">
                    <a href="{{ route('get_admin.tag.index') }}" class="btn btn-danger  mr-2"><i class="fa fa-history"></i> Quay lại</a>
                </div>
            </div>
        </div>
        <!-- breadcrumb -->
        <!-- row -->
        <div class="row">
        </div>
        <!-- row closed -->
    </div>
@stop
