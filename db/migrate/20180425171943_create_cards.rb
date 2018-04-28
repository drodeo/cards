class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title
      t.text :body
      t.boolean :visible

      t.timestamps
    end
  end
end
