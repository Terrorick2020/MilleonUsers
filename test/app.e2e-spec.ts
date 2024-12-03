import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from '@/app/app.module'

describe('AppController (e2e)', () => {
    let app: INestApplication

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    })

    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Hello World!')
    })

    it('/users/generate (GET)', () => {
        return request(app.getHttpServer())
            .get('/users/generate')
            .expect(200)
            .expect({ message: 'success' })
    })

    it('/users/problem-solving (POST)', () => {
        return request(app.getHttpServer())
            .post('/users/problem-solving')
            .send({ userId: 10 })
            .expect(201)
            .expect({
                count: expect.any(Number),
                message: 'success',
            })
    })
})
