import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users/users.controller'
import { UsersService } from './users/users.service'

@Module({
	imports: [
		// TypeOrmModule.forRoot({
		// 	type: 'postgres',
		// 	host: 'localhost',
		// 	port: 5432,
		// 	username: 'root',
		// 	password: 'root',
		// 	database: 'postgres',
		// 	autoLoadEntities: true,
		// 	synchronize: true,
		// }),
	],
	controllers: [AppController, UsersController],
	providers: [AppService, UsersService],
})
export class AppModule {}
