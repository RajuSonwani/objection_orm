const knex = require("../db/db-setup");
const { Model } = require('objection');
Model.knex(knex);


class Channel extends Model {
  static get tableName() {
    return 'channel';
  }

  static get jsonSchema() {
    return {
        type: 'object',
        properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
        }
    }
  }

  static get relationMappings() {
    const Video = require('./channel');
    return {
      videos: {
        relation: Model.HasManyRelation,
        modelClass: Video,
        join: {
          from: 'channel.id',
          to: 'video.channel',
        },
      },
    };
  }
}

module.exports = Channel;
