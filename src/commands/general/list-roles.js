'use babel';
'use strict';

export default {
	name: 'roles',
	aliases: ['listroles'],
	group: 'general',
	groupName: 'list-roles',
	description: 'Lists all server roles.',
	details: 'Only administrators may use this command.',
	examples: ['!roles'],

	isRunnable(message) {
		return message.server && message.server.rolesOfUser(message.author).some(role => role.hasPermission('administrator'));
	},

	run(message) {
		const roleList = message.server.roles.map(element => `${element.name} (ID: ${element.id})`).join('\n');
		message.client.reply(message, `Server roles:\n${roleList}`);
	}
};
