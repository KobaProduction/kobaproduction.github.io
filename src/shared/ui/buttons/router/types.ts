import type { QBtnProps } from 'quasar'


export interface RouterButtonProps extends Omit<QBtnProps, "to" | "disable"> {
  routerRecordName: string
}
