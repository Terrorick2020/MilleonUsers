import { Test, TestingModule } from '@nestjs/testing'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

describe('UsersController', () => {
    let usersController: UsersController

    beforeEach(async () => {
        const users: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService],
        }).compile()

        usersController = users.get<UsersController>(UsersController)
    })

    describe('root', () => {
        it(`should return { message: 'success' }`, () => {
            expect(usersController.generateUsers()).toMatchObject({
                message: 'success',
            })
        })

        it(`should return { count: <number>, message: 'success' }`, () => {
            expect(
                usersController.problemSolving({ userId: 10 }),
            ).toMatchObject({
                count: expect.any(Number),
                message: 'success',
            })
        })
    })
})
