@extends('layouts.app_master_frontend')
@section('style')
    <link rel="stylesheet" href="{{ asset('css/category.css') }}">
@stop
@section('content')
    @include('pages.teacher.include._inc_breadcrumb')
    @include('pages.category.include._inc_fill_search')

    <div class="main-content mt20">
       <div class="container">
           <div class="box">
               <div class="box-25 mr20">
                   <section>
                       <div class="box-sidebar ">
                           <h2 class="box-sidebar-title">Kỹ năng quản trị</h2>
                           <ul class="b-s-category">
                               <li>
                                   <a href=""><i class="fa fa-comments"></i> Khóa học combo</a>
                               </li>
                               <li>
                                   <a href=""><i class="fa fa-comments"></i> Khóa học combo</a>
                               </li>
                               <li>
                                   <a href=""><i class="fa fa-comments"></i> Khóa học combo</a>
                               </li>
                               <li>
                                   <a href=""><i class="fa fa-comments"></i> Khóa học combo</a>
                               </li>
                               <li class="turn-back">
                                   <a href=""><i class="fa fa-angle-left"></i>  Xem danh mục khác</a>
                               </li>
                           </ul>
                       </div>
                   </section>
                   <section>
                       <div class="box-sidebar">
                           <h2 class="box-sidebar-title">Chủ đề đang hot</h2>
                           <ul class="b-s-tags">
                               <li>
                                   <a href="">Bán hàng</a>
                               </li>
                               <li>
                                   <a href="">Tiếng nhật</a>
                               </li>
                               <li>
                                   <a href="">Tiếng Anh</a>
                               </li>
                               <li>
                                   <a href="">Bán hàng Đa Cấp</a>
                               </li>
                               <div style="clear: both"></div>
                           </ul>
                       </div>
                   </section>
               </div>
               <div class="box-75 box-content">
                   <div class="results mb10 mt10">
                       <b>20 </b>Khóa học <b>Con người</b>
                   </div>
                   <div class="lists">
                       @forelse($courses as $item)
                           @include('pages.category.include._inc_item_course',['courses' => $item])
                       @empty
                           <p>Dữ liệu chưa được cập nhật</p>
                       @endforelse
                       <div class="clear"></div>
                   </div>
               </div>
           </div>
       </div>
    </div>
@stop
@section('js')
    <script src="{{ asset('js/category.js') }}"></script>
@stop
