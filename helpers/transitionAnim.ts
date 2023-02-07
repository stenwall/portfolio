const transitionAnim = (nodes: NodeList) => {
  nodes.forEach((path: SVGPathElement) => {
    const length = path.getTotalLength().toString();
    path.style.transition = 'none';
    path.style.strokeDasharray = `${length} ${length}`;
    path.style.strokeDashoffset = length;
    // trigger a layout so styles are calculated & the browser picks up the starting position before animating
    path.getBoundingClientRect();
    const className = path.getAttribute('class');
    switch (className) {
      case 'blip-1':
        path.style.transition = 'stroke-dashoffset 0.6s ease-in';
        break;
      case 'blip-2':
        path.style.transition = 'stroke-dashoffset 0.32s ease-out 0.6s';
        break;
      case 'flick-1':
        path.style.transition = 'stroke-dashoffset 0.53s ease-in';
        break;
      case 'flick-2':
        path.style.transition = 'stroke-dashoffset 0.09s ease 0.53s';
        break;
      case 'flick-3':
        path.style.transition = 'stroke-dashoffset 0.21s ease-out 0.62s';
        break;
      case 'arrow-line':
        path.style.transition = 'stroke-dashoffset 0.32s ease-in-out';
        break;
      case 'arrow-head-left':
        path.style.transition = 'stroke-dashoffset 0.27s ease 0.3s';
        break;
      case 'arrow-head-right':
        path.style.transition = 'stroke-dashoffset 0.21s ease 0.57s';
        break;
      default:
    }
    path.style.strokeDashoffset = '0';
  });
};

export default transitionAnim;
