
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();
        tbl.integer("VIN", 100)
        .unique()
        .notNullable();
        tbl.text("make", 100)
        .notNullable();
        tbl.text("model", 100)
        .notNullable();
        tbl.float("mileage")
        .notNullable();
        tbl.text("transmission");
        tbl.text("title_status");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");  
};
