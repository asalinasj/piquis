const query = `
  SELECT
    d."id",
    d."Name",
    d."AverageRating",
    re."Name",
    re."Rating"
  FROM
    "Dish" d INNER JOIN
    "Restaurant" re ON d."RestaurantId" = re."id"
  WHERE
    d."Name" = ?  -- <-- replacement here
  `;

module.exports = query;
