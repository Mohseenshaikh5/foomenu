
// const baseUrl = 'https://beta-api.foodsyindia.com/';
const baseUrl = 'http://localhost:8080/api/v1/';

const apiUrl = {
    signIn: `${baseUrl}user/login`,
    seller: `${baseUrl}foodsy/sellers/`,
    // approvel_deactivate_saller: `${baseUrl}foodsy/approve-seller/`,
    // activate_deactivate_saller: `${baseUrl}foodsy/activate-seller/`,
    store_open: `${baseUrl}foodsy/store-open/`,

    //seller
    shopPhoto: `${baseUrl}seller`,
    Logo: `${baseUrl}seller`,
    sellerLogo: `${baseUrl}foodsy/seller-update/`,
    sellerPhoto: `${baseUrl}foodsy/seller-update/`,
    sellerApprove: `${baseUrl}foodsy/approve-seller/`,
    sellerActivate: `${baseUrl}foodsy/activate-seller/`,
    sellerUpdate: `${baseUrl}foodsy/seller-update/`,
    sallerShopPhoto: `${baseUrl}foodsy/seller-update/`,


    // pincode: `${baseUrl}common/area`,
    // menu

    foodImg: `${baseUrl}menu`,
    foodMenu: `${baseUrl}product/get-product`,
    foodSearch: `${baseUrl}product/search`,
    foodUpdate: `${baseUrl}foodsy/food-item/`,
    foodDetails: `${baseUrl}product/`,
    foodDelete: `${baseUrl}foodsy/food-item/`,
    variants: `${baseUrl}foodsy/food-variant/`,
    variantsDelete: `${baseUrl}foodsy/food-variant/`,
    foodApprove: `${baseUrl}foodsy/approve-food/`,
    foodActivate: `${baseUrl}foodsy/activate-food/`,


    // common
    category: `${baseUrl}category/get-category`,
    categoryProduct: `${baseUrl}category/categoryproduct/`,
    subcategories: `${baseUrl}common/sub-categories`,
    city: `${baseUrl}common/city`,
    state: `${baseUrl}common/state`,
    area: `${baseUrl}common/area`,
    activeteAccount: `${baseUrl}foodsy/activate/`,


    // store-time
    storeTime: `${baseUrl}foodsy/store-timing/`,
    storeOpen: `${baseUrl}foodsy/store-open/?`,
    storeTimeUpdate: `${baseUrl}foodsy/store-timing/`,

    // user
    userList: `${baseUrl}foodsy/user-list/`,
    userDetails: `${baseUrl}foodsy/user-list/`,
    userSearch: `${baseUrl}foodsy/user-search/`,
    userOrders: `${baseUrl}foodsy/user-orders/`,

    // delivery
    deliveryList: `${baseUrl}foodsy/delivery-list/`,
    deliverySearch: `${baseUrl}foodsy/delivery-search/`,
    deliveryorders: `${baseUrl}foodsy/delivery-orders/`,
    deliveryInfo: `${baseUrl}foodsy/delivery-list/`,
    deliverprofile: `${baseUrl}delivery`,
    // orders
    orderLists: `${baseUrl}foodsy/orders/`,
    orderDetails: `${baseUrl}foodsy/orders/`,
    orderStatusUpdate: `${baseUrl}foodsy/orders/`,

};

export { baseUrl, apiUrl };