@campaigns.each do |campaign|
  json.partial! 'campaign', campaign: campaign
end  