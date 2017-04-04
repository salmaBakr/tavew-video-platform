class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.attachment :file
      t.string :title
      t.text :description
      t.decimal :length

      t.timestamps
    end
  end
end
