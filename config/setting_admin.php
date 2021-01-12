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
      ],
      [
            'name'  => 'System Data',
            'class-icon'  => 'la la-database',
            'sub'   => [
                [
                    'name'  => 'Slide',
                    'route' => 'get_admin.slide.index'
                ],
            ]
        ],
        [
            'name'  => 'Admin',
            'class-icon'  => 'la la-cogs',
            'sub'   => [
                [
                    'name'  => 'Permission',
                    'route' => 'get_admin.permission.index'
                ],
                [
                    'name'  => 'Role',
                    'route' => 'get_admin.role.index'
                ],
                [
                    'name'  => 'Quản trị viên',
                    'route' => 'get_admin.account.index'
                ],
            ]
        ],
        [
            'name'  => 'User',
            'class-icon'  => 'la la-user',
            'sub'   => [
                [
                    'name'  => 'Thành viên',
                    'route' => 'get_admin.user.index'
                ],
            ]
        ],


    ]
];
