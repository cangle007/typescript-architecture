//for import styles from
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

//for import * as styles from
// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export = classes;
// }
