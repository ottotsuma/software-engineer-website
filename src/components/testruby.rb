require 'rspec'

class SingleVarQ
  def initialize(start)
    @q = start
  end

  def queue
    p @q
  end

  def enqueue(num_to_queue)
    #Checks to see is param is integer
    if num_to_queue.is_a? Integer
        #checks to see if param is < 10
      if num_to_queue < 10
          #checks to see if param is > 0
        if num_to_queue > 0
          # holds @q as a temp value
          temp1 = @q
          # reverses the order of temp1
          temp1 = temp1.to_s.reverse.to_i
          # makes temp1 into an array
          array = temp1.digits
          # pushes the new number into array
          array.push(num_to_queue)
          # makes @q the new number by joining the array
          @q = array.join.to_i
          # puts @q in the log so you can see the result
          puts @q
        else
          raise 'Invalid integer'
        end
      else
        raise 'Invalid integer'
      end
    else
      raise 'Invalid integer'
    end
  end

  def dequeue
    # holds @q as a temp value
    temp1 = @q
    # reverses the order of temp1
    temp1 = temp1.to_s.reverse.to_i
    # makes temp1 into an array
    array = temp1.digits
    # shifts the 1st number
    array.shift
    # makes @q the new number by joining the array
    @q = array.join.to_i
    # puts @q in the log so you can see the result
    puts @q
  end

  def circular_queue
    # bonus
  end
end

test = SingleVarQ.new(123)
puts test.enqueue(0)
puts test.dequeue

# The code can be tested here.
# https://repl.it/join/twzwmjpx-sheepsnow


# please improve this rails action,
# This is kind of vague.
# if you'd like to put some code in another file please state so:

# Below would go in the root file for the server, the routes such as Auth would go in the routes folder in their own files. (That is how I have laid this out.)
# Define a model & controlers for token authentication similar to JWT in NodeJS.
# Since the question was to improve the Auth route I will focus on that.
# Create a route API should look something like "/api/v1/sign_in" 
namespace :api, defaults: {format: :json} do
    namespace :v1 do 
      devise_scope :user do
        post "sign_in", to: "sessions#create"
      end
    end
  end
end


# authentication API
# make it into a class 
class AuthAPI 
    # Load sing in paarmas and load the user before the route (Defined further below)
    before_action :sign_params, only: :create
    before_action :load_user, only: :create
def auth
    # load user from database made into global var so that it can be used else where. 
    # removed and done as a before_action.

    # check the password matches (it would be better if we use bcrypt to encrypt the password)
    if @user.check_password?(sign_params[:password])
        # user should already be loaded from the before action and just checking the password match using the private "sign_params" 
        sign_in "user", @user
    # if user.check_password(params[:password])
    # send the user info as JSON
    render json: {
        messages: "Signed in successfully",
        is_success: true,
        data: {user: user}
      }, status: :ok
    else
    # if there is an error send back the message as JSON and status set to unauthorized 
    render json: {
        messages: "Wrong username or password",
        is_success: false,
        data: {}
      }, status: :unauthorized
    end
end
# private sign in params so they cannot be accessed outside 
private
def sign_params
  params.require(:sign_in).permit :email, :password
end
    # find the user using the username from the data base
def load_user
    @user = User.find(sign_params[:username])
    if @user
      return @user
    else
      render json: {
        messages: "Cannot get user",
        is_success: false,
        data: {}
      }, status: :failure
    end
  end
end

# https://secretbox.netlify.app/ This is a website I made with sign in credentials, the details are filled in so you can just sign in and test it. (The server is hosted on heroku and the front end is based with ReactJS.)

