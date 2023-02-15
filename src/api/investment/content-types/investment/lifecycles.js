module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;


  },
 async afterCreate (event) {
    const { result, params, state } = event;



    // console.log(result)

    // if(result.user_id){
    //   const entry = await strapi.entityService.findOne('plugin::users-permissions.user', result.user_id)

    //   console.log(entry)
    // }


  // if(entry.balance > result?.amount){
  //   const update = await strapi.entityService.update('plugin::users-permissions.user', result.user_id, {
  //     data:{
  //      balance: entry.balance ? Number(entry.balance) - Number(result?.amount) : 0,
  //      residential_investment:result?.type == 'residential' ? Number(entry?.residential_investment) + Number(result?.amount) : Number(entry?.residential_investment),
  //      commercial_investment:result?.type == 'commercial' ? Number(entry?.commercial_investment) + Number(result?.amount) : Number(entry?.commercial_investment),
  //      industrial_investment:result?.type == 'industrial' ? Number(entry?.industrial_investment) + Number(result?.amount) : Number(entry?.industrial_investment)
  //     }
  //   })
  // }
  },
};
