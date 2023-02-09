'use strict';

/**
 * withdrawal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::withdrawal.withdrawal',  {
  async create(ctx) {
    const user = ctx.state.user;

    const donation = await super.create(ctx);

    const updated = await strapi.entityService.update(
      "api::withdrawal.withdrawal",
      donation.data.id,
      {
        data: {
          user: user.id,
        },
      }
    );

    return updated;
  },
  async find(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      user: user.id,
    };

    return super.find(ctx);
  },
  async findOne(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      user: user.id,
    };

    return super.findOne(ctx);
  },
  async update(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      user: user.id,
    };

    return super.update(ctx);
  },
  async delete(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      user: user.id,
    };

    return super.delete(ctx);
  },
});
