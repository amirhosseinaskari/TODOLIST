export enum TODO_ITEM_STATUS {
  ACTIVE,
  COMPELETED,
}

export interface ITodoListItem {
  id: string
  index: number
  title: string
  description: string
  date: Date
  status: TODO_ITEM_STATUS
  onEditClick?: Function
  onDeleteClick?: Function
}
