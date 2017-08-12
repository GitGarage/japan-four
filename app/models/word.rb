class Word < ActiveRecord::Base
  belongs_to :list

  def self.import_list(list, words)
    where(list_id:list).destroy_all
    words.each{|word| create(english: word.first, japanese: word.last, list_id: list)}
  end
end
