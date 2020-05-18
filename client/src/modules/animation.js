import { TweenLite } from "gsap";

const animation = (
  animationTarget,
  propertyToAnimate,
  propertyValue,
  duration,
  delay
) => {
  if (propertyToAnimate === "scale") {
    TweenLite.from(
      animationTarget,
      {
        scaleX: propertyValue,
        scaleY: propertyValue,
        duration,
        delay,
      },
      0
    );
  } else if (propertyToAnimate === "opacity") {
    TweenLite.to(
      animationTarget,
      {
        opacity: propertyValue,
        duration,
        delay,
      },
      0
    );
  }
};

export default animation;
