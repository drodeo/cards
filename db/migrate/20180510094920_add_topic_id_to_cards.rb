class AddTopicIdToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :topic_id, :integer
  end
end
