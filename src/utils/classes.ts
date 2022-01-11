
export const classes = (
  rootClass: string,
  conditionalClass: Record<string, boolean | undefined>,
  className = ''
) => {
  const modifiedClasses = Object
    .entries(conditionalClass)
    .map(([className, condition]) => (condition && className) || '')
    .join(' ');

  return `${rootClass} ${modifiedClasses} ${className}`;
};

