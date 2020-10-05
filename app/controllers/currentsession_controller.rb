class CurrentsessionController < ApplicationController
    def show
        if user_signed_in?
            @user = current_user
            render json: @user
        else
            render json: {}, status: 900
        end

    end

    def logout
        if user_signed_in?
            @user = current_user
            sign_out(@user)
            render json: {}, status: 901
        else  
            render json: {}, status: 902
        end       
        
        
    end
end