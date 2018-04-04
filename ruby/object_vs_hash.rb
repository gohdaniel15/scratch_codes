bernard = { name: "Bernard", age: 27 }

puts bernard
puts bernard.class

puts "========================================"


class Person

  def initialize(name, age)
    @name, @age = name, age
  end

end

bernard2 = Person.new("Bernard", 27)

p bernard2
p bernard2.class
# p Person.all
