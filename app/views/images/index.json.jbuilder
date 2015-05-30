json.array!(@images) do |image|
  json.extract! image, :id, :img_path
  json.url image_url(image, format: :json)
end
