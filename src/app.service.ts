import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	getHello(): object {
		return { message: 'Hello from API V2' }
	}
}
