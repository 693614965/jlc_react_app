/**
 * Created by Administrator on 2017/8/21.
 */
import React from "react";
import {message} from "antd";
import {
    CUSTOMER_DELIVERY_ADDRESS_INFO_DELETE,
    CUSTOMER_DELIVERY_ADDRESS_INFO_DELETE_RECEIVE,
    CUSTOMER_DELIVERY_ADDRESS_INFO_EDIT,
    CUSTOMER_DELIVERY_ADDRESS_INFO_EDIT_RECEIVE,
    CUSTOMER_DELIVERY_ADDRESS_INFO_GET,
    CUSTOMER_DELIVERY_ADDRESS_INFO_SAVE,
    CUSTOMER_DELIVERY_ADDRESS_INFO_SAVE_RECEIVE,
    CUSTOMER_DELIVERY_ADDRESS_INFO_SELECT,
    CUSTOMER_DELIVERY_ADDRESS_INFO_SET_DEFAULT,
    CUSTOMER_DELIVERY_ADDRESS_INFO_SET_DEFAULT_RECEIVE,
    CUSTOMER_PCB_DATA_INFO_ADD,
    CUSTOMER_PCB_DATA_INFO_CHECK,
    CUSTOMER_PCB_DATA_INFO_CHECK_RECEIVE,
    CUSTOMER_PCB_DATA_INFO_DELETE,
    CUSTOMER_PCB_DATA_INFO_DELETE_RECEIVE,
    CUSTOMER_PCB_DATA_INFO_EDIT,
    CUSTOMER_PCB_DATA_INFO_EDIT_RECEIVE,
    CUSTOMER_PCB_DATA_INFO_FILE_DOWN,
    CUSTOMER_PCB_DATA_INFO_LIST,
    CUSTOMER_PCB_DATA_INFO_ORDER_INFO,
    CUSTOMER_PCB_DATA_INFO_ORDER_INFO_RECEIVE,
    CUSTOMER_PCB_DATA_INFO_SAVE,
    CUSTOMER_PCB_DATA_INFO_SAVE_RECEIVE,
    CUSTOMER_PCB_ORDER_INFO_DETAIL,
    CUSTOMER_PCB_ORDER_INFO_DETAIL_RECEIVE,
    CUSTOMER_PCB_ORDER_INFO_FILE_DOWN,
    CUSTOMER_PCB_ORDER_INFO_LIST,
    CUSTOMER_PCB_ORDER_INFO_SAVE,
    CUSTOMER_PCB_ORDER_INFO_SAVE_RECEIVE,
    CUSTOMER_PERSONNEL_INFO_GET,
    CUSTOMER_PERSONNEL_INFO_GET_RECEIVE,
    CUSTOMER_PERSONNEL_INFO_SAVE,
    CUSTOMER_PERSONNEL_INFO_SAVE_RECEIVE,
    CUSTOMER_STEEL_INFO_LIST,
    CUSTOMER_STEEL_ORDER_INFO_ADD,
    CUSTOMER_STEEL_ORDER_INFO_ADD_RECEIVE,
    DATA_RECEIVE,
    INIT_SELECTED_ROWS,
    MODEL_CLOSE,
    MODEL_OPEN,
    USER_LOGIN,
    USER_LOGIN_RECEIVE,
    USER_REGISTER,
    USER_REGISTER_RECEIVE
} from "../constants/Constants";
import {
    customer_delivery_address_info_delete,
    customer_delivery_address_info_get,
    customer_delivery_address_info_get_by_id,
    customer_delivery_address_info_save,
    customer_delivery_address_info_set_default,
    customer_pcb_data_info_check,
    customer_pcb_data_info_delete,
    customer_pcb_data_info_file_down,
    customer_pcb_data_info_get_by_id,
    customer_pcb_data_info_list,
    customer_pcb_data_info_order_info,
    customer_pcb_data_info_save,
    customer_pcb_order_info_detail,
    customer_pcb_order_info_file_down,
    customer_pcb_order_info_list,
    customer_pcb_order_info_save,
    customer_personnel_info_get,
    customer_personnel_info_save,
    customer_steel_info_list,
    customer_steel_order_info_add,
    user_login,
    user_register
} from "../service/Service";

