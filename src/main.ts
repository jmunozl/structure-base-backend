import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const corsOptions = { origin: 'http://localhost:3000' }
	const config = new DocumentBuilder()
		.setTitle('Structure Backend')
		.setDescription('The structure backend API description')
		.setVersion('1.0')
		.addTag('Login')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)
	app.enableCors(corsOptions)
	await app.listen(process.env.PORT || 4000)
}
bootstrap()
