import { ref, onMounted, onUnmounted } from "vue";
export function useMouse() {
  const x = ref(0);
  const u = ref(0);
  function updata(e) {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    window.addEventListener("mousemove", updata);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", updata);
  });
  return { x, y };
}
