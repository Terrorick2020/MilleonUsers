import { Injectable } from '@nestjs/common'
import { faker } from '@faker-js/faker'

@Injectable()
export class UserService {
    genUsers(): string {
        const person: string = faker.person.fullName()
        return `Генерация пользователей прошла успешно! ${person}`
    }

    setProblem(id: number): string {
        return `Пользователь: ${id} избавился от проблем!`
    }
}
