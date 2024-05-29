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
  dropdown: {
    arrowIcon: 'ml-2 h-4 w-4',
    content: 'py-1 focus:outline-none',
    floating: {
      animation: 'transition-opacity',
      arrow: {
        base: 'absolute z-10 h-2 w-2 rotate-45',
        style: {
          light: 'bg-white',
          auto: 'bg-white ',
        },
        placement: '-4px',
      },
      base: 'z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none',
      content: 'py-1 text-sm text-gray-700 ',
      divider: 'my-1 h-px bg-gray-100',
      header: 'block px-4 py-2 text-sm text-gray-700 ',
      hidden: 'invisible opacity-0',
      item: {
        container: '',
        base: 'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ',
        icon: 'mr-2 h-4 w-4',
      },
      style: {
        light: 'border border-gray-200 bg-white text-gray-900',
        auto: 'border border-gray-200 bg-white text-gray-900 ',
      },
      target: 'w-fit',
    },
    inlineWrapper: 'flex items-center',
  },
};

export default customTheme;
