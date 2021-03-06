# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Campaign.delete_all
User.delete_all
Contributions.delete_all
# demo_user = User.create(email: "demo_user@demo.com", password: "password", first_name: "Demo User", last_name: "User")
# demo_campaign = Campaign.create(location: "United States", title: "Cheezy Chapstick", description: "cheese that heals", creator_type: "Individual", banking_location: "United States", creator_id: User.last.id, duration: 30)
# Contribution.create(full_name: "James", email_address: "jimmytwoshoes@gmail.com", name_on_card: "James P. Irwin", card_number: 12435, contribution_appearance: "Anonymous", backer_id: User.last.id, campaign_id: Campaign.last.id)

  # , duration: "30", creator_id: User.all[0].id})
# 10.times do
#   User.create(email: Faker::Internet.unique.free_email, password: "password")
# end  