import Knex from 'knex';
import Objection from 'objection';

// Initialize knex connection.
const knex = Knex({
  debug: true,
  useNullAsDefault: true,
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

class SoftDeleteQueryBuilder extends Objection.QueryBuilder {
  constructor(modelClass) {
    super(modelClass);

    this.onBuild(builder => {
      if (!builder.context().withArchived) {
        builder.whereNull(`${modelClass.tableName}.deleted_at`);
      }
    });
  }

  withArchived(withArchived) {
    this.context().withArchived = withArchived;
    return this;
  }

  softDelete() {
    return this.patch({ deleted_at: new Date() });
  }
}

Objection.Model.QueryBuilder = SoftDeleteQueryBuilder;
Objection.Model.RelatedQueryBuilder = SoftDeleteQueryBuilder;

Objection.Model.knex(knex);