export default (state = {
    visible: false,
    loading: false,
    dataSource: [],
    initForm: {},
    selectedRowKeys: [],
    selectedRows: [],
    currentDeliveryAddress: {},
    customerPcbOrderCostInfo: [],
    total_amount: 0,
}, action) => {
    const {type, payload} = action;
    switch (type) {
        case DATA_RECEIVE:
            return Object.assign({}, state, {
                dataSource: payload.json.data
            })
        case INIT_SELECTED_ROWS:
            return Object.assign({}, state, {
                selectedRowKeys: payload.selectedRowKeys,
                selectedRows: payload.selectedRows
            })
        case MODEL_OPEN:
            return Object.assign({}, state, {
                visible: true,
            })
        case MODEL_CLOSE:
            return Object.assign({}, state, {
                visible: false
            })
        case USER_LOGIN:
            payload.type = USER_LOGIN_RECEIVE
            user_login(payload)
            return state
        case USER_LOGIN_RECEIVE:
            if (payload.json.success) {
                window.location.href = '/client'
            } else {
                message.error(payload.json.msg)
            }
            return state
        case USER_REGISTER:
            payload.type = USER_REGISTER_RECEIVE
            user_register(payload)
            return state
        case USER_REGISTER_RECEIVE:
            if (payload.json.success) {
                window.location.href = '/login'
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_PERSONNEL_INFO_GET:
            payload.type = CUSTOMER_PERSONNEL_INFO_GET_RECEIVE
            customer_personnel_info_get(payload)
            return state
        case CUSTOMER_PERSONNEL_INFO_GET_RECEIVE:
            return Object.assign({}, state, {
                initForm: {
                    id: payload.json.customerInfo.id,
                    code: payload.json.customerInfo.code,
                    name: payload.json.customerInfo.name,
                    age: payload.json.customerInfo.age,
                    mobile: payload.json.customerInfo.mobile,
                    home_address: payload.json.customerInfo.home_address,
                    work_unit: payload.json.customerInfo.work_unit,
                    education: payload.json.customerInfo.education,
                    email: payload.json.customerInfo.email,
                    qq: payload.json.customerInfo.qq
                }
            })
        case CUSTOMER_PERSONNEL_INFO_SAVE:
            payload.type = CUSTOMER_PERSONNEL_INFO_SAVE_RECEIVE
            customer_personnel_info_save(payload)
            return state
        case CUSTOMER_PERSONNEL_INFO_SAVE_RECEIVE:
            if (payload.json.success) {
                message.success('保存成功!')
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_DELIVERY_ADDRESS_INFO_SELECT:
            console.log(payload.selectedRow)
            return Object.assign({}, state, {
                visible: false,
                currentDeliveryAddress: {
                    id: payload.selectedRow.key,
                    link_man: payload.selectedRow.link_man,
                    link_man_mobile: payload.selectedRow.link_man_mobile,
                    province: payload.selectedRow.province,
                    city: payload.selectedRow.city,
                    area: payload.selectedRow.area,
                    detail: payload.selectedRow.detail,
                    is_default: payload.selectedRow.is_default
                }
            })
        case CUSTOMER_DELIVERY_ADDRESS_INFO_GET:
            payload.type = DATA_RECEIVE
            customer_delivery_address_info_get(payload)
            return state
        case CUSTOMER_DELIVERY_ADDRESS_INFO_SAVE:
            payload.type = CUSTOMER_DELIVERY_ADDRESS_INFO_SAVE_RECEIVE
            customer_delivery_address_info_save(payload)
            return state
        case CUSTOMER_DELIVERY_ADDRESS_INFO_SAVE_RECEIVE:
            if (payload.json.success) {
                message.success('保存成功')
                payload.type = DATA_RECEIVE
                customer_delivery_address_info_get(payload)
                return Object.assign({}, state, {
                    visible: false
                })
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_DELIVERY_ADDRESS_INFO_EDIT:
            payload.type = CUSTOMER_DELIVERY_ADDRESS_INFO_EDIT_RECEIVE
            customer_delivery_address_info_get_by_id(payload)
            return state
        case CUSTOMER_DELIVERY_ADDRESS_INFO_EDIT_RECEIVE:
            console.log(payload.json)
            return Object.assign({}, state, {
                visible: true,
                initForm: {
                    id: payload.json.customerDeliveryInfo.id,
                    link_man: payload.json.customerDeliveryInfo.link_man,
                    link_man_mobile: payload.json.customerDeliveryInfo.link_man_mobile,
                    province: payload.json.customerDeliveryInfo.province,
                    city: payload.json.customerDeliveryInfo.city,
                    area: payload.json.customerDeliveryInfo.area,
                    detail: payload.json.customerDeliveryInfo.detail
                }
            })
        case CUSTOMER_DELIVERY_ADDRESS_INFO_DELETE:
            payload.type = CUSTOMER_DELIVERY_ADDRESS_INFO_DELETE_RECEIVE
            customer_delivery_address_info_delete(payload)
            return state
        case CUSTOMER_DELIVERY_ADDRESS_INFO_DELETE_RECEIVE:
            if (payload.json.success) {
                message.success('删除成功!')
                payload.type = DATA_RECEIVE
                customer_delivery_address_info_get(payload)
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_DELIVERY_ADDRESS_INFO_SET_DEFAULT:
            payload.type = CUSTOMER_DELIVERY_ADDRESS_INFO_SET_DEFAULT_RECEIVE
            customer_delivery_address_info_set_default(payload)
            return state
        case CUSTOMER_DELIVERY_ADDRESS_INFO_SET_DEFAULT_RECEIVE:
            if (payload.json.success) {
                message.success('设置成功!')
                payload.type = DATA_RECEIVE
                customer_delivery_address_info_get(payload)
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_PCB_DATA_INFO_ADD:
            return Object.assign({}, state, {
                visible: true,
                initForm: {},
            })
        case CUSTOMER_PCB_DATA_INFO_SAVE:
            payload.type = CUSTOMER_PCB_DATA_INFO_SAVE_RECEIVE
            customer_pcb_data_info_save(payload)
            return state
        case CUSTOMER_PCB_DATA_INFO_SAVE_RECEIVE:
            if (payload.json.success) {
                message.success('保存成功!')
                payload.type = DATA_RECEIVE
                customer_pcb_data_info_list(payload)
                return Object.assign({}, state, {
                    visible: false
                })
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_PCB_DATA_INFO_LIST:
            payload.type = DATA_RECEIVE
            customer_pcb_data_info_list(payload)
            return Object.assign({}, state, {
                selectedRowKeys: [],
                selectedRows: [],
            })
        case CUSTOMER_PCB_DATA_INFO_EDIT:
            payload.type = CUSTOMER_PCB_DATA_INFO_EDIT_RECEIVE
            customer_pcb_data_info_get_by_id(payload)
            return state
        case CUSTOMER_PCB_DATA_INFO_EDIT_RECEIVE:
            if (payload.json.success) {
                return Object.assign({}, state, {
                    visible: true,
                    initForm: {
                        id: payload.json.customerPcbDataInfo.id,
                        layer: payload.json.customerPcbDataInfo.layer,
                        width: payload.json.customerPcbDataInfo.width,
                        length: payload.json.customerPcbDataInfo.length,
                        pcb_num: payload.json.customerPcbDataInfo.pcb_num,
                        thickness: payload.json.customerPcbDataInfo.thickness,
                        solder_color: payload.json.customerPcbDataInfo.solder_color,
                        char_color: payload.json.customerPcbDataInfo.char_color,
                        pad_cover: payload.json.customerPcbDataInfo.pad_cover,
                        pad_spraying: payload.json.customerPcbDataInfo.pad_spraying,
                        minute_test: payload.json.customerPcbDataInfo.minute_test,
                        delivery_time: payload.json.customerPcbDataInfo.delivery_time,
                        required_invoice: payload.json.customerPcbDataInfo.required_invoice,
                        required_add_customer_num: payload.json.customerPcbDataInfo.required_add_customer_num,
                        required_book: payload.json.customerPcbDataInfo.required_book,
                        required_add_date_in_pcs: payload.json.customerPcbDataInfo.required_add_date_in_pcs,
                        required_wait_delivery_together: payload.json.customerPcbDataInfo.required_wait_delivery_together,
                        required_pack: payload.json.customerPcbDataInfo.required_pack,
                        required_receipt_and_delivery_note: payload.json.customerPcbDataInfo.required_receipt_and_delivery_note,
                        outside_barcode: payload.json.customerPcbDataInfo.outside_barcode,
                        required_smt: payload.json.customerPcbDataInfo.required_smt,
                        required_steel: payload.json.customerPcbDataInfo.required_steel,
                        remarks: payload.json.customerPcbDataInfo.remarks,
                    }
                })
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_PCB_DATA_INFO_DELETE:
            payload.type = CUSTOMER_PCB_DATA_INFO_DELETE_RECEIVE
            customer_pcb_data_info_delete(payload)
            return state
        case CUSTOMER_PCB_DATA_INFO_DELETE_RECEIVE:
            if (payload.json.success) {
                message.success('删除成功!')
                payload.type = DATA_RECEIVE
                customer_pcb_data_info_list(payload)
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_PCB_DATA_INFO_CHECK:
            payload.type = CUSTOMER_PCB_DATA_INFO_CHECK_RECEIVE
            customer_pcb_data_info_check(payload)
            return state
        case CUSTOMER_PCB_DATA_INFO_CHECK_RECEIVE:
            if (payload.json.success) {
                message.success('操作成功！')
                payload.type = DATA_RECEIVE
                customer_pcb_data_info_list(payload)
                return Object.assign({}, state, {
                    selectedRowKeys: [],
                    selectedRows: [],
                })
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_PCB_DATA_INFO_FILE_DOWN:
            customer_pcb_data_info_file_down(payload)
            return state
        case CUSTOMER_PCB_DATA_INFO_ORDER_INFO:
            payload.type = CUSTOMER_PCB_DATA_INFO_ORDER_INFO_RECEIVE
            customer_pcb_data_info_order_info(payload)
            return state
        case CUSTOMER_PCB_DATA_INFO_ORDER_INFO_RECEIVE:
            return Object.assign({}, state, {
                initForm: {
                    id: payload.json.customerPcbDataInfo.id,
                    layer: payload.json.customerPcbDataInfo.layer,
                    width: payload.json.customerPcbDataInfo.width,
                    length: payload.json.customerPcbDataInfo.length,
                    pcb_num: payload.json.customerPcbDataInfo.pcb_num,
                    thickness: payload.json.customerPcbDataInfo.thickness,
                    solder_color: payload.json.customerPcbDataInfo.solder_color,
                    char_color: payload.json.customerPcbDataInfo.char_color,
                    pad_cover: payload.json.customerPcbDataInfo.pad_cover,
                    pad_spraying: payload.json.customerPcbDataInfo.pad_spraying,
                    minute_test: payload.json.customerPcbDataInfo.minute_test,
                    delivery_time: payload.json.customerPcbDataInfo.delivery_time,
                    required_invoice: payload.json.customerPcbDataInfo.required_invoice,
                    required_add_customer_num: payload.json.customerPcbDataInfo.required_add_customer_num,
                    required_book: payload.json.customerPcbDataInfo.required_book,
                    required_add_date_in_pcs: payload.json.customerPcbDataInfo.required_add_date_in_pcs,
                    required_wait_delivery_together: payload.json.customerPcbDataInfo.required_wait_delivery_together,
                    required_pack: payload.json.customerPcbDataInfo.required_pack,
                    required_receipt_and_delivery_note: payload.json.customerPcbDataInfo.required_receipt_and_delivery_note,
                    outside_barcode: payload.json.customerPcbDataInfo.outside_barcode,
                    required_smt: payload.json.customerPcbDataInfo.required_smt,
                    required_steel: payload.json.customerPcbDataInfo.required_steel,
                    remarks: payload.json.customerPcbDataInfo.remarks,
                },
                currentDeliveryAddress: {
                    id: payload.json.customerDeliveryAddressInfo.id,
                    link_man: payload.json.customerDeliveryAddressInfo.link_man,
                    link_man_mobile: payload.json.customerDeliveryAddressInfo.link_man_mobile,
                    province: payload.json.customerDeliveryAddressInfo.province,
                    city: payload.json.customerDeliveryAddressInfo.city,
                    area: payload.json.customerDeliveryAddressInfo.area,
                    detail: payload.json.customerDeliveryAddressInfo.detail,
                },
                customerPcbOrderCostInfo: payload.json.customerPcbOrderCostInfo,
                total_amount: payload.json.total_amount
            })
        case CUSTOMER_PCB_ORDER_INFO_SAVE:
            payload.type = CUSTOMER_PCB_ORDER_INFO_SAVE_RECEIVE
            customer_pcb_order_info_save(payload)
            return state
        case CUSTOMER_PCB_ORDER_INFO_SAVE_RECEIVE:
            if (payload.json.success) {
                message.success('恭喜 下单 成功!')
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_PCB_ORDER_INFO_LIST:
            payload.type = DATA_RECEIVE
            customer_pcb_order_info_list(payload)
            return state
        case CUSTOMER_PCB_ORDER_INFO_DETAIL:
            payload.type = CUSTOMER_PCB_ORDER_INFO_DETAIL_RECEIVE
            customer_pcb_order_info_detail(payload)
            return state
        case CUSTOMER_PCB_ORDER_INFO_DETAIL_RECEIVE:
            if (payload.json.success) {
                return Object.assign({}, state, {
                    initForm: {
                        id: payload.json.customerPcbOrderInfo.id,
                        layer: payload.json.customerPcbOrderInfo.layer,
                        width: payload.json.customerPcbOrderInfo.width,
                        length: payload.json.customerPcbOrderInfo.length,
                        pcb_num: payload.json.customerPcbOrderInfo.pcb_num,
                        thickness: payload.json.customerPcbOrderInfo.thickness,
                        solder_color: payload.json.customerPcbOrderInfo.solder_color,
                        char_color: payload.json.customerPcbOrderInfo.char_color,
                        pad_cover: payload.json.customerPcbOrderInfo.pad_cover,
                        pad_spraying: payload.json.customerPcbOrderInfo.pad_spraying,
                        minute_test: payload.json.customerPcbOrderInfo.minute_test,
                        delivery_time: payload.json.customerPcbOrderInfo.delivery_time,
                        required_invoice: payload.json.customerPcbOrderInfo.required_invoice,
                        required_add_customer_num: payload.json.customerPcbOrderInfo.required_add_customer_num,
                        required_book: payload.json.customerPcbOrderInfo.required_book,
                        required_add_date_in_pcs: payload.json.customerPcbOrderInfo.required_add_date_in_pcs,
                        required_wait_delivery_together: payload.json.customerPcbOrderInfo.required_wait_delivery_together,
                        required_pack: payload.json.customerPcbOrderInfo.required_pack,
                        required_receipt_and_delivery_note: payload.json.customerPcbOrderInfo.required_receipt_and_delivery_note,
                        outside_barcode: payload.json.customerPcbOrderInfo.outside_barcode,
                        required_smt: payload.json.customerPcbOrderInfo.required_smt,
                        required_steel: payload.json.customerPcbOrderInfo.required_steel,
                        remarks: payload.json.customerPcbOrderInfo.remarks,

                        link_man: payload.json.customerPcbOrderInfo.link_man,
                        link_man_mobile: payload.json.customerPcbOrderInfo.link_man_mobile,
                        province: payload.json.customerPcbOrderInfo.province,
                        city: payload.json.customerPcbOrderInfo.city,
                        area: payload.json.customerPcbOrderInfo.area,
                        detail: payload.json.customerPcbOrderInfo.detail,

                        number_order: payload.json.customerPcbOrderInfo.number_order,
                        total_amount: payload.json.customerPcbOrderInfo.total_amount,
                        order_status: payload.json.customerPcbOrderInfo.order_status,
                        pay_type: payload.json.customerPcbOrderInfo.pay_type,
                        express_type: payload.json.customerPcbOrderInfo.express_type,
                        order_type: payload.json.customerPcbOrderInfo.order_type,
                        date_order: payload.json.customerPcbOrderInfo.date_order,
                    },
                    customerPcbOrderCostInfo: payload.json.customerPcbOrderCostInfo
                })
            } else {
                message.error(payload.json.msg)
            }
            return state
        case CUSTOMER_PCB_ORDER_INFO_FILE_DOWN:
            customer_pcb_order_info_file_down(payload)
            return state
        case CUSTOMER_STEEL_INFO_LIST:
            payload.type = DATA_RECEIVE
            customer_steel_info_list(payload)
            return state
        case CUSTOMER_STEEL_ORDER_INFO_ADD:
            payload.type = CUSTOMER_STEEL_ORDER_INFO_ADD_RECEIVE
            customer_steel_order_info_add(payload)
            return state
        case CUSTOMER_STEEL_ORDER_INFO_ADD_RECEIVE:
            if (payload.json.success) {
                message.success('恭喜你，钢网下单成功')
            } else {
                message.error('对不起，下单失败')
            }
            return state
        default:
            return state
    }
}