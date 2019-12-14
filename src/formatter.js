const formatter = (mask, input) => {
  try {
    const i = input.value.length;
    const output = mask.substring(0, 1);
    const text = mask.substring(i);
    const key = window.event ? event.keyCode : e.which;

    if (key > 47 && key < 58) {
      if (text.substring(0, 1) != output) {
        input.value += text.substring(0, 1);
      }
    } else {
      if (key == 8 || key == 0) {
        if (text.substring(0, 1) != output) {
          input.value += text.substring(0, 1);
        }
      } else return false;
    }
  } catch (e) {
    return false;
  }
};

module.exports = { formatter };
