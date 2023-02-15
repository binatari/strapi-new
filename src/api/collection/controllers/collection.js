'use strict';

/**
 * A set of functions called "actions" for `collection`
 */

module.exports = {
  async collect(ctx, next) {
    try {

     const user = ctx.state.user;
     const entry = await strapi.entityService.findOne('plugin::users-permissions.user', user.id)
     // console.log(entry, Number(entry.balance) > Number(donation.data.attributes.amount), Number(entry.balance) , donation.data.attributes.amount)
     const update = await strapi.entityService.update('plugin::users-permissions.user', user.id, {
       data:{
        balance:  Number(entry.balance) + Number(entry.profit),
        profit:0
       }
     })

     console.log(update)

     return {
      message:'Your profit has been successfully added to your balance'
     }
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },

  async collectInvestments(ctx, next) {
    try {

    const b = ctx.request.body
     const user = ctx.state.user;

     const {data} = b
     const entry = await strapi.entityService.findOne('plugin::users-permissions.user', user.id)
     // console.log(entry, Number(entry.balance) > Number(donation.data.attributes.amount), Number(entry.balance) , donation.data.attributes.amount)
     const update = await strapi.entityService.update('plugin::users-permissions.user', user.id, {
       data:{
        balance: data.type == 'residential' ?  Number(entry.balance) + Number(entry?.residential_investment) :  data.type == 'commercial' ?  Number(entry.balance) + Number(entry?.commercial_investment) : Number(entry.balance) + Number(entry?.industriaI_investment),
        residential_investment: data.type == 'residential' ? 0 : Number(entry?.residential_investment),
        commercial_investment: data.type == 'commercial' ? 0 : Number(entry?.commercial_investment) ,
        industriaI_investment: data.type == 'industrial' ? 0 : Number(entry?.industriaI_investment)
       }
     })

    //  console.log(update)

     return {
      message:'Your investment has been added tou your main balance '
     }
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },

};
