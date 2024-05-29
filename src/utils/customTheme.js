const customTheme = {
  button: {
    color: {
      primary: 'border border-transparent bg-color-primary-500 text-white focus:ring-4 focus:ring-color-primary-400 enabled:hover:bg-color-primary-600',
      info: 'border border-transparent bg-color-info-500 text-white focus:ring-4 focus:ring-color-info-400 enabled:hover:bg-color-info-600',
      warning: 'border border-transparent bg-color-warning-500 text-white focus:ring-4 focus:ring-color-warning-400 enabled:hover:bg-color-warning-600',
      danger: 'border border-transparent bg-color-danger-500 text-white focus:ring-4 focus:ring-color-danger-400 enabled:hover:bg-color-danger-600',
      success: 'border border-transparent bg-color-success-500 text-white focus:ring-4 focus:ring-color-success-400 enabled:hover:bg-color-success-600',
      white_primary: 'border border-transparent bg-white text-color-primary-500 focus:ring-4 focus:ring-color-primary-400 enabled:hover:bg-gray-100',
      white_info: 'border border-transparent bg-white text-color-info-500 focus:ring-4 focus:ring-color-info-400 enabled:hover:bg-gray-100',
      white_warning: 'border border-transparent bg-white text-color-warning-500 focus:ring-4 focus:ring-color-warning-400 enabled:hover:bg-gray-100',
      white_danger: 'border border-transparent bg-white text-color-danger-500 focus:ring-4 focus:ring-color-danger-400 enabled:hover:bg-gray-100',
      white_success: 'border border-transparent bg-white text-color-success-500 focus:ring-4 focus:ring-color-success-400 enabled:hover:bg-gray-100',
    },
  },
  timeline: {
    root: {
      direction: {
        horizontal: 'sm:flex',
        vertical: 'relative border-l border-gray-200 ',
      },
    },
    item: {
      root: {
        horizontal: 'relative mb-6 sm:mb-0',
        vertical: 'mb-10 ml-6',
      },
      content: {
        root: {
          base: 'mt-3 sm:pr-8',
        },
        body: {
          base: 'mb-4 text-base font-normal text-gray-500 ',
        },
        time: {
          base: 'mb-1 text-sm font-normal leading-none text-gray-400 ',
        },
        title: {
          base: 'text-lg font-semibold text-gray-900 ',
        },
      },
      point: {
        horizontal: 'flex items-center',
        line: 'hidden h-0.5 w-full bg-gray-200 ',
        marker: {
          base: {
            horizontal: 'absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 ',
            vertical: 'absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 ',
          },
          icon: {
            base: 'h-3 w-3 text-cyan-600',
            wrapper: 'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white ',
          },
        },
        vertical: '',
      },
    },
  },
};

export default customTheme;
