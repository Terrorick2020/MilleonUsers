import { Controller, Get, Post, Body } from '@nestjs/common'
import { UsersService } from './users.service'
import { ProblemSolvingType } from '~/types/users.types'
import { CreateProblemDto } from './dto/problem-solving.dto'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('generate')
    async generateUsers(): Promise<string> {
        return this.usersService.generateUsers()
    }

    @Post('problem-solving')
    async problemSolving(
        @Body() createProblemDto: CreateProblemDto,
    ): Promise<ProblemSolvingType> {
        return this.usersService.problemSolving(createProblemDto)
    }
}
