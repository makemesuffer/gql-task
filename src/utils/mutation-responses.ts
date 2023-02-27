export const mutationResponses = {
  created: (name: string) => ({
    success: true,
    code: '200',
    message: `${name} was successfully created.`,
  }),
  changed: (name: string) => ({
    success: true,
    code: '200',
    message: `${name} was successfully changed.`,
  }),
  deleted: (name: string) => ({
    success: true,
    code: '200',
    message: `${name} was successfully deleted.`,
  }),
} as const;
