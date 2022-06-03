export const shakeItem = (animationTargetClass: string): void => {
  const animation: Keyframe[] = [
    { transform: 'translateX(0px)' },
    { transform: 'translateX(5px)' },
    { transform: 'translateX(-5px)' },
    { transform: 'translateX(5px)' },
    { transform: 'translateX(0px)' },
  ];
  const animationOptions: KeyframeAnimationOptions = {
    duration: 500,
    iterations: 1,
  };

  document.querySelectorAll(`.${animationTargetClass}`).forEach((target) => {
    target.animate(animation, animationOptions);
  });
};
