class Word < ActiveRecord::Base
  belongs_to :list

  def self.import_list(list, words)
    error = ''
    where(list_id:list).destroy_all
    words.each do |word|
      error += "english: #{word.first}, japanese: #{word.last}, list: #{list}, result: "
      error += create(english: word.first, japanese: word.last, list_id: list) ? "success\n" : "failure\n"
    end
    error
  end
end
