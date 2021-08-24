interface IDetail {
    address: string,
    notes?: string
}

export interface IAddressDetail {
    title: string,
    grade: number,
    children: IDetail[]   
}