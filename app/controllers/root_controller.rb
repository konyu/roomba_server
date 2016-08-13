class RootController < ApplicationController

  def show
    @command = Command.new
  end
end
