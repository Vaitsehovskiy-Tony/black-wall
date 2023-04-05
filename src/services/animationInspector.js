const animOnScroll = (animItems = []) => {
  for (let i = 0; i < animItems.length; i++) {
    const animItem = animItems[i];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if (
      window.pageYOffset > animItemOffset - animItemPoint &&
      window.pageYOffset < animItemOffset + animItemHeight
    ) {
      animItem.classList.add("active");
    } else if (animItem.classList.contains("animate_cyclically")) {
      {
        animItem.classList.remove("active");
      }
    }
  }
};

const offset = (el) => {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
};

export const animationInspector = () => {
  const animItems = document.querySelectorAll(".animate");
  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    animOnScroll(animItems);
    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
};
