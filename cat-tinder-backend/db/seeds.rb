# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



cat_attributes = [
  {
    name: 'Felix',
    age: 2,
    enjoys: 'Long naps on the couch, and a warm fire.'
  },
  {
    name: 'Homer',
    age: 12,
    enjoys: 'Food mostly, really just food.'
  },
  {
    name: 'Carl',
    age: 24,
    enjoys: 'Sleeping.'
  },
  {
    name: 'Max',
    age: 17,
    enjoys: 'Killing birds.'
  },
  {
    name: 'Chloe',
    age: 15,
    enjoys: 'Being afraid of everything.'
  }
]

cat_attributes.each do |attributes|
  Cat.find_or_create_by(attributes)
end
