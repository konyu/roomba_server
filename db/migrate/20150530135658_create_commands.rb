class CreateCommands < ActiveRecord::Migration
  def change
    create_table :commands do |t|
      t.string :command

      t.timestamps null: false
    end
  end
end
