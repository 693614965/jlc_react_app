/**
 * Created by Administrator on 2017/8/21.
 */
import {
    CUSTOMER_DELIVERY_ADDRESS_INFO_DELETE,
    CUSTOMER_DELIVERY_ADDRESS_INFO_EDIT,
    CUSTOMER_DELIVERY_ADDRESS_INFO_GET,
    CUSTOMER_DELIVERY_ADDRESS_INFO_SAVE,
    CUSTOMER_DELIVERY_ADDRESS_INFO_SELECT,
    CUSTOMER_DELIVERY_ADDRESS_INFO_SET_DEFAULT,
    CUSTOMER_PCB_DATA_INFO_ADD,
    CUSTOMER_PCB_DATA_INFO_CHECK,
    CUSTOMER_PCB_DATA_INFO_DELETE,
    CUSTOMER_PCB_DATA_INFO_EDIT,
    CUSTOMER_PCB_DATA_INFO_FILE_DOWN,
    CUSTOMER_PCB_DATA_INFO_LIST,
    CUSTOMER_PCB_DATA_INFO_ORDER_INFO,
    CUSTOMER_PCB_DATA_INFO_SAVE,
    CUSTOMER_PCB_ORDER_INFO_DETAIL,
    CUSTOMER_PCB_ORDER_INFO_FILE_DOWN,
    CUSTOMER_PCB_ORDER_INFO_LIST,
    CUSTOMER_PCB_ORDER_INFO_SAVE,
    CUSTOMER_PERSONNEL_INFO_GET,
    CUSTOMER_PERSONNEL_INFO_SAVE,
    CUSTOMER_STEEL_INFO_LIST,
    CUSTOMER_STEEL_ORDER_INFO_ADD,
    INIT_SELECTED_ROWS,
    MODEL_CLOSE,
    MODEL_OPEN,
    USER_LOGIN,
    USER_REGISTER
} from "../constants/Constants";


export const mapStateToProps = (state) => {
    return state
}

export const mapDispatchToProps = (dispatch) => {
    return {
        model_open: () => dispatch({
            type: MODEL_OPEN,
            payload: {
                dispatch
            }
        }),
        model_close: () => dispatch({
            type: MODEL_CLOSE,
            payload: {
                dispatch
            }
        }),
        init_selected_rows: (selectedRowKeys, selectedRows) => dispatch({
            type: INIT_SELECTED_ROWS,
            payload: {
                selectedRowKeys: selectedRowKeys,
                selectedRows: selectedRows
            }
        }),
        user_login: (values) => dispatch({
            type: USER_LOGIN,
            payload: {
                values: values,
                dispatch: dispatch
            }
        }),
        user_register: (values) => dispatch({
            type: USER_REGISTER,
            payload: {
                values: values,
                dispatch: dispatch
            }
        }),
        customer_personnel_get: () => dispatch({
            type: CUSTOMER_PERSONNEL_INFO_GET,
            payload: {
                dispatch
            }
        }),
        customer_personnel_info_save: (values) => dispatch({
            type: CUSTOMER_PERSONNEL_INFO_SAVE,
            payload: {
                values: values,
                dispatch: dispatch
            }
        }),
        customer_delivery_address_get: () => dispatch({
            type: CUSTOMER_DELIVERY_ADDRESS_INFO_GET,
            payload: {
                dispatch
            }
        }),
        customer_delivery_address_save: (values) => dispatch({
            type: CUSTOMER_DELIVERY_ADDRESS_INFO_SAVE,
            payload: {
                values: values,
                dispatch: dispatch
            }
        }),
        customer_delivery_address_edit: (key) => dispatch({
            type: CUSTOMER_DELIVERY_ADDRESS_INFO_EDIT,
            payload: {
                id: key,
                dispatch
            }
        }),
        customer_delivery_address_delete: (key) => dispatch({
            type: CUSTOMER_DELIVERY_ADDRESS_INFO_DELETE,
            payload: {
                id: key,
                dispatch
            }
        }),
        customer_delivery_address_set_default: (key) => dispatch({
            type: CUSTOMER_DELIVERY_ADDRESS_INFO_SET_DEFAULT,
            payload: {
                id: key,
                dispatch: dispatch
            }
        }),
        customer_delivery_address_select: (selectedRow) => dispatch({
            type: CUSTOMER_DELIVERY_ADDRESS_INFO_SELECT,
            payload: {
                selectedRow: selectedRow,
                dispatch
            }
        }),
        customer_pcb_data_info_add: () => dispatch({
            type: CUSTOMER_PCB_DATA_INFO_ADD,
            payload: {
                dispatch
            }
        }),
        customer_pcb_data_info_save: (values) => dispatch({
            type: CUSTOMER_PCB_DATA_INFO_SAVE,
            payload: {
                values: values,
                dispatch: dispatch
            }
        }),
        customer_pcb_data_info_list: () => dispatch({
            type: CUSTOMER_PCB_DATA_INFO_LIST,
            payload: {
                dispatch: dispatch
            }
        }),
        customer_pcb_data_info_edit: (key) => dispatch({
            type: CUSTOMER_PCB_DATA_INFO_EDIT,
            payload: {
                id: key,
                dispatch: dispatch
            }
        }),
        customer_pcb_data_info_delete: (key) => dispatch({
            type: CUSTOMER_PCB_DATA_INFO_DELETE,
            payload: {
                id: key,
                dispatch: dispatch
            }
        }),
        customer_pcb_data_info_check: (key) => dispatch({
            type: CUSTOMER_PCB_DATA_INFO_CHECK,
            payload: {
                id: key,
                dispatch: dispatch
            }
        }),
        customer_pcb_data_info_file_down: (key) => dispatch({
            type: CUSTOMER_PCB_DATA_INFO_FILE_DOWN,
            payload: {
                id: key,
                dispatch: dispatch
            }
        }),
        customer_pcb_data_info_order_info: (key) => dispatch({
            type: CUSTOMER_PCB_DATA_INFO_ORDER_INFO,
            payload: {
                id: key,
                dispatch
            }
        }),
        customer_pcb_order_info_save: (values) => dispatch({
            type: CUSTOMER_PCB_ORDER_INFO_SAVE,
            payload: {
                values: values,
                dispatch: dispatch
            }
        }),
        customer_pcb_order_info_detail: (key) => dispatch({
            type: CUSTOMER_PCB_ORDER_INFO_DETAIL,
            payload: {
                id: key,
                dispatch: dispatch
            }
        }),
        customer_pcb_order_info_list: () => dispatch({
            type: CUSTOMER_PCB_ORDER_INFO_LIST,
            payload: {
                dispatch: dispatch
            }
        }),
        customer_pcb_order_info_file_down: (key) => dispatch({
            type: CUSTOMER_PCB_ORDER_INFO_FILE_DOWN,
            payload: {
                id: key,
                dispatch: dispatch
            }
        }),
        customer_steel_info_list: () => dispatch({
            type: CUSTOMER_STEEL_INFO_LIST,
            payload: {
                dispatch
            }
        }),
        customer_steel_order_info_add: (values) => dispatch({
            type: CUSTOMER_STEEL_ORDER_INFO_ADD,
            payload: {
                values: values,
                dispatch: dispatch
            }
        }),
    }
}