type AddButtonProps = {
  label: string,
  get: number,
  add: () => void,
  reduce: () => void,
  change: (value: number) => void,
  className?: string,
  floatDigits: number,
  unit: string,
}

export default AddButtonProps;