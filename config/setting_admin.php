<?php
return[
    'sidebar' => [
      [
          'name'  => 'Tổng quan',
          'route' => 'get_admin.dashboard',
          'class-icon'  => 'la la-tachometer-alt'
      ],
      [
          'name'  => 'Khóa học',
          'class-icon'  => 'la la-book-open',
          'sub'   => [
              [
                  'name'  => 'Từ khóa',
                  'route' => 'get_admin.tag.index'
              ],
              [
                  'name'  => 'Giáo viên',
                  'route' => 'get_admin.teacher.index'
              ],
              [
                  'name'  => 'Danh mục',
                  'route' => 'get_admin.category.index'
              ],
              [
                  'name'  => 'Khóa học',
                  'route' => 'get_admin.course.index'
              ],




          ]
      ]
    ]
];
