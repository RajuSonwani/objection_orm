const knex = require("../db/db-setup");
const { Model } = require('objection');
Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get jsonSchema() {
    return {
        type: 'object',
        required: ['email'],
        properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            email: { type: 'string' },
            channelId:{type: 'integer'}
        }
    }
  }

  static get relationMappings() {
    const Channel = require('./channel');
    return {
      channel: {
        relation: Model.BelongsToOneRelation,
        modelClass: Channel,
        join: {
          from: 'user.channelId',
          to: 'channel.id',
        },
      },
    };
  }
}

module.exports = User;
