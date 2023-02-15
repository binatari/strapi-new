'use strict';
const moment = require("moment/moment");
/**
 * investment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::investment.investment', {
  async create(ctx) {
    const user = ctx.state.user;

    const donation = await super.create(ctx);

    console.log(user.id, 'at creation')

    const updated = await strapi.entityService.update(
      "api::investment.investment",
      donation.data.id,
      {
        data: {
          user: user.id,
          user_id: user.id,
          date:moment().format("YYYY-MM-DD")
        },
      }
    );

    const entry = await strapi.entityService.findOne('plugin::users-permissions.user', user.id)
    // console.log(entry, Number(entry.balance) > Number(donation.data.attributes.amount), Number(entry.balance) , donation.data.attributes.amount)
     if(Number(entry.balance) > Number(donation.data.attributes.amount)){
    const update = await strapi.entityService.update('plugin::users-permissions.user', user.id, {
      data:{
       balance: entry.balance ? Number(entry.balance) - Number(donation.data.attributes.amount) : 0,
       residential_investment:donation.data.attributes.type == 'residential' ? Number(entry?.residential_investment) + Number(donation.data.attributes.amount) : Number(entry?.residential_investment),
       commercial_investment:donation.data.attributes.type == 'commercial' ? Number(entry?.commercial_investment) + Number(donation.data.attributes.amount) : Number(entry?.commercial_investment),
       industriaI_investment:donation.data.attributes.type == 'industrial' ? Number(entry?.industriaI_investment) + Number(donation.data.attributes.amount) : Number(entry?.industriaI_investment)
      }
    })
  }

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
