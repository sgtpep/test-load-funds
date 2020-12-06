type Nominal<T, Name extends string> = T & {
  _type?: Name;
};

export default Nominal;
