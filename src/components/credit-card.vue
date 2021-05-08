<template>
  <div
    class="card-div pl-lg-9 pl-4 pl-sm-4 pr-4 pr-lg-9 pl-sm-4 pt-4 pb-4 pt-sm-6 pb-sm-6 pt-lg-8 pb-lg-8 d-flex flex-column justify-space-between"
  >
    <div class="d-flex justify-space-between">
      <img class="card_header_logo" src="../assets/patricia-logo.png" alt="Particia" />
      <button :class="{ reveal: obscure }" @click.stop.prevent="showDetails"></button>
    </div>
    <!-- Card number rendered when eye is turned on and off -->
    <transition name="fade">
      <div class="card-number-text" v-if="obscured">
        <span v-for="(number, i) in creditCardNumber" :key="i">{{number}}</span>
      </div>
    </transition>
    <div class="d-flex justify-space-between">
      <p class="white-text card-holder-name">Cardholder Name</p>
      <div>
        <span class="card-expiry-label white-text">
          <p>VALID</p>
          <p>TRU</p>
        </span>
        <span class="white-text ml-3 mr-lg-5">{{validity}}</span>
        <span class="card-cvv-label white-text ml-2">cvv</span>
        <span class="ml-2">
          <transition name="fade">
            <span class="white-text ml-2 mt-2" v-if="obscured">{{ sccretCvv }}</span>
          </transition>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCard",
  data: () => ({
    obscure: false,
    obscured: true,
    eyeIconOpen: "mdi-eye",
    eyeIconClosed: "mdi-eye-off",
    cardNumber: "9784978497849784",
    validity: "10/12",
    cvv: "455",
    timeout: null,
  }),
  computed: {
    creditCardNumber() {
      if (this.cardNumber) {
        if (this.obscure) {
          let numbers = this.cardNumber.match(/.{1,4}/g);
          return numbers;
        } else {
          let hashedNumbers = this.cardNumber
            .substr(-4)
            .padStart(16, "•")
            .match(/.{1,4}/g);
          return hashedNumbers;
        }
      } else {
        return [];
      }
    },
    sccretCvv() {
      if (this.cvv) {
        if (this.obscure) {
          return this.cvv;
        } else {
          let hashedCvv = this.cvv.substr(3).padStart(3, "•");
          return hashedCvv;
        }
      } else {
        return "";
      }
    },
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  methods: {
    showDetails() {
      clearTimeout(this.timeout);
      this.obscure = !this.obscure;
      this.obscured = false;
      this.timeout = setTimeout(() => {
        this.obscured = true;
      }, 100);
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0 !important;
}
.card-holder-name {
  padding-top: 5px;
}
.white-text {
  color: #9da8b6;
}
.card-expiry-label {
  line-height: 1.3;
  font-size: 8px;
  display: inline-block;
}
.card-cvv-label {
  font-size: 12px;
}
.span-text {
  line-height: 1.3;
  font-size: 8px;
  display: inline-block;
}

.card-number-text {
  color: #fff;
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  font-weight: 500;
}

button {
  height: 16px;
  width: 17px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("../assets/reveal.png");
}
.reveal {
  background-image: url("../assets/obscure.png");
}

button::focus {
  outline: none;
}

.text {
  color: #9da8b6;
  font-size: 11px;
  line-height: 1.3;
}
.card-div {
  background: url("../assets/Group.png"), #131313;
  background-size: contain;
  background-repeat: no-repeat;
  height: 300px;
  border-radius: 10px;
  width: 470px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 320px) and (max-width: 767px) {
  .card-div {
    width: 300px;
    height: 200px;
  }
  .white-text {
    font-size: 12px;
  }
  .card-expiry-label {
    font-size: 8px !important;
  }
  .card-number-text {
    font-size: 1rem;
  }
}
</style>