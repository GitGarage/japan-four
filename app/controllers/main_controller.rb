class MainController < ApplicationController
  def index
  end

  def get_words
    lists = params[:list].chop.split(',').map{|list| list.to_i + 1}
    render json: {words: Word.where(list_id:lists)
                             .pluck(:english,:japanese).uniq}.as_json
  end

  def save_words
    Word.import_list(params[:list], params[:words])
    render json: true
  end
end