import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

/* Store and retrieve a simple string */

await client.set('key', 'value');
const value = await client.get('key');

/* Store and retrieve a map */

await client.hset('user-session:123',{
	name: 'John',
	surname: 'Smith',
	company: 'Redis',
	age: 29
})

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));

