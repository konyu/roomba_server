class Image
  attr_accessor :image
  IMG_PATH= "public/pic.jpg"

  def initialize(params)
    @image = params[:image]
  end

  def self.read_file
    File.exist?(IMG_PATH) ? "/pic.jpg" : "/images/notfound.jpg"
  end

  def save_file
    file = @image.open
    File.open(IMG_PATH, "wb") do |io|
      io.write file.read
    end
    file.close
    IMG_PATH
  end
end
