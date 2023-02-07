const dotAnim = (node: HTMLElement) => {
  node.style.transition = 'none';
  node.style.visibility = 'hidden';
  node.getBoundingClientRect();
  node.style.transition = 'visibility 0.06s ease 0.8s';
  node.style.visibility = 'visible';
};

export default dotAnim;
