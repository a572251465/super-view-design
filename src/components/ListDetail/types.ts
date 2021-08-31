interface IListDetail {
  detail: string
  notes?: string
  flag?: string
}
export interface IListTemplate {
  title: string
  content: IListDetail[]
}
