"use client"

export function saveUser(result) {

    console.log('saveUser', result);

    sessionStorage.setItem('refresh', result.refresh)
    sessionStorage.setItem('access', result.access)
    sessionStorage.setItem('first_name', result.account.first_name)
    sessionStorage.setItem('last_name', result.account.last_name)
    sessionStorage.setItem('phone', result.account.mobile)
    sessionStorage.setItem('email', result.account.email)
    sessionStorage.setItem('role', result.account.role)
    sessionStorage.setItem('photo', result.account.photo)
    sessionStorage.setItem('account_id', result.account.accountId)
    sessionStorage.setItem('is_active', result.account.is_active)


    sessionStorage.setItem('business_name', result.account.name)
    sessionStorage.setItem('logo', result.account.logo)
}
