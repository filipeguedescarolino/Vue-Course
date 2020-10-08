Vue.component("coupon", {
    template: `<input placeholder="Enter your Coupon Code" @blur = "onCouponApplied">`,

    methods: {
        onCouponApplied() {
            this.$emit('applied');
        }
    }

});

new Vue({
    el: "#root",

    data: {
        couponApplied: false
    },



    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});