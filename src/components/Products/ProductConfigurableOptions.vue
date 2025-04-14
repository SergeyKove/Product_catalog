<template>
  <div>
    <form v-for="item in items">
      <div
        class="radio-buttons"
        v-for="itm in item.values"
        @click="() => onClick(item.attribute_code, itm.label)"
      >
        <input
          :style="{ 'background-color': itm.value }"
          type="radio"
          :name="item.attribute_code"
          :id="itm.label"
        />
        <label class="button" :for="itm.label">
          {{ item.attribute_code === 'size' ? itm.label : '' }}</label
        >
      </div>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(['items'])
const model = defineModel()

function onClick(category, item) {
  model.value[category] = item
}
</script>

<style scoped>
.radio-buttons {
  display: flex;
  flex-direction: row;
}

input[type='radio'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  height: 26px;
  width: 40px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;

  background-color: rgb(179, 180, 180);
}

input[type='radio']:checked {
  box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.514);
}

label {
  position: absolute;
  margin-left: 12px;
  pointer-events: none;
}

form {
  display: flex;
  align-items: center;
}
</style>
