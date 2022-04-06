import { Injectable } from '@nestjs/common'
import { User } from './user.entity'

@Injectable()
export class UsersService {
	private users: User[] = [{ id: 1, name: 'Jose' }]

	getAllUsers(): User[] {
		return this.users
	}

	getUser(id: number): User {
		return this.users.find(user => user.id === id)
	}

	createUser(user: User): User {
		this.users.push(user)
		return user
	}

	updateUser(id: number, name: string): User {
		const user: User = this.getUser(id)
		user.name = name
		return user
	}

	removeUser(id: number): void {
		const index = this.users.findIndex(user => user.id === id)
		if (index >= 0) this.users.splice(index, 1)
	}
}
