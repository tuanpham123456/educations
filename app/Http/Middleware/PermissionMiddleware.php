<?php
namespace App\Http\Middleware;
use Closure;
use Spatie\Permission\Exceptions\UnauthorizedException;
class PermissionMiddleware
{
    //customer lại của thằng PermissionMiddleware trong kenner
    public function handle($request, Closure $next, $permission, $guard = null)
    {


        $permissions = is_array($permission)
            ? $permission
            : explode('|', $permission);
        $admins = \Auth::guard('admins')->user();
        foreach ($permissions as $permission) {
                // hàm can trong package
                if ($admins->can($permission))    return $next($request);
            }


        throw UnauthorizedException::forPermissions($permissions);
    }
}
