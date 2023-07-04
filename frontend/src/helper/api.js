import request from "./request";

export function getProductList() {
    return request({
        url: '/productos',
        method: 'get',
    });
}

export function getProductDetail(id) {
    return request({
        url: `/productos/${id}`,
        method: 'get',
    })
}

export function deleteProduct(id) {
    return request({
        url: `/productos/`,
        method: 'delete',
        data: {id},
    })
}

export function createProduct(data) {
    return request({
        url: '/productos',
        method: 'post',
        data,
    })
}

export function updateProduct(id, data) {
    return request({
        url: `/productos/${id}`,
        method: 'post',
        data,
    })
}