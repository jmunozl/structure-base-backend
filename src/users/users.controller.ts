import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common'
import { User } from './user.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	getUsers(@Query() query): User[] {
		return this.usersService.getAllUsers()
	}

	@Get(':id')
	getUser(@Param('id') id: number): User {
		return this.usersService.getUser(id)
	}

	@Post()
	@HttpCode(HttpStatus.NO_CONTENT)
	createUser(@Body('name') user: User) {
		return this.usersService.createUser(user)
	}

	@Patch(':id')
	updateUser(@Param('id') id: number, @Body('name') name): User {
		return this.usersService.updateUser(id, name)
	}

	@Delete(':id')
	deleteUser(@Param('id') id: number): void {
		return this.usersService.removeUser(id)
	}
}
