require 'sinatra/base'

class Weather < Sinatra::Base
  get '/' do
    'Hello Weather!'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
