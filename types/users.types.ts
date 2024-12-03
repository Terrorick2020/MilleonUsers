export interface ProblemSolvingType {
    message: string
    count: number
}

export interface UserDataType {
    name: string
    surname: string
    age: number
    sex: string
    problems?: boolean
}

export interface ProblemDtoType {
    userId: number
}
