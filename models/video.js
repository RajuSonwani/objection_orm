const knex = require("../db/db-setup");
const { Model } = require('objection');
Model.knex(knex);


class Video extends Model {
  static get tableName() {
    return 'video';
  }

  static get jsonSchema() {
    return {
        type: 'object',
        required: ['channelId'],
        properties: {
            id: { type: 'integer' },
            title: { type: 'string' },
            channelId: {typr: 'integer'}
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
          from: 'video.channel',
          to: 'channel.id',
        },
      },
    };
  }
}

module.exports = Video;
