import { emailReg } from '@/reg/reg';

export const rules = {
  required: {
    validate: (value: string): boolean => !!value,
    computesRequired: true,
  },
  ipAddress: {
    validate: (value: string): boolean => /^[0-9.]+$/g.test(value),
  },
  initScriptName: {
    validate: (value: string): boolean => /^[a-zA-Z0-9_-]*$/g.test(value),
  },
  email: {
    validate: (value: string): boolean => emailReg.test(value),
  },
  fixedLength: {
    validate: (value: string, { len }): boolean => value.length === +len,
    params: ['len'],
    computesRequired: true,
  },
  areaLength: {
    validate: (value: string, { minLen, maxLen }): boolean => {
      return value.length >= minLen && value.length <= maxLen;
    },
    params: ['minLen', 'maxLen'],
    computesRequired: true,
  },
};
