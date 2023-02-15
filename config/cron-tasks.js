const moment = require("moment/moment");

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  //  ' 0 0 */7 * *' every 7 days

  "0 9 * * *": async ({ strapi }) => {
    const dateFrom = moment().subtract(7, "d").format("YYYY-MM-DD");
    // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
    const entries = await strapi.entityService.findMany(
      "api::investment.investment",
      {
        filters: {
          date: { $eq: dateFrom },
        },
      }
    );

    console.log(entries, dateFrom);

    entries.map(async (entry) => {
      const user = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        entry.user_id
      );
      // console.log(entry, Number(entry.balance) > Number(donation.data.attributes.amount), Number(entry.balance) , donation.data.attributes.amount)

      const residentialAmount = Number(entry.amount) * 0.7;
      const industrialAmount = Number(entry.amount) * 0.5;
      const commercialAmount = Number(entry.amount) * 0.9;
      const update = await strapi.entityService.update(
        "plugin::users-permissions.user",
        entry.user_id,
        {
          data: {
            profit:
              entry?.type == "residential"
                ? Number(user.profit) + residentialAmount
                : entry?.type == "industrial"
                ? Number(user.profit) + industrialAmount
                : Number(user.profit) + commercialAmount,
          },
        }
      );
      const updateDate = await strapi.entityService.update(
        "api::investment.investment",
        entry.user_id,
        {
          data: {
           date:moment().format("YYYY-MM-DD")
          },
        }
      );
    });


  },
};
