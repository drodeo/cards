module ApplicationHelper

  def cut_body(str)
    str=strip_tags(str)
    str.size>400 ? str[0..400]+'...' :str
  end

end
