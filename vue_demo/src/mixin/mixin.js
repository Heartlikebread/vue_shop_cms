export const messageMixin = {
    data() {
        return {
            message: {
                type: null,
                text: null
            }
        }
    },
    methods: {
        setMessage(type, text) {
            this.message = {
                type: type,
                text: text
            };
        },
        clearMessage() {
            Object.assign(this.message, this.$options.data.call(this).message);
        },
    }
}

import ApiErrorHandler from '../components/ApiErrorHandler';
export const apiErrorHandleMixin = {
    methods: {
        apiErrorHandle(apiResponse) {
            if (apiResponse.data.message) {
                this.$modal.show(
                    ApiErrorHandler, {
                        response: apiResponse
                    }, {
                        height: "auto"
                    }
                );
            }

            if (apiResponse.data.code) {
                this.setMessage("error", `error code: ${apiResponse.data.code}`);
            }
        }
    }
}