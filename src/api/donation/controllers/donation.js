"use strict";

/**
 * donation controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::donation.donation", {
  async create(ctx) {
    const user = ctx.state.user;

    const donation = await super.create(ctx);

    const updated = await strapi.entityService.update(
      "api::donation.donation",
      donation.data.id,
      {
        data: {
          user: user.id,
          user_id:user.id
        },
      }
    );

    // const entry = await strapi.entityService.update('plugin::users-permissions.user', user.id, {
    //   data:{
    //     first_name:'XXXX'
    //   }
    // })

    // console.log()


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
