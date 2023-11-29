"use client"

export function saveUser(result) {

    console.log('saveUser', result);

    sessionStorage.setItem('refresh', result.refresh)
    sessionStorage.setItem('access', result.access)
    sessionStorage.setItem('first_name', result.user.first_name)
    sessionStorage.setItem('last_name', result.user.last_name)
    sessionStorage.setItem('phone', result.user.mobile)
    sessionStorage.setItem('email', result.user.email)
    sessionStorage.setItem('role', result.user.role)
    sessionStorage.setItem('photo', result.user.profile.url)
    sessionStorage.setItem('account_id', result.user.Id)
    // sessionStorage.setItem('is_active', result.user.is_active)


    // sessionStorage.setItem('business_name', result.account.name)
    // sessionStorage.setItem('logo', result.account.logo)
}
