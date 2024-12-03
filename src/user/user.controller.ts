import { Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('generate')
    genUsers(): string {
        return this.userService.genUsers()
    }

    @Post('get')
    setProblem(): string {
        const id: number = 1
        return this.userService.setProblem(id)
    }
}
