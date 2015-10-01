require 'rubygems'
require File.join(File.dirname(__FILE__), 'lib/main_controller.rb')
use Rack::Static, urls: ['/css', '/js'], root: 'lib/assets'
run Weather