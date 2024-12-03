import { Injectable } from '@nestjs/common'
import { ProblemSolvingType, ProblemDtoType } from '~/types/users.types'
import { PrismaService } from '~/prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { faker } from '@faker-js/faker'

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private configService: ConfigService,
    ) {}

    USERS_COUNT = this.configService.get<number>('USERS_COUNT')

    async generateUsers(): Promise<string> {
        for (let i = 0; i < this.USERS_COUNT; i++) {
            await this.prisma.users.create({
                data: {
                    name: faker.person.firstName(),
                    surname: faker.person.lastName(),
                    age: Math.floor(Math.random() * 121),
                    sex: Math.random() > 0.5 ? 'male' : 'female',
                },
            })
        }

        return `Генерация пользователе прошла успешно!`
    }

    async problemSolving(
        problemDto: ProblemDtoType,
    ): Promise<ProblemSolvingType> {
        const id = Number(problemDto.userId)

        const res = await this.prisma.users.update({
            where: {
                id,
            },
            data: {
                problems: false,
            },
        })

        if (!res) {
            throw new Error('Db crashed!')
        }

        const count = await this.prisma.users.count({
            where: {
                problems: true,
            },
        })

        return {
            count: count + 1,
            message: 'success',
        }
    }
}
