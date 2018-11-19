const query = `
  SELECT
    d."name",
    ra."Stars",
    re."name",
    re."rating"
  FROM
    "Dish" d INNER JOIN
    "Rating" ra ON  -- TODO: handle case where dish has no ratings
    d."id" = ra."DishId" INNER JOIN
    "Restaurant" re ON d."RestaurantId" = re."id"
  WHERE
    d."name" = ?  -- <-- replacement here
  `;

module.exports = query;
