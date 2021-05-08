import { shallowMount } from "@vue/test-utils";
import CreditCard from "@/components/credit-card.vue";

describe("credit-card.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CreditCard);
    });

    it("is a Vue instance", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it("expects eye icon to be off", () => {
        expect(wrapper.vm.$data.obscure).toBe(false);
    });


    it("expects the card number length to be 16", () => {
        expect(wrapper.vm.$data.cardNumber).toHaveLength(16);
    });

    it("expects the cvv number length to be 3", () => {
        expect(wrapper.vm.$data.cvv).toHaveLength(3);
    });


    it("expects the showDetails method to be triggered when clicked", () => {
        const showDetails = jest.fn();
        wrapper.setMethods({
            showDetails: showDetails,
        });

        wrapper.find("button").trigger("click");
        expect(showDetails).toHaveBeenCalled();
    });
});