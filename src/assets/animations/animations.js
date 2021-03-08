export const approachHome = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.4,
    transition: {
      duration: 0.8,
    },
  },
};

export const approachItem = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    translateX: 500,
  },
  show: {
    opacity: 1,
    scale: 1,
    translateX: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.4,
    translateX: 500,
    transition: {
      duration: 1,
    },
  },
};

export const approachInfo = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    translateX: -500,
  },
  show: {
    opacity: 1,
    scale: 1,
    translateX: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.4,
    translateX: -500,
    transition: {
      duration: 1,
    },
  },
};

export const aboveTitle = {
  hidden: {
    opacity: 0,
    translateY: -500,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    translateY: -500,
    transition: {
      duration: 0.6,
    },
  },
};

export const aboveText = {
  hidden: {
    opacity: 0,
    translateY: -500,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    translateY: -500,
    transition: {
      duration: 0.8,
    },
  },
};
