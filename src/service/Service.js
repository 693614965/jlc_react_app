/**
 * Created by Administrator on 2017/8/21.
 */
import "isomorphic-fetch";
export const HOST = 'http://localhost:8000'


export const user_login = (payload) => {
    var url = new URL(HOST + '/user/login/')
    fetchPost(url, payload)
}

export const user_register = (payload) => {
    var url = new URL(HOST + '/user/register/')
    fetchPost(url, payload)
}

export const customer_personnel_info_get = (payload) => {
    var url = new URL(HOST + '/customer_info/get/personnel/')
    fetchGet(url, payload)
}

export const customer_personnel_info_save = (payload) => {
    var url = new URL(HOST + '/customer_info/update/')
    fetchPost(url, payload)
}

export const customer_delivery_address_info_get = (payload) => {
    var url = new URL(HOST + '/customer_delivery_address_info/list/')
    fetchGet(url, payload)
}

export const customer_delivery_address_info_save = (payload) => {
    //带ID 是更新，不带ID 是保存
    var url = null;
    if (payload.values.id != null && payload.values.id != undefined) {
        url = new URL(HOST + "/customer_delivery_address_info/update/")
    } else {
        url = new URL(HOST + "/customer_delivery_address_info/add/")
    }
    if (url != null) {
        fetchPost(url, payload)
    }
}

export const customer_delivery_address_info_get_by_id = (payload) => {
    var url = new URL(HOST + "/customer_delivery_address_info/get/" + payload.id);
    fetchGet(url, payload)
}

export const customer_delivery_address_info_delete = (payload) => {
    var url = new URL(HOST + "/customer_delivery_address_info/delete/" + payload.id);
    fetchGet(url, payload)
}

export const customer_delivery_address_info_set_default = (payload) => {
    var url = new URL(HOST + "/customer_delivery_address_info/set/default/" + payload.id);
    fetchGet(url, payload)
}

export const customer_pcb_data_info_save = (payload) => {
    var url = null;
    if (payload.values.id != null && payload.values.id != undefined) {
        url = new URL(HOST + "/customer_pcb_data_info/update/");
    } else {
        url = new URL(HOST + "/customer_pcb_data_info/add/");
    }
    fetchPost(url, payload)
}

export const customer_pcb_data_info_list = (payload) => {
    var url = new URL(HOST + "/customer_pcb_data_info/list/");
    fetchGet(url, payload)
}

export const customer_pcb_data_info_get_by_id = (payload) => {
    var url = new URL(HOST + "/customer_pcb_data_info/get/" + payload.id);
    fetchGet(url, payload)
}

export const customer_pcb_data_info_delete = (payload) => {
    var url = new URL(HOST + "/customer_pcb_data_info/delete/" + payload.id);
    fetchGet(url, payload)
}

export const customer_pcb_data_info_check = (payload) => {
    var url = new URL(HOST + "/customer_pcb_data_info/check/" + payload.id);
    fetchGet(url, payload)
}

export const customer_pcb_data_info_file_down = (payload) => {
    var url = new URL(HOST + "/customer_pcb_data_info/pcb_down/" + payload.id);
    window.open(url)
}

export const customer_pcb_data_info_order_info = (payload) => {
    var url = new URL(HOST + "/customer_pcb_data_info/get_order_info/" + payload.id);
    fetchGet(url, payload)
}

export const customer_pcb_order_info_save = (payload) => {
    var url = new URL(HOST + "/customer_pcb_order_info/add/");
    fetchPost(url, payload)
}

export const customer_pcb_order_info_list = (payload) => {
    var url = new URL(HOST + "/customer_pcb_order_info/list/by_customer/0/10");
    fetchGet(url, payload)
}

export const customer_pcb_order_info_detail = (payload) => {
    var url = new URL(HOST + "/customer_pcb_order_info/get/" + payload.id);
    fetchGet(url, payload)
}

export const customer_pcb_order_info_file_down = (payload) => {
    var url = new URL(HOST + "/customer_pcb_order_info/pcb_down/" + payload.id);
    window.open(url)
}

export const customer_steel_info_list = (payload) => {
    var url = new URL(HOST + "/steel_produce_info/list/");
    fetchGet(url, payload)
}

export const customer_steel_order_info_add = (payload) => {
    var url = new URL(HOST + "/customer_steel_order_info/add/");
    fetchPost(url, payload)
}

function fetchGet(url, payload) {
    fetch(url, {
        mode: 'cors',
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }).then(resp => {
        if (resp.ok) {
            return resp.json()
        }
    }).then(json => {
        payload.dispatch({
            type: payload.type,
            payload: {
                json: json,
                dispatch: payload.dispatch
            }
        })
    }).catch(err => {
        console.error(err)
    })
}

function fetchPost(url, payload) {
    fetch(url, {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: getUrlParams(payload.values)
    }).then(resp => {
        if (resp.ok) {
            return resp.json()
        }
    }).then(json => {
        payload.dispatch({
            type: payload.type,
            payload: {
                json: json,
                dispatch: payload.dispatch
            }
        })
    }).catch(err => {
        console.error(err)
    })
}

function getUrlParams(values) {
    var params = new URLSearchParams();
    for (var key in values) {
        var value = values[key];
        if (!value) {
        } else {
            params.append(key, value);
        }
    }
    return params.toString();
}

export const setUrlParams = (url, values) => {
    for (var key in values) {
        var value = values[key];
        if (!value) {

        } else {
            url.searchParams.append(key, value);
        }
    }
}