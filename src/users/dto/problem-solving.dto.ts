import { IsNumber } from 'class-validator'

export class CreateProblemDto {
    @IsNumber()
    userId: number
}
