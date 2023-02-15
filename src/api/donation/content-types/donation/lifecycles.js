module.exports = {
  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;

    // console.log(data, event)
  },
 async afterUpdate (event) {
    const { result, params } = event;

if(result.is_verified){

  const entry = await strapi.entityService.findOne('plugin::users-permissions.user', result.user_id)

   const update = await strapi.entityService.update('plugin::users-permissions.user', result.user_id, {
      data:{
       balance: entry.balance ? Number(entry.balance) + Number(result?.amount) : Number(0) + Number(result?.amount)
      }
    })
}
    // if(result.is_verified){
    //   async () =>{
    //
    //       data:{
    //         first_name:'XXXX'
    //       }
    //     })
    //   }
    // }

    // do something to the result;
  },
};
