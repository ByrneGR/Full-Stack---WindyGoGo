@perks.each do |perk|
  json.set! perk.id do
  json.partial! 'perk', perk: perk
  end
end  