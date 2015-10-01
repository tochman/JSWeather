require 'sinatra/base'
require 'sinatra/form_helpers'
require 'sinatra/flash'
require 'tilt/erb'
require 'data_mapper'

class Weather < Sinatra::Base

  helpers Sinatra::FormHelpers
  register Sinatra::Flash
  
  get '/' do
    erb :index
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
