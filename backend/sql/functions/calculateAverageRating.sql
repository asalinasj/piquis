CREATE OR REPLACE FUNCTION calculate_average()
	RETURNS TRIGGER AS
$BODY$
DECLARE
	new_average DECIMAL;
BEGIN
	SELECT
		AVG("Stars")
	INTO
		new_average
	FROM
		"Rating" r
	WHERE
		NEW."DishId" = r."DishId";

	UPDATE "Dish"
	SET "AverageRating"=new_average
	WHERE "Dish"."id" = NEW."DishId";
	
	RETURN NEW;
END;
$BODY$
LANGUAGE plpgsql;
	